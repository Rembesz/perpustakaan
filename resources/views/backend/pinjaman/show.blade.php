@extends('backend.layout')

@section('content')

<div class="header pb-6 d-flex align-items-center" style="min-height: 300px; background-size: cover; background-position: center top;">
    <!-- Mask -->
    <span class="mask bg-gradient-default opacity-8"></span>
    <!-- Header container -->
    <div class="container-fluid d-flex align-items-center">
      <div class="row">
        <div class="col-lg-12 col-md-10">
          <h1 class="display-2 text-white">Hello {{ Auth::user()->name }}</h1>
          <p class="text-white mt-0 mb-5">Berikut merupakan Data Anggota dan Buku yang di Pinjam</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Page content -->
  <div class="container-fluid mt--6">
    <div class="row">
      <div class="col-xl-4 order-xl-2">
        <div class="card card-profile">
          <img src="{{ asset('dashboard') }}/assets/img/theme/img-1-1000x600.jpg" alt="Image placeholder" class="card-img-top">
          <div class="row justify-content-center">
            <div class="col-lg-3 order-lg-2">
              <div class="card-profile-image">
                <a href="#">
                  @foreach ($pinjaman->unique('id_Anggota') as $pinjam) 
                    @if ($pinjam->anggota->Img != Null)
                      <img src="{{ url('img-user/'.$pinjam->anggota->Img) }}" width="100px">
                    @else
                      <img src="{{ asset('img-user') }}/avatar.jpg" class="rounded-circle">      
                    @endif
                  @endforeach
                </a>
              </div>
            </div>
          </div>
          <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
            <div class="d-flex justify-content-between">
              {{-- <a href="#" class="btn btn-sm btn-info  mr-4 ">Connect</a>
              <a href="#" class="btn btn-sm btn-default float-right">Message</a> --}}
            </div>
          </div>
          <div class="card-body pt-0">
            <div class="row">
              <div class="col">
                <div class="card-profile-stats d-flex justify-content-center">
                </div>
              </div>
            </div>
            <div class="text-center">
              <h5 class="h3">
                @foreach ($pinjaman->unique('id_Anggota') as $pinjam) 
                {{ $pinjam->anggota->Nama }}
                @endforeach
              </h5>
              <div class="h5 font-weight-300">
                <i class="ni location_pin mr-2"></i>Kode Anggota
              </div>
              <div>
                <i class="ni education_hat mr-2"></i>
                @foreach ($pinjaman->unique('id_Anggota') as $pinjam) 
                {{ $pinjam->anggota->Kode_Anggota }}
                @endforeach
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-8 order-xl-1">
        <div class="card">
          <div class="card-header">
            <div class="row align-items-center">
              <div class="col-8">
                <h2 class="mb-0 tittle-ai">Data Peminjaman </h2>
              </div>
            </div>
          </div>
          <div class="card-body">
            <form>
              <h6 class="heading-small text-muted mb-4">Data Anggota Peminjam</h6>
              <div class="pl-lg-4">
                    <div class="row mt-3    ">
                        <div class="col-sm-3">
                            <h3 class="m-b-10 f-w-600">Nama</h3>
                        </div>
                        <div class="col-sm-6">
                            <h3 class="text-muted f-w-400">
                                @foreach ($pinjaman->unique('id_Anggota') as $pinjam) 
                                {{ $pinjam->anggota->Nama }}
                                @endforeach
                            </h3>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <h3 class="m-b-10 f-w-600">No. Telepon</h3>
                        </div>
                        <div class="col-sm-9">
                            <h3 class="text-muted f-w-400">
                                @foreach ($pinjaman->unique('id_Anggota') as $pinjam) 
                                +62 {{ $pinjam->anggota->No_Telp }}
                                @endforeach
                            </h3>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <h3 class="m-b-10 f-w-600">Alamat</h3>
                        </div>
                        <div class="col-sm-9">
                            <h3 class="text-muted f-w-400">
                                @foreach ($pinjaman->unique('id_Anggota') as $pinjam) 
                                {{ $pinjam->anggota->Alamat }}
                                @endforeach
                            </h3>
                        </div>
                    </div>
              </div>
              <hr class="my-4" />
              <!-- Address -->
              <h6 class="heading-small text-muted mb-4">Data Buku yang Di Pinjam</h6>
              <div class="pl-lg-4">
                @foreach ($pinjaman as $pinjam) 
                    @foreach ($pinjam->buku as $books)
                        <div class="row mt-2">
                            <div class="col-sm-6">
                                <h3 class="m-b-10 f-w-600">Judul Buku</h3>
                                <h3 class="text-muted f-w-400">
                                    {{ $books->Judul_Buku}}
                                </h3>
                            </div>
                            <div class="col-sm-6">
                                <h3 class="m-b-10 f-w-600 ">Action</h3>
                                <h3 class="text-muted f-w-400">
                                    <form method="POST">
                                      @csrf
                                        <a class="btn btn-primary" href="{{ route('pinjaman.edit',$pinjam->id) }}">Edit</a>
                                        {{-- <dd>{{ $pinjam->id }}</dd> --}}
                                        <a class="btn btn-danger" href="{{ route('pinjaman.delete',$pinjam->id) }}">Hapus</a>
                                        
                                        @method('delete')
                        
                                        {{-- <button type="submit" class="btn btn-danger">Hapus</button> --}}
                                    </form>
                                </h3>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-sm-6">
                                <h3 class="m-b-10 f-w-600">Tanggal Peminjaman</h3>
                                <h3 class="text-muted f-w-400">
                                    {{ $pinjam->Tanggal_Pinjam}} sampai {{ $pinjam->Tanggal_Kembali}} 
                                </h3>
                            </div>
                            <div class="col-sm-3">
                                <h3 class="m-b-10 f-w-600">Status</h3>
                                <h3 class="text-muted f-w-400">
                                    @if( $pinjam->Status != Null)
                                        <a href ="" class="btn btn-success"><i class="fa fa-check" aria-hidden="true"></i></a>
                                    @else 
                                        <a href ="" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i></a>
                                    @endif
                                </h3>
                            </div>
                            <div class="col-sm-3">
                                <h3 class="m-b-10 f-w-600">Denda</h3>
                                <h3 class="text-muted f-w-400">
                                  {{-- <dd>{{ $pinjam->Status }}</dd> --}}
                                  @if( $pinjam->Status != Null)
                                    @foreach ($pinjam->pengembalian as $item)
                                      @if( $item->Denda != Null)
                                        Rp {{ $item->Denda }}
                                      @else 
                                        Tidak ada denda
                                      @endif
                                    @endforeach
                                  @else 
                                      ---
                                  @endif
                                  
                                </h3>
                            </div>
                        </div>
                        <hr class="my-4" />
                    @endforeach
                @endforeach
              </div>
            </form>
                <a class="btn btn-primary float-right" href="{{ route('pinjaman.index') }}"> Kembali</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <footer class="footer pt-0">
      <div class="row align-items-center justify-content-lg-between">
        <div class="col-lg-6">
          <div class="copyright text-center  text-lg-left  text-muted">
            &copy; 2021 <a href="https://www.creative-tim.com" class="font-weight-bold ml-1" target="_blank">PerpustakaanKu</a>
          </div>
        </div>
      </div>
    </footer>
</div>
@endsection