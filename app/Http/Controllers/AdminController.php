<?php

namespace App\Http\Controllers;

use App\Model\Buku;
use App\Model\Anggota;
use App\Model\Pengembalian;
use App\Model\Pinjaman;
use Illuminate\Http\Request;

class AdminController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function admin(){
        $buku = Buku::get();
        $anggota = Anggota::get();
        $pinjaman = Pinjaman::get();

        $bu_count = count($buku);
        $ang_count = count($anggota);
        $pin_count = count($pinjaman);

        return view('backend.index',compact('bu_count','ang_count','pin_count'));
    }

    public function table(){
        $buku = Buku::paginate(5);
        $anggota = Anggota::paginate(5);
        $pinjaman = Pinjaman::paginate(5);
        $pengembalian = Pengembalian::paginate(5);
        return view('backend.tables',compact('anggota','buku','pinjaman','pengembalian'))->with('i');
    }

    public function maps(){
        return view('backend.maps');
    }
    public function profile(){
        return view('backend.profiles');
    }
}
