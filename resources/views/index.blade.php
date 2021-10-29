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
                <div id="home" class="first-section" style="background-image:url('{{ asset('library-temp') }}/images/slider-01.jpg');">
                    <div class="dtab">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 text-right">
                                    <div class="big-tagline">
                                        <h2>Pentingnya <strong> Buku </strong></h2>
                                        <p class="lead">Buku adalah jendela ilmu yang akan membuka cakrawala kehidupan manusia. </p>
                                            <a href="kontak" class="hover-btn-new"><span>Hubungi Kami</span></a>
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
                <div id="home" class="first-section" style="background-image:url('{{ asset('library-temp') }}/images/slider-02.jpg');">
                    <div class="dtab">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 text-left">
                                    <div class="big-tagline">
                                        <h2 data-animation="animated zoomInRight">Tujuan dari <strong>Membaca Buku</strong></h2>
                                        <p class="lead" data-animation="animated fadeInLeft">Budaya malas membaca adalah kekuatan yang melemahkan bangsa 
                                            dan negeri ini dari segala aspek ekonomi, sosial, dan budaya. </p>
                                            <a href="kontak" class="hover-btn-new"><span>Hubungin Kami</span></a>
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
                <div id="home" class="first-section" style="background-image:url('{{ asset('library-temp') }}/images/slider-03.jpg');">
                    <div class="dtab">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 text-center">
                                    <div class="big-tagline">
                                        <h2 data-animation="animated zoomInRight"><strong>Ilmu</strong> untuk masa Depan</h2>
                                        <p class="lead" data-animation="animated fadeInLeft">
                                            Barangsiapa yang berangkat menimba ilmu untuk mengamalkan ilmu, niscaya ilmu yang sedikit pun akan bermanfaat baginya.</p>
                                            <a href="kontak" class="hover-btn-new"><span>Hubungi Kami</span></a>
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
                    <h3>Perjalanan Kami</h3>
                    <p class="lead">PerpustakaanKu adalah sebuah Website online yang sudah berdiri Sejak 2001. Dengan segala usaha kami berhasil mencapai sebuah pencapaian yaitu...</p>
                </div>
            </div><!-- end title -->
            <div class="timeline">
                <div class="timeline__wrap">
                    <div class="timeline__items">   
                        <div class="timeline__item">
                            <div class="timeline__content img-bg-01">
                                <h2>2012</h2>
                                <p>Implementasi Website PerpustakaanKu secara website</p>
                            </div>
                        </div>
                        <div class="timeline__item">
                            <div class="timeline__content img-bg-02">
                                <h2>2009</h2>
                                <p>Perencanaan pembuatan website PerpustakaanKu agar mudah di jangkau seluruh masyarakat</p>
                            </div>
                        </div>
                        <div class="timeline__item">
                            <div class="timeline__content img-bg-03">
                                <h2>2005</h2>
                                <p>Pembuatan tempat PerpustakaanKu secara offline di berbagai tempat di daerah</p>
                            </div>
                        </div>
                        <div class="timeline__item">
                            <div class="timeline__content img-bg-04">
                                <h2>2001</h2>
                                <p>Perintisan PerpustakaanKu di daerah zimbabwe oleh K.H .....</p>
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
                    <p class="stat_count">999999</p>
                    <h3>Pengunjung Offline</h3>
                </div><!-- end col -->

                <div class="col-md-4 col-sm-4 col-xs-12">
                    <span data-scroll class="global-radius icon_wrap effect-1 alignleft"><i class="flaticon-online"></i></span>
                    <p class="stat_count">99999</p>
                    <h3>Pengunjung Online</h3>
                </div><!-- end col -->

                <div class="col-md-4 col-sm-4 col-xs-12">
                    <span data-scroll class="global-radius icon_wrap effect-1 alignleft"><i class="flaticon-years"></i></span>
                    <p class="stat_count">20</p>
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

@endsection
