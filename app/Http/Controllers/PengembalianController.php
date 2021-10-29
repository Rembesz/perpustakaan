<?php

namespace App\Http\Controllers;

use App\Model\Pengembalian;
use App\Model\Buku;
use App\Model\Anggota;
use Illuminate\Http\Request;
use App\Model\Pinjaman;
use Illuminate\Support\Facades\Crypt;
use Peminjaman;
use phpDocumentor\Reflection\Types\Null_;

class PengembalianController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pengembalian = Pengembalian::paginate(10);
        return view('backend.pengembalian.index',compact('pengembalian'))->with('i', (request()->input('page', 1) - 1) * 10);
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

    // public function getTest()
    // {
    //     $sql="SELECT * FROM tbl_test";
    //     $view = $this->dbh->prepare($sql);
    //     $view->execute();
    //     $data = $view->fetchAll();
    //     dd($data);
    //     return $data;
    // }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'Tanggal_Kembali'   => 'required',
            'id_Buku'           => 'required',
            'id_Anggota'        => 'required',
            'Status'            => 'unique:pengembalian'
        ]);
        // Pengembalian::create($request->all());
        

        $cek = Pinjaman::where('id_Buku',$request->id_Buku)->where('id_Anggota',$request->id_Anggota)->pluck('id')->first();
        if($cek != null){
            $pengembalian = new Pengembalian;
            $pengembalian->Tanggal_Kembali = $request->Tanggal_Kembali;
            $pengembalian->Denda = $request->Denda;
            $pengembalian->id_Buku = $request->id_Buku;
            $pengembalian->id_Anggota = $request->id_Anggota;
            $pengembalian->save();

            $pinjaman = Pinjaman::find($cek);
            $pinjaman->Status = $pengembalian->id;
            $pinjaman->save();
        }else{
            return redirect()->route('pengembalian.create')->with('fail','Data Peminjaman tidak ditemukan');
        }

        $buku = Buku::findOrFail($request->id_Buku);
        // $stock_terakhir = Buku::findOrFail($request->id_Buku)->pluck('Stok')->first();
        $buku->Stok = $buku->Stok +1;
        $buku->update();
        return redirect()->route('pengembalian.index')->with('success','Pengembalian berhasil di input');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Pengembalian  $pengembalian
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $id = Crypt::decrypt($id);
        // dd($id);
        $pengembalian = Pengembalian::find($id);
        return view('backend.pengembalian.show',compact('pengembalian'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Pengembalian  $pengembalian
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // $id = Crypt::decrypt($id);
        $data['buku'] = Buku::all();
        $data['anggota'] = Anggota::all();
        $data['pengembalian'] = Pengembalian::find($id);
        return view('backend.pengembalian.edit',$data);
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
        $request->validate([
            'Tanggal_Kembali'   => 'required',
            'id_Buku'           => 'required',
            'id_Anggota'        => 'required',
        ]);

        $cek = Pinjaman::where('id_Buku',$request->id_Buku)->where('id_Anggota',$request->id_Anggota)->pluck('id')->first();
        if($cek != null){
        $pengembalian = Pengembalian::find($id);
        $bukutmp = $pengembalian->id_Buku;
        $pengembalian->Tanggal_Kembali = $request->Tanggal_Kembali;
        $pengembalian->Denda = $request->Denda;
        $pengembalian->id_Buku = $request->id_Buku;
        $pengembalian->id_Anggota = $request->id_Anggota;

        $refund = Buku::findOrFail($bukutmp);
        $refund->Stok = $refund->Stok +1;
        $refund->update();

        $take = Buku::findOrFail($request->id_Buku);
        $take->Stok = $take->Stok -1;
        $take->update();

        $pengembalian->save();
        }else{
            return redirect()->route('pengembalian.create')->with('fail','Data Peminjaman tidak ditemukan');
        }


        return redirect()->route('pengembalian.index')->with('succes','data berhasil di update');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Pengembalian  $pengembalian
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pengembalian = Pengembalian::findOrFail($id);
        
        $cek = Pinjaman::where('id_Buku',$pengembalian->id_Buku)->where('id_Anggota',$pengembalian->id_Anggota)->pluck('id')->first();
        $pinjaman = Pinjaman::find($cek);
        $pinjaman->Status = Null;
        $pinjaman->save();

        $buku = Buku::findOrFail($pengembalian->id_Buku);
        $buku->Stok = $buku->Stok -1;
        $buku->update();

        $pengembalian->delete();
        return redirect()->route('pengembalian.index')->with('success','Biodata berhasil dihapus');
    }
}
