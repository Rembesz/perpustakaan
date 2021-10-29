@extends('layouts.layout')

@section('buku1')
<div class="buku1">
  <div class="all-title-box">
    <div class="container text-center">
      <h1>List Buku <span class="m_1">Daftar Buku yang tersedia saat ini</span></h1>
    </div>
  </div>

  <style type="text/css">
    p{
      font-family: serif;
      font-size: 12px;
    }
    i { 
      font-family: sans;
      color: orange;
    }
    .img-book {
      width: 100px%;
      height: 140px;
    }
    .tittle-book {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: center;
      margin:center;
      font-weight: bold;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
  }

  </style>

  <div id="overviews" class="section wb">
        <div class="container">  
          <div class="Search">
            <div class="col-md-12">
              <form class="form" method="get" action="{{ route('search') }}">
                <div class="row mb-2">
                  <div class="col-md-3 mt-1"><input type="text" name="search" class="form-control" placeholder="Cari Buku"></div>
                  <div class="col-md-1 mt-1"><button type="submit" class="btn btn-info">Cari</button></div>
                </div>
              </form>
            </div>
          </div>
          <div class="list-buku">
            <div class="col-md-12 table">
              <div class="row mt-4">  
                @foreach ($buku as $bukus)
                  <div class="col-lg-4">
                    <div class="p-3">
                      <div class="row shadow-lg bg-white rounded">
                        <div class="col-md-12 bg-info"><h2 class="tittle-book mt-2">{{ $bukus->Judul_Buku }}</h2></div>
                        <div class="col-md-12">
                          <div class="row mt-3 mb-3">
                            <div class="col-md-4">
                              <div class="image-blog">
                                @if ($bukus->Img != Null)
                                  <img src="{{ url('img-book/'.$bukus->Img) }}" width="50">
                                @else
                                   Foto Sampul Belum di Upload
                                @endif
                              </div>
                            </div>
                            <div class="col-md-8">
                                <div class="text">
                                  <strong> Penulis : {{ $bukus->Penulis }}</strong>
                                  <p>Kode Buku : {{ $bukus->Kode_Buku }}</p>
                                </div>  
                                <button type="button" class="btn btn-warning">Pinjam</button>                  
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                @endforeach
              </div><!-- end row -->
            </div>
          </div>
        </div><!-- end container -->
  </div><!-- end section -->

@endsection

