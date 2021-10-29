<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Buku;
use App\Model\Anggota;
use App\Model\Pinjaman;
use App\Model\Pengembalian;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('index'); 
    }
    public function anggota(){
        $anggota = Anggota::all();
        return view('anggota',compact('anggota'));
    }
    public function searchmember(Request $request){
        $keyword = $request->searchmember;
        $anggota = Anggota::where('Nama', 'like', '%'.$keyword.'%')->orWhere('Kode_Anggota', 'like', '%'.$keyword.'%')->paginate(40);
        return view('anggota',compact('anggota'));
    }
    public function listbook(){
        $buku = Buku::all();
        return view('list_buku',compact('buku'));
    }
    public function search(Request $request){
        $keyword = $request->search;
        $buku = Buku::where('Judul_Buku', 'like', '%'.$keyword.'%')->orWhere('Kode_Buku', 'like', '%'.$keyword.'%')->paginate(30);
        return view('list_buku',compact('buku'));
    }
    public function about(){
        return view('about');
    }
    public function contact(){
        return view ('kontak');
    }
}
