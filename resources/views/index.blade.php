@extends('layouts.layout')
 
@section('content')
    <div id="carouselExampleControls" class="carousel slide bs-slider box-slider" data-ride="carousel" data-pause="hover" data-interval="false" >
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <div id="home" class="first-section" style="background-image:url('{{ asset('library-temp') }}/images/lib1.jpg');">
                    <div class="dtab">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 text-right">
                                    <div class="big-tagline">
                                        <h2>Selamat datang di <strong> AyoMaca </strong></h2>
                                        <p class="lead">Perpustakaan yang siap menemanimu membaca, mencari referensi, dan menjelajah dunia pengetahuan.</p>
                                            <a href="{{ Request::is('/') ? '#kontak' : route('home') . '#kontak' }}" class="hover-btn-new"><span>Hubungi Kami</span></a>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="#" class="hover-btn-new"><span>Read More</span></a>
                                    </div>
                                </div>
                            </div><!-- end row -->            
                        </div><!-- end container -->
                    </div>
                </div><!-- end section -->
            </div>
            <div class="carousel-item">
                <div id="home" class="first-section" style="background-image:url('{{ asset('library-temp') }}/images/lib2.jpg');">
                    <div class="dtab">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 text-left">
                                    <div class="big-tagline">
                                        <h2 data-animation="animated zoomInRight">Temukan <strong>Koleksi Buku Favoritmu</strong></h2>
                                        <p class="lead" data-animation="animated fadeInLeft">Dari fiksi, sejarah, sampai buku pelajaran — semua bisa diakses dengan mudah.</p>
                                            <a href="{{ Request::is('/') ? '#kontak' : route('home') . '#kontak' }}" class="hover-btn-new"><span>Hubungin Kami</span></a>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="#" class="hover-btn-new"><span>Read More</span></a>
                                    </div>
                                </div>
                            </div><!-- end row -->            
                        </div><!-- end container -->
                    </div>
                </div><!-- end section -->
            </div>
            <div class="carousel-item">
                <div id="home" class="first-section" style="background-image:url('{{ asset('library-temp') }}/images/lib3.jpg');">
                    <div class="dtab">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 text-center">
                                    <div class="big-tagline">
                                        <h2 data-animation="animated zoomInRight"><strong>Gabung Bersama</strong> AyoMaca</h2>
                                        <p class="lead" data-animation="animated fadeInLeft">
                                            Ikuti kegiatan membaca, diskusi, dan belajar bareng lewat AyoMaca.</p>
                                            <a href="{{ Request::is('/') ? '#kontak' : route('home') . '#kontak' }}" class="hover-btn-new"><span>Hubungi Kami</span></a>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="#" class="hover-btn-new"><span>Read More</span></a>
                                    </div>
                                </div>
                            </div><!-- end row -->            
                        </div><!-- end container -->
                    </div>
                </div><!-- end section -->
            </div>
            <!-- Left Control -->
            <a class="new-effect carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="fa fa-angle-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>

            <!-- Right Control -->
            <a class="new-effect carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="fa fa-angle-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
    
@include('tentang')

    <section class="section lb page-section">
        <div class="container">
            <div class="section-title row text-center">
                <div class="col-md-8 offset-md-2">
                    <h3>Perjalanan AyoMaca</h3>
                    <p class="lead"> dari 1999 -- saat ini</p>
                </div>
            </div><!-- end title -->
            <div class="timeline">
                <div class="timeline__wrap">
                    <div class="timeline__items">   
                        <div class="timeline__item">
                            <div class="timeline__content">
                                <img src="{{ asset('library-temp') }}/images/perjalanan4.jpeg" alt="2012">
                                <h2>2023</h2>
                                <p>Perpustakaan mulai menggunakan website untuk layanan digital. Pengunjung bisa mencari buku dan membaca e-book secara online.</p>
                            </div>
                        </div>
                        <div class="timeline__item">
                            <div class="timeline__content">
                                <img src="{{ asset('library-temp') }}/images/perjalanan3.jpeg" alt="2009">
                                <h2>2015</h2>
                                <p>Bangunan perpustakaan sudah dibuat dari beton dan terlihat lebih modern. Fasilitasnya makin lengkap, dengan ruang baca dan komputer.</p>
                            </div>
                        </div>
                        <div class="timeline__item">
                            <div class="timeline__content">
                                <img src="{{ asset('library-temp') }}/images/perjalanan2.jpeg" alt="2005">
                                <h2>2009</h2>
                                <p>Perpustakaan pindah ke ruangan yang lebih besar dan permanen. Koleksi buku bertambah dan pengunjung mulai meningkat.</p>
                            </div>
                        </div>
                        <div class="timeline__item">
                            <div class="timeline__content">
                                <img src="{{ asset('library-temp') }}/images/perjalanan1.jpeg" alt="2001">
                                <h2>1999</h2>
                                <p>Perpustakaan pertama kali dibuat di sebuah ruangan kecil berdinding kayu. Buku-bukunya sedikit dan raknya terbuat dari bahan bekas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="section cl">
        <div class="container">
            <div class="row text-left stat-wrap">
                <div class="col-md-4 col-sm-4 col-xs-12">
                    <span data-scroll class="global-radius icon_wrap effect-1 alignleft"><i class="flaticon-study"></i></span>
                    <p class="stat_count">12131</p>
                    <h3>Pengunjung Offline</h3>
                </div><!-- end col -->

                <div class="col-md-4 col-sm-4 col-xs-12">
                    <span data-scroll class="global-radius icon_wrap effect-1 alignleft"><i class="flaticon-online"></i></span>
                    <p class="stat_count" id="onlineVisitors">0</p>
                    <h3>Pengunjung Online</h3>
                </div><!-- end col -->

                <div class="col-md-4 col-sm-4 col-xs-12">
                    <span data-scroll class="global-radius icon_wrap effect-1 alignleft"><i class="flaticon-years"></i></span>
                    <p class="stat_count">{{ date('Y') - 2010 }}</p>
                    <h3>Tahun Beroperasi</h3>
                </div><!-- end col -->
            </div><!-- end row -->
        </div><!-- end container -->
    </div><!-- end section -->

@include('testi')

    <div class="parallax section dbcolor">
        <div class="container">
            <div class="row logos">
                <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                    <a href="#"><img src="{{ asset('library-temp') }}/images/logo_01.png" alt="" class="img-repsonsive"></a>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                    <a href="#"><img src="{{ asset('library-temp') }}/images/logo_02.png" alt="" class="img-repsonsive"></a>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                    <a href="#"><img src="{{ asset('library-temp') }}/images/logo_03.png" alt="" class="img-repsonsive"></a>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                    <a href="#"><img src="{{ asset('library-temp') }}/images/logo_04.png" alt="" class="img-repsonsive"></a>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                    <a href="#"><img src="{{ asset('library-temp') }}/images/logo_05.png" alt="" class="img-repsonsive"></a>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                    <a href="#"><img src="{{ asset('library-temp') }}/images/logo_06.png" alt="" class="img-repsonsive"></a>
                </div>
            </div><!-- end row -->
        </div><!-- end container -->
    </div><!-- end section -->
    @include('kontak')
    
@endsection

<script>
// Update pengunjung online setiap 1 menit
function updateOnlineVisitors() {
    fetch('/track-visitor')
        .then(response => response.json())
        .then(data => {
            document.getElementById('onlineVisitors').textContent = data.count;
        });
}

// Update pertama kali
window.onload = function() {
    updateOnlineVisitors();
    // Update setiap 1 menit
    setInterval(updateOnlineVisitors, 60000);
};
</script>
