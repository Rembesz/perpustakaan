@extends('backend.layout')

@section('content')
<!-- Include CSS for this page only -->
<link rel="stylesheet" href="{{ asset('css/buku-show.css') }}">

@php
    use Illuminate\Support\Facades\Crypt;
@endphp

@if(isset($buku) && $buku)
<!-- Meta tags for JavaScript -->
@if ($buku->filepdf != Null)
<meta name="pdf-url" content="{{ route('buku.stream', Crypt::encryptString($buku->id)) }}">
<meta name="buku-judul" content="{{ $buku->Judul_Buku }}">
<meta name="buku-penulis" content="{{ $buku->Penulis }}">
<meta name="buku-kode" content="{{ $buku->Kode_Buku }}">
<meta name="buku-image" content="{{ $buku->Img ? url('img-book/'.$buku->Img) : url('img-user/nopick.png') }}">
@endif

<!DOCTYPE html>

<div class="container-fluid mt-4">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header text-center tittle-ai">Tampilan Data Buku</h1>
        </div>
    </div>
<div class="page-content page-container" id="page-content">
    <div class="col-sm-12 mt-3">
        <div class="col-sm-4"></div>
        <div class="col-sm-6 center">
            <div class="card user-card-full">
                <div class="row m-l-0 m-r-0">
                    <div class="col-sm-4 bg-c-lite-green user-profile">
                        <div class="card-block text-center text-white">
                            <div class="m-b-25"> 
                                @if ($buku->Img != Null)
                                    <img src="{{ url('img-book/'.$buku->Img) }}" alt="Admin" width="100">
                                @else
                                    Image Not Found
                                @endif
                            </div>
                            <h6 class="f-w-600">{{ $buku->Judul_Buku }}</h6>
                            <p>Kode Buku : {{ $buku->Kode_Buku }}</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="card-block">
                            <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="m-b-10 f-w-600">Penulis</p>
                                    <h6 class="text-muted f-w-400">{{ $buku->Penulis }}</h6>
                                </div>
                                <div class="col-sm-6">
                                    <p class="m-b-10 f-w-600">Temukan Penulis</p>
                                    <h6 class="text-muted f-w-400"><a href="https://www.google.com/search?q={{ $buku->Penulis }}">Klik disini</h6></a>
                                </div>
                            </div>
                            <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Sisa Stok = {{ $buku->Stok }}</h6>
                            
                            <div class="row ml-1">
                                <a class="btn btn-primary" href="{{ route('buku.index') }}"> Kembali</a>
                            </div>
                            <ul class="social-link list-unstyled m-t-40 m-b-10">
                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4"></div>
    </div>
</div>

<!-- PDF Preview Section -->
@if ($buku->filepdf != Null)
<div class="container-fluid mt-4">
    <div class="row">
        <div class="col-12">
            <!-- Preview PDF Toggle Button -->
            <button id="toggle-pdf-preview" class="btn btn-info mb-3">Preview PDF</button>
            <div class="card" id="pdf-preview-card">
                <div class="card-header">
                    <h5 class="mb-0">Preview PDF - {{ $buku->Judul_Buku }}</h5>
                </div>
                <div class="card-body" style="display: none;">
                    <div class="pdf-container">
                        <div class="pdf-view-mode mb-3">
                            <button id="normal-view" class="btn btn-sm btn-primary active">Normal View</button>
                            <button id="flip-view" class="btn btn-sm btn-outline-primary">Flip Book View</button>
                        </div>
                        
                        <!-- Normal PDF Viewer -->
                        <div id="normal-pdf-viewer" class="pdf-viewer">
                            <div id="pdf-canvas-container"></div>
                            <div id="pdf-controls" class="pdf-controls mt-3">
                                <div class="row">
                                    <div class="col-md-6">
                                        <button id="prev-page" class="btn btn-sm btn-outline-primary">Previous</button>
                                        <span id="page-info" class="mx-3">Page <span id="page-num"></span> of <span id="page-count"></span></span>
                                        <button id="next-page" class="btn btn-sm btn-outline-primary">Next</button>
                                    </div>
                                    <div class="col-md-6">
                                        <button id="zoom-out" class="btn btn-sm btn-outline-secondary">Zoom Out</button>
                                        <button id="zoom-in" class="btn btn-sm btn-outline-secondary">Zoom In</button>
                                        <input type="number" id="page-input" class="form-control form-control-sm d-inline-block" style="width: 80px; margin: 0 10px;" placeholder="Page" min="1">
                                        <button id="go-to-page" class="btn btn-sm btn-outline-info">Go</button>
                                        <button id="download-pdf" class="btn btn-sm btn-success ml-2">Download PDF</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- StPageFlip Viewer -->
                        {{-- <div id="flip-pdf-viewer" class="pdf-viewer" style="display: none;">
                            <div id="book">
                                <!-- Pages will be generated here -->
                            </div>
                        </div> --}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@else
<div class="container-fluid mt-4">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0">PDF</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">PDF belum diupload</p>
                </div>
            </div>
        </div>
    </div>
</div>
@endif

<!-- PDF.js Library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"></script>

<!-- StPageFlip Library -->
<script src="https://unpkg.com/page-flip@2.0.7/dist/js/page-flip.browser.js"></script>

<!-- Include JS for this page only -->
<script src="{{ asset('js/buku-show.js') }}"></script>

@else
<div class="container-fluid mt-4">
    <div class="row">
        <div class="col-12">
            <div class="alert alert-danger">
                <h4>Buku tidak ditemukan</h4>
                <p>Buku yang Anda cari tidak ditemukan atau telah dihapus.</p>
                <a href="{{ route('buku.index') }}" class="btn btn-primary">Kembali ke Daftar Buku</a>
            </div>
        </div>
    </div>
</div>
@endif

@endsection