@extends('backend.layout')
   
@section('content')
<div class="container-fluid mt-4">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header text-center tittle-ai">Edit Buku</h1>
        </div>
    </div>
            @if ($errors->any())
        <div class="alert alert-danger">
            <strong>Edit Gagal</strong> Maaf ada kesalahan saat input data<br><br>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <div class="main-body">
        <form action="{{ route('buku.update',$buku->id) }}" enctype='multipart/form-data' method="POST">
            @csrf
            @method('PUT')
            <div class="row gutters-sm mt-3">
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                            <img src="{{ url('img-book/'.$buku->Img) }}" width="180">
                                <div class="mt-3">
                                    <h4>Foto user-profile</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h3 class="mb-0">Kode Buku</h3>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="text" name="Kode_Buku" class="form-control" value="{{ $buku->Kode_Buku }}">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h3 class="mb-0">Foto Sampul</h3>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="file" name="img_book" class="form-control" placeholder="Masukkan Gambar">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h3 class="mb-0">Judul Buku</h3>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="text" name="Judul_Buku" class="form-control" placeholder="{{ $buku->Judul_Buku }}">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h3 class="mb-0">Penulis</h3>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="text" name="Penulis" class="form-control" placeholder="{{ $buku->Penulis }}">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h3 class="mb-0">Stok</h3>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="number" name="Stok" class="form-control" placeholder="Masukkan Jumlah Stok">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3"></div>
                                <div class="col-sm-9 text-secondary">
                                    <button type="submit" class="btn btn-primary">Simpan</button>
                                    <a class="btn btn-info" href="{{ route('buku.index') }}"> Kembali</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>   
    </div>

</div>

</div>
@endsection