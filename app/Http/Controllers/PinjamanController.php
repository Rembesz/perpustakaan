<?php

namespace App\Http\Controllers;

use App\Model\Pinjaman;
use App\Model\Buku;
use App\Model\Anggota;
use Illuminate\Http\Request;
use Carbon\Carbon;
Use Session;

class pinjamanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pinjaman = Pinjaman::Orderby('Tanggal_Pinjam')->paginate(100);
        $date = Carbon::today()->toDateString();
        return view('backend.pinjaman.index',compact('pinjaman'));
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
        return view('backend.pinjaman.create',$data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'Tanggal_Pinjam'    => 'required',
            'Tanggal_Kembali'   => 'required',
            'id_Buku'           => 'required',
            'id_Anggota'        => 'required',
            
        ]);
        //Pinjaman::create($request->all());
        
        // $cek = Anggota::where('Kode_Anggota',$request->Kode_Anggota)->pluck('id')->first();
        // if($cek != null){
            $pinjaman = new Pinjaman;
            $pinjaman->Tanggal_Pinjam = $request->Tanggal_Pinjam;
            $pinjaman->Tanggal_Kembali = $request->Tanggal_Kembali;
            $pinjaman->id_Buku = $request->id_Buku;
            $pinjaman->id_Anggota = $request->id_Anggota;
            $pinjaman->save();
        // }else{
        //     return redirect()->route('pinjaman.index')->with('fail','Pinjaman gagal Kode Anggota tidak ditemukan');
        // }

        $buku = Buku::findOrFail($request->id_Buku);
        // $stock_terakhir = Buku::findOrFail($request->id_Buku)->pluck('Stok')->first();
        if($buku->Stok > 0 ){
            $buku->Stok = $buku->Stok -1;
            $buku->update();
            return redirect()->route('pinjaman.index')->with('success','Pinjaman berhasil di input');
        }else{
            return redirect()->route('pinjaman.index')->with('fail','Pinjaman gagal di input stok buku habis');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\pinjaman  $pinjaman
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $pinjaman ['pinjaman'] = Pinjaman::where('id_Anggota',$id)->get();
        return view('backend.pinjaman.show',$pinjaman);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\pinjaman  $pinjaman
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $pinjaman = Pinjaman::find($id);
        $data['buku'] = Buku::all();
        $data['anggota'] = Anggota::all();
        return view('backend.pinjaman.edit',$pinjaman,$data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\pinjaman  $pinjaman
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'Tanggal_Pinjam'    => 'required',
            'Tanggal_Kembali'   => 'required',
            'id_Buku'           => 'required',
            'id_Anggota'        => 'required',
        ]);

        $pinjaman = Pinjaman::find($id);
        $bukutmp = $pinjaman->id_Buku;

        $refund = Buku::findOrFail($bukutmp);
        $refund->Stok = $refund->Stok +1;
        $refund->update();

        $pinjaman->Tanggal_Pinjam = $request->Tanggal_Pinjam;
        $pinjaman->Tanggal_Kembali = $request->Tanggal_Kembali;
        $pinjaman->id_Buku = $request->id_Buku;
        $pinjaman->id_Anggota = $request->id_Anggota;
        
        $take = Buku::findOrFail($request->id_Buku);
        $take->Stok = $take->Stok -1;
        $take->update();
        
        $pinjaman->save();

        return redirect()->route('pinjaman.index')->with('success','Pinjaman berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\pinjaman  $pinjaman
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pinjaman = Pinjaman::find($id);

        $take = Buku::findOrFail($pinjaman->id_Buku);
        $take->Stok = $take->Stok +1;
        $take->update();

        $pinjaman->delete();
        return redirect()->route('pinjaman.index')->with('success','Pinjaman berhasil dihapus');
    }
}
