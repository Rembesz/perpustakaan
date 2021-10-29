<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Pengembalian extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pengembalian',function (Blueprint $table){
            $table->id();
            $table->date('Tanggal_Kembali');
            $table->unsignedInteger('Denda')->nullable();
            $table->foreignId('id_Buku')->constrained('buku')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('id_Anggota')->constrained('anggota')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pengembalian');
    }
}
