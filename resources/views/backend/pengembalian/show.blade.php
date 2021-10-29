@extends('backend.layout')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Show Data Pengembalian</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Judul Buku        :</strong>
                {{ $pengembalian->Tanggal_Kembali }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Denda       :</strong>
                {{ $pengembalian->Denda }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                @foreach ($pengembalian->buku as $itemBuku)
                <strong>Buku     :</strong>
                        {{ $itemBuku->Judul_Buku }}<br>
                <strong>Penulis     :</strong>
                        {{ $itemBuku->Penulis }}<br>
                <strong>Stok     :</strong>
                        {{ $itemBuku->Stok }}
                @endforeach
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Nama     :</strong>
                {{ $pengembalian->anggota->Nama }}<br>
                <strong>No Telepon :</strong>
                {{ $pengembalian->anggota->No_Telp }}
            </div>
        </div>
        <div class="pull-right">
            <a class="btn btn-primary" href="{{ route('pengembalian.index') }}"> Kembali</a>
        </div>
    </div>
</div>
@endsection