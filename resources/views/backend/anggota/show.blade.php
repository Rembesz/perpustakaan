@php
    use Illuminate\Support\Facades\Crypt;
@endphp

@extends('backend.layout')

@section('content')

<div class="container-fluid mt-4">
  <div class="row">
    <div class="col-lg-12">
        <h1 class="page-header text-center tittle-ai">Tampilan Data Anggota</h1>
    </div>
  </div>
    <div class="main-body">
          <div class="row mt-3">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    @if ($anggota->Img != Null)
                      <img src="{{ url('img-user/'.$anggota->Img) }}" alt="Admin" class="rounded-circle" width="150">
                    @else
                      <img src="{{ asset('img-user') }}/nopick.png"  alt="Admin" class="rounded-circle" width="150">
                    @endif
                    <div class="mt-3">
                      <h4>{{ $anggota->Nama }}</h4>
                      <p class="text-muted font-size-sm">{{ $anggota->Alamat }}</p>
                      {{-- <button class="btn btn-primary">Follow</button>
                      <button class="btn btn-outline-primary">Message</button> --}}
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3 table table-bordered">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h3 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h3>
                    <span class="text-dark"><a href="https://www.google.com/search?q=twitter {{ $anggota->Nama }}">Cek disini</a></span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h3 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h3>
                    <span class="text-dark"><a href="https://www.google.com/search?q=instagram {{ $anggota->Nama }}">Cek disini</a></span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h3 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-dark"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h3>
                    <span class="text-dark"><a href="https://www.google.com/search?q=facebook {{ $anggota->Nama }}">Cek disini</a></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-8 ">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h3 class="mb-0">Kode Anggota</h3>
                    </div>
                    <div class="col-sm-9 text-dark">
                      <h3 class="text-muted">{{ $anggota->Kode_Anggota }}</h3>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h3 class="mb-0">Nama</h3>
                    </div>
                    <div class="col-sm-9 text-dark">
                      <h3 class="text-muted">{{ $anggota->Nama }}</h3>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h3 class="mb-0">Jurusan</h3>
                    </div>
                    <div class="col-sm-9 text-dark">
                      <h3 class="text-muted">{{ $anggota->Jurusan }}</h3>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h3 class="mb-0">Telepon</h3>
                    </div>
                    <div class="col-sm-9 text-dark">
                      <h3 class="text-muted">+62{{ $anggota->No_Telp }}</h3>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h3 class="mb-0">Alamat</h3>
                    </div>
                    <div class="col-sm-9 text-dark">
                      <h3 class="text-muted">{{ $anggota->Alamat }}</h3>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-12">
                      <a class="btn btn-primary" href="{{ route('anggota.edit', Crypt::encryptString($anggota->id)) }}">Edit</a>
                      <a class="btn btn-info" href="{{ route('anggota.index') }}"> Kembali</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </div>
</div>

@endsection