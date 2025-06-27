<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Peminjaman extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pinjaman',function (Blueprint $table){
            $table->id();
            $table->date('Tanggal_Pinjam');
            $table->date('Tanggal_Kembali');
            $table->foreignId('id_Buku')->constrained('buku')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('id_Anggota')->constrained('anggota')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('Status')->nullable()->constrained('pengembalian')->onUpdate('cascade')->onDelete('cascade');
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('peminjaman');
    }
}
