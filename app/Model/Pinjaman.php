<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Pinjaman extends Model
{
    protected $table = 'pinjaman';

    public $timestamps = false;

    public function buku(){
        return $this->hasMany('App\Model\Buku', 'id', 'id_Buku');
    }
    public function anggota(){
        return $this->hasOne('App\Model\Anggota', 'id', 'id_Anggota');
    }
    public function pengembalian(){
        return $this->hasMany('App\Model\Pengembalian', 'id', 'Status');
    }
}
