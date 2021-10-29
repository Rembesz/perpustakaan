<?php

namespace App\Http\Controllers;

use App\Model\Buku;
use Illuminate\Http\Request;

class BukuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $buku = Buku::paginate(10);
        return view('backend.buku.index',compact('buku'))->with('i', (request()->input('page', 1) - 1) * 10);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.buku.create');
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
            'Kode_Buku' => 'required|unique:buku',
            'Judul_Buku'=> 'required|unique:buku',
            'img_book'  => 'file|image|mimes:jpeg,png,jpg|max:2048',
            'Penulis'   => 'required',
            'Stok'      => 'required',
        ]);

        if ($request->hasFile('img_book')){
            $img_book = $request->file('img_book');
            $img_name = time()."_".$img_book->getClientOriginalName();
            $path = public_path('img-book');
            $img_book->move($path,$img_name);

            $buku = new Buku;
            $buku->Kode_Buku = $request->Kode_Buku;
            $buku->Img = $img_name;
            $buku->Judul_Buku = $request->Judul_Buku;
            $buku->Penulis = $request->Penulis;
            $buku->Stok = $request->Stok;
            $buku->save();
        }else{
            $buku = new Buku;
            $buku->Kode_Buku = $request->Kode_Buku;
            $buku->Img = Null;
            $buku->Judul_Buku = $request->Judul_Buku;
            $buku->Penulis = $request->Penulis;
            $buku->Stok = $request->Stok;
            $buku->save();
        }

        return redirect()->route('buku.index')->with('success','Buku berhasil di input');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Buku  $buku
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $buku = Buku::find($id);
        return view('backend.buku.show',compact('buku'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Buku  $buku
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $buku = Buku::find($id);
        return view('backend.buku.edit',compact('buku'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Buku  $buku
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'Kode_Buku' => 'required|unique:buku',
            'img_book'  => 'file|image|mimes:jpeg,png,jpg|max:2048',
            'Judul_Buku'=> 'required',
            'Penulis'   => 'required',
            'Stok'      => 'required',
        ]);
        
        // $buku = Buku::findOrFail($id);
        if ($request->hasFile('img_book')){    
            $buku = Buku::find($id);

            $path = public_path('img-book/'.$buku->Img);
            if ($buku->Img != Null){
                unlink($path);
            }

            $img_book = $request->file('img_book');
            $img_name = time()."_".$img_book->getClientOriginalName();
            $path = public_path('img-book');
            $img_book->move($path,$img_name);

            $buku->Kode_Buku = $request->Kode_Buku;
            $buku->Img = $img_name;
            $buku->Judul_Buku = $request->Judul_Buku;
            $buku->Penulis = $request->Penulis;
            $buku->Stok = $request->Stok;
            $buku->save();
        }
        else {
            $buku = Buku::find($id);
            $buku->Kode_Buku = $request->Kode_Buku;
            $buku->Img = Null;
            $buku->Judul_Buku = $request->Judul_Buku;
            $buku->Penulis = $request->Penulis;
            $buku->Stok = $request->Stok;
            dd( $buku->Img);
            $buku->save();
        }

        return redirect()->route('buku.index')->with('succes','Buku berhasil di update');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Buku  $buku
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $buku = Buku::findOrFail($id);
        $path = public_path('img-book/'.$buku->Img);
        if ($buku->Img != Null){
            unlink($path);
        }
        $buku->delete();
        return redirect()->route('buku.index')->with('success','Buku berhasil dihapus');
    }
}
