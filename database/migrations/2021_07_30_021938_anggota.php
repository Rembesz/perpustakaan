<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Anggota extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('anggota',function (Blueprint $table){
            $table->id();
            $table->string('Kode_Anggota',4);
            $table->string('Img')->nullable();
            $table->string('Nama');
            $table->string('Jurusan');
            $table->BigInteger('No_Telp');
            $table->string('Alamat');
        });
    }   

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('anggota');
    }
}
