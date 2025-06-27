@php
    use Illuminate\Support\Facades\Crypt;
@endphp

@extends('backend.layout')
   
@section('content')
<div class="container-fluid mt-4">
    <div class="col-lg-12">
        <h1 class="page-header text-center tittle-ai">Tampilan Data Anggota</h1>
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
  
    {{-- <form action="{{ route('anggota.update',$anggota->id) }}" method="POST">
        @csrf
        @method('PUT')
   
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group row">
                    <label for="#" class="col-sm-2 col-form-label"><strong>Kode Anggota</strong></label>
                    <div class="col-sm-6">
                        <input type="text" name="Kode_Anggota" class="form-control" placeholder="{{ $anggota->Kode_Anggota }}">
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group row">
                    <label for="#" class="col-sm-2 col-form-label"><strong>Nama</strong></label>
                    <div class="col-sm-6">
                        <input type="text" name="Nama" class="form-control" placeholder="Masukkan Nama">
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group row">
                    <label for="#" class="col-sm-2 col-form-label"><strong>Jurusan</strong></label>
                    <div class="col-sm-6">
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
                    <label for="#" class="col-sm-2 col-form-label"><strong>No Telepon</strong></label>
                    <div class="col-sm-6">
                        <input type="text" name="No_Telp" class="form-control" placeholder="+62">
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group row">
                    <label for="#" class="col-sm-2 col-form-label"><strong>Alamat</strong></label>
                    <div class="col-sm-6">
                    <textarea class="form-control" style="height:150px" name="Alamat" placeholder="Alamat"></textarea>
                    </div>
                </div>
            </div>
            <div class="col-xs-8 col-sm-8 col-md-8 text-right">
                    <button type="submit" class="btn btn-success">Simpan</button>
                    <a class="btn btn-danger" href="{{ route('anggota.index') }}"> Kembali</a>
            </div>
        </div>
    </form> --}}

    <div class="main-body">
        <form action="{{ route('anggota.update', Crypt::encryptString($anggota->id)) }}" enctype='multipart/form-data' method="POST">
            @csrf
            @method('PUT')
            <div class="row mt-3">
                <div class="col-md-4 mb-3">
                    <div class="card">
                    <div class="card-body">
                        <div class="d-flex flex-column align-items-center text-center">
                          @if ($anggota->Img != Null)
                            <img src="{{ url('img-user/'.$anggota->Img) }}" alt="Admin" class="rounded-circle" width="150">
                          @else
                            <img src="{{ asset('img-user') }}/avatar.jpg"  alt="Admin" class="rounded-circle" width="150">
                          @endif
                        <div class="mt-3">
                            <h4>{{ $anggota->Nama }}</h4>
                            <p class="text-dark mb-1">Mahasiswa
                              {{ $anggota->Jurusan }}</p>
                            <p class="text-muted font-size-sm">{{ $anggota->Alamat }}</p>
                            {{-- <div class="row">
                                <div class="col text-center">
                                    <input type="file" name="file" class="form-control" accept="image/*">
                                </div>
                            </div> --}}
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="card mt-3 table table-bordered">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h3 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h3>
                        <span class="text-dark">{{ @$anggota->Nama }}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h3 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h3>
                        <span class="text-dark">{{ $anggota->Nama }}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h3 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-dark"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h3>
                        <span class="text-dark">{{ $anggota->Nama }}</span>
                        </li>
                    </ul>
                    </div>
                </div>   
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h3 class="mb-0">Kode Anggota</h3>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="text" name="Kode_Anggota" class="form-control" value="{{ $anggota->Kode_Anggota }}">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h3 class="mb-0">Nama</h3>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="text" name="Nama" class="form-control" value="{{ $anggota->Nama }}">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h3 class="mb-0">Foto</h3>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="file" name="file" class="form-control" placeholder="Masukkan Nama" accept="image/*">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h3 class="mb-0">Jurusan</h3>
                                </div>
                                <div class="col-sm-9 text-secondary">
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
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h3 class="mb-0">Telepon</h3>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input type="text" name="No_Telp" class="form-control" placeholder="+62" value="+62 {{ $anggota->No_Telp }}">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h3 class="mb-0">Alamat</h3>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <textarea class="form-control" style="height:170px" name="Alamat" placeholder="Alamat"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3"></div>
                                <div class="col-sm-9 text-secondary">
                                    <button type="submit" class="btn btn-primary">Simpan</button>
                                    <a class="btn btn-info" href="{{ route('anggota.index') }}"> Kembali</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>   
    </div>
</div>

@endsection