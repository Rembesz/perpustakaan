@extends('backend.layout')
  
@section('content')
<div class="container-fluid">
    <div class="row mt-4">
        <div class="col-lg-12">
            <h1 class="page-header text-center tittle-ai">Tambah Anggota</h1>
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
    
    <form action="{{ route('anggota.store') }}" enctype='multipart/form-data'  method="POST">
        @csrf
            <div class="col-lg-12 mt-3">
                <div class="row">
                    <div class="col-2 align-self-center"></div>
                    <div class="col-8 align-self-center rounded bg-white shadow-lg border-primary">
                        <div class="row mt-4 mb-4">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group row">
                                    <label for="#" class="col-sm-3 col-form-label"><strong>Kode Anggota</strong></label>
                                    <div class="col-sm-4">
                                        <input type="text" name="Kode_Anggota" class="form-control" placeholder="Masukkan Kode Anggota">
                                    </div>
                                    <label for="#" class="col-sm-1 col-form-label"><strong>Foto</strong></label>
                                    <div class="col-sm-4">
                                        <input type="file" name="file" class="form-control" placeholder="Masukkan Gambar">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group row">
                                    <label for="#" class="col-sm-3 col-form-label"><strong>Nama</strong></label>
                                    <div class="col-sm-9">
                                        <input type="text" name="Nama" class="form-control" placeholder="Masukkan Nama">
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group row">
                                    <label for="#" class="col-sm-3 col-form-label"><strong>Jurusan</strong></label>
                                    <div class="col-sm-9">
                                        <select class="form-control" name="Jurusan">
                                        <option value="">Pilih Jurusan :</option>
                                        <option value="Informatika">Informatika</option>
                                        <option value="Telekomunikasi">Telekomunikasi</option>
                                        <option value="Elektronika">Elektronika</option>
                                        <option value="Robotika">Robotika</option>
                                        <option value="Mekatronika">Mekatronika</option>
                                        </select>
                                    </div>  
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group row">
                                    <label for="#" class="col-sm-3 col-form-label"><strong>No Telepon</strong></label>
                                    <div class="col-sm-9">
                                        <input type="text" name="No_Telp" class="form-control" placeholder="+62">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group row">
                                    <label for="#" class="col-sm-3 col-form-label"><strong>Alamat</strong></label>
                                    <div class="col-sm-9">
                                    <textarea class="form-control" style="height:150px" name="Alamat" placeholder="Alamat"></textarea>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xs-8 col-sm-8 col-md-8 float-left">
                                <button type="submit" class="btn btn-primary mt-1">Simpan</button>
                                <a class="btn btn-info mt-1" href="{{ route('anggota.index') }}"> Kembali</a>
                            </div>   
                        </div>
                    </div>
                    <div class="col-2 align-self-center"></div>
                </div>
            </div>
    </form>
</div>
@endsection