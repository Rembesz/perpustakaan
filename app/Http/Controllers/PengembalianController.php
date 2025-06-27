<?php

namespace App\Http\Controllers;

use App\Model\Pengembalian;
use App\Model\Buku;
use App\Model\Anggota;
use Illuminate\Http\Request;
use App\Model\Pinjaman;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Log;
use Peminjaman;
use phpDocumentor\Reflection\Types\Null_;
use Carbon\Carbon;

class PengembalianController extends Controller
{
    public function __construct()
    {
        // Rate limiting untuk mencegah brute force
        $this->middleware('throttle:10,1')->only(['store', 'destroy']);
        
        // Pastikan user sudah login
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data['buku'] = Buku::all();
        $data['anggota'] = Anggota::all();
        return view('backend.pengembalian.create',$data);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validasi
        $request->validate([
            'Tanggal_Kembali'   => 'required|date',
            'id_Buku'           => 'required|integer|exists:buku,id',
            'id_Anggota'        => 'required|integer|exists:anggota,id',
            'pinjaman_id'       => 'required|integer|exists:pinjaman,id',
            'session_token'     => 'required|string',
        ]);

        // Validasi session token
        if ($request->session_token !== session()->token()) {
            Log::warning('Invalid session token attempt by user: ' . (auth()->user()->id ?? 'guest'));
            return redirect()->back()->with('error', 'Sesi tidak valid');
        }

        // Sanitasi input
        $idBuku = (int) $request->id_Buku;
        $idAnggota = (int) $request->id_Anggota;
        $pinjamanId = (int) $request->pinjaman_id;

        // Ambil data pinjaman yang masih aktif
        $pinjaman = Pinjaman::where('id', $pinjamanId)
            ->where('id_Buku', $idBuku)
            ->where('id_Anggota', $idAnggota)
            ->whereNull('Status')
            ->first();

        if (!$pinjaman) {
            Log::warning('Invalid pinjaman access attempt - ID: ' . $pinjamanId . ' by user: ' . (auth()->user()->id ?? 'guest'));
            return redirect()->back()->with('error', 'Data pinjaman tidak ditemukan');
        }

        // Cek apakah user berhak mengakses data ini (optional)
        // if (!auth()->user()->hasRole('admin')) {
        //     return redirect()->back()->with('error', 'Anda tidak memiliki akses');
        // }

        $tanggalKembaliPinjaman = Carbon::parse($pinjaman->Tanggal_Kembali);
        $tanggalKembaliHariIni = Carbon::now();
        $selisihHari = $tanggalKembaliPinjaman->diffInDays($tanggalKembaliHariIni, false);

        // Hitung denda otomatis
        $denda = 0;
        if ($selisihHari > 0 && $selisihHari <= 7) {
            $denda = 10000;
        } elseif ($selisihHari > 7 && $selisihHari <= 14) {
            $denda = 20000;
        } elseif ($selisihHari > 14 && $selisihHari <= 21) {
            $denda = 30000;
        } elseif ($selisihHari > 21 && $selisihHari <= 28) {
            $denda = 40000;
        } elseif ($selisihHari > 28) {
            $denda = 100000;
        }

        try {
            // Simpan pengembalian
            $pengembalian = new Pengembalian;
            $pengembalian->Tanggal_Kembali = $tanggalKembaliHariIni->toDateString();
            $pengembalian->Denda = $denda;
            $pengembalian->id_Buku = $idBuku;
            $pengembalian->id_Anggota = $idAnggota;
            $pengembalian->save();

            // Update status pinjaman
            $pinjaman->Status = $pengembalian->id;
            $pinjaman->save();

            // Update stok buku
            $buku = Buku::find($idBuku);
            if ($buku) {
                $buku->Stok += 1;
                $buku->save();
            }

            return redirect()->route('pinjaman.show', $idAnggota)->with('success', 'Pengembalian berhasil!');
        } catch (\Exception $e) {
            Log::error('Error in pengembalian store: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Terjadi kesalahan sistem');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Pengembalian  $pengembalian
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Pengembalian  $pengembalian
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Pengembalian  $pengembalian
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Pengembalian  $pengembalian
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            // Validasi ID
            if (!is_numeric($id)) {
                return redirect()->back()->with('error', 'ID tidak valid');
            }

            $pengembalian = Pengembalian::findOrFail($id);
            
            // Cek apakah user berhak mengakses data ini (optional)
            // if (!auth()->user()->hasRole('admin')) {
            //     return redirect()->back()->with('error', 'Anda tidak memiliki akses');
            // }
            
            // Cek kepemilikan data - hanya bisa hapus pengembalian yang terkait dengan pinjaman yang sedang dilihat
            $cek = Pinjaman::where('id_Buku',$pengembalian->id_Buku)
                          ->where('id_Anggota',$pengembalian->id_Anggota)
                          ->pluck('id')->first();
            $pinjaman = Pinjaman::find($cek);
            
            if (!$pinjaman) {
                return redirect()->back()->with('error', 'Data pinjaman tidak ditemukan');
            }
            
            // Validasi tambahan: pastikan pengembalian ini benar-benar terkait dengan pinjaman yang sedang dilihat
            if ($pinjaman->Status != $pengembalian->id) {
                Log::warning('Unauthorized access attempt to pengembalian ID: ' . $id . ' by user: ' . (auth()->user()->id ?? 'guest'));
                return redirect()->back()->with('error', 'Akses tidak diizinkan');
            }
            
            $pinjaman->Status = Null;
            $pinjaman->save();

            $buku = Buku::findOrFail($pengembalian->id_Buku);
            $buku->Stok = $buku->Stok -1;
            $buku->update();

            $pengembalian->delete();
            return redirect()->route('pinjaman.show', $pengembalian->id_Anggota)->with('success','Pengembalian berhasil dibatalkan!');
        } catch (\Exception $e) {
            Log::error('Error in pengembalian destroy: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Terjadi kesalahan sistem');
        }
    }
}
