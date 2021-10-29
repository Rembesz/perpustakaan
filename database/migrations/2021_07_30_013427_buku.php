<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Buku extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buku',function (Blueprint $table){
            $table->id();
            $table->string('Kode_Buku',4);
            $table->string('Img')->nullable();
            $table->string('Judul_Buku');
            $table->string('Penulis');
            $table->integer('Stok');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('buku');
    }
}
