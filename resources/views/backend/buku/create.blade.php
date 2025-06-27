@extends('backend.layout')
  
@section('content')
<div class="container-fluid">
    <div class="row mt-4">
        <div class="col-lg-12">
            <h1 class="page-header text-center tittle-ai">Tambah Buku</h1>
        </div>
    </div>
    @if ($errors->any())
    <div class="alert alert-danger">
        <strong>Maaf</strong> Data yang anda inputkan bermasalah.<br><br>
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif
    
    <form action="{{ route('buku.store') }}" enctype='multipart/form-data' method="POST">
        @csrf      
        <div class="col-lg-12 mt-3">
            <div class="row">
                <div class="col-2 align-self-center"></div>
                <div class="col-8 align-self-center rounded bg-white shadow-lg border-primary">
                    <div class="row mt-4 mb-4">
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="form-group row">
                                <label for="#" class="col-sm-3 col-form-label"><strong>Kode Buku</strong></label>
                                <div class="col-sm-4">
                                    <input type="text" name="Kode_Buku" class="form-control" placeholder="Masukkan Kode Buku">
                                </div>
                                <label for="#" class="col-sm col-form-label"><strong>Foto</strong></label>
                                <div class="col-sm-4">
                                    <input type="file" name="img_book" class="form-control" placeholder="Masukkan Gambar" accept="image/*">      
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="form-group row">
                                <label for="#" class="col-sm-3 col-form-label"><strong>Judul Buku</strong></label>
                                <div class="col-sm-9">
                                    <input type="text" name="Judul_Buku" class="form-control" placeholder="Masukkan Judul Buku">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="form-group row">
                                <label for="#" class="col-sm-3 col-form-label"><strong>Penulis</strong></label>
                                <div class="col-sm-4">
                                    <input type="text" name="Penulis" class="form-control" placeholder="Nama Penulis">
                                </div>
                                <label for="#" class="col-sm-2 col-form-label"><strong>Upload PDF</strong></label>
                                <div class="col-sm-3">
                                    <input type="file" name="filepdf" class="form-control" placeholder="Maks. 20 mb" accept=".pdf">      
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="form-group row">
                                <label for="#" class="col-sm-3 col-form-label"><strong>Stok</strong></label>
                                <div class="col-sm-9">
                                    <input type="number" name="Stok" class="form-control" placeholder="Jumlah Stok Tersedia">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 float-center">
                                <button type="submit" class="btn btn-primary mt-1">Simpan</button>
                                <a class="btn btn-info mt-1" href="{{ route('buku.index') }}"> Kembali</a>
                        </div>  
                    </div>
                </div>
                <div class="col-2 align-self-center"></div>
            </div>
        </div>
    </form>
</div>
@endsection