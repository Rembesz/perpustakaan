<!DOCTYPE html>
<html lang="en">

    <!-- Basic -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">   
   
    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
 
     <!-- Site Metas -->
    <title>AyoMaca</title>  
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Site Icons -->
    <link rel="shortcut icon" href="{{ asset('library-temp') }}/images/icon.png" type="image/x-icon" />

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset('library-temp') }}/css/bootstrap.min.css">
    <!-- Site CSS -->
    <link rel="stylesheet" href="{{ asset('library-temp') }}/style.css">
    <!-- ALL VERSION CSS -->
    <link rel="stylesheet" href="{{ asset('library-temp') }}/css/versions.css">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="{{ asset('library-temp') }}/css/responsive.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="{{ asset('library-temp') }}/css/custom.css">
    <!-- My Custom CSS -->
    <link rel="stylesheet" href="{{ asset('css/my.css') }}">
    <link rel="stylesheet" href="{{ asset('css/buku-show.css') }}">

    <!-- Modernizer for Portfolio -->
    <script src="{{ asset('library-temp') }}/js/modernizer.js"></script>

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
<body class="host_version"> 

	<!-- Modal -->
	<div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
		<div class="modal-content">
			<div class="modal-header tit-up">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title">Masuk</h4>
			</div>
			<div class="modal-body customer-box">
				<!-- Nav tabs -->
				<ul class="nav nav-tabs">
					<li><a class="active" href="#Login" data-toggle="tab">Masuk</a></li>
					<li><a href="#Registration" data-toggle="tab">Registrasi</a></li>
					{{-- <li><a href="#Adm" data-toggle="tab">Admin</a></li> --}}
				</ul>
				<!-- Tab panes -->
				<div class="tab-content">
					<div class="tab-pane active" id="Login">
						<form role="form" class="form-horizontal" method="POST" action="{{ route('login') }}">
							@csrf

							<div class="form-group">
								<div class="col-sm-12">
									<input id="login-email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="Email">

									@error('email')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
									@enderror
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-12">
									<input id="login-password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="Password">

									@error('password')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
									@enderror
								</div>
							</div>
							<div class="row">
								<div class="col-sm-10">
									<button type="submit" class="btn btn-light btn-radius btn-brd grd1">
										{{ __('Login') }}
									</button>
									@if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                	@endif
								</div>
							</div>
						</form>
					</div>
					<div class="tab-pane" id="Registration">
						<form role="form" class="form-horizontal" method="POST" action="{{ route('register') }}">
							@csrf

							<div class="form-group">
								<div class="col-sm-12">
									<input id="register-name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus placeholder="Masukkan Nama">
									
									@error('name')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
									@enderror
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-12">
									<input id="register-email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Masukkan Email">

									@error('email')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
									@enderror
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-12">
									<input id="register-password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="Masukkan Password">

									@error('password')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
									@enderror
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-12">
									<input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password" placeholder="Konfirmasi Password">
								</div>
							</div>
							<div class="row">							
								<div class="col-sm-10">
									<button type="submit" class="btn btn-light btn-radius btn-brd grd1">
										{{ __('Register') }}
									</button>
									<button type="button" class="btn btn-light btn-radius btn-brd grd1" data-dismiss="modal">
										Cancel</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	  </div>
	</div>

    <!-- LOADER -->
	<div id="preloader">
		<div class="loader-container">
			<div class="progress-br float shadow">
				<div class="progress__item"></div>
			</div>
		</div>
	</div>
	<!-- END LOADER -->	
	
	<!-- Start header -->
	<header class="top-navbar">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="/">
					<img src="{{ asset('library-temp') }}\images/logo.png" alt="" />
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-host" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
					<span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbars-host">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item "><a class="nav-link" href="{{ route('home') }}">AyoMaca</a></li>
						<li class="nav-item"><a class="nav-link" href="{{ Request::is('/') ? '#tentang' : route('home') . '#tentang' }}">Tentang Kami</a></li>
						<li class="nav-item"><a class="nav-link" href="{{ route('list_buku') }}">List Buku</a></li>
						<li class="nav-item"><a class="nav-link" href="{{ Request::is('/') ? '#kontak' : route('home') . '#kontak' }}">Kontak</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
	<!-- End header -->
	
  @yield('content')

  @yield('buku1')

  @yield('buku2')

  @yield('about')

  @yield('anggota')

  @yield('kontak')

  @yield('peminjaman')

    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-xs-12">
                    <div class="widget clearfix">
                        <div class="widget-title">
                            <h3>Tentang Kami</h3>
                        </div>
                        <p> AyoMaca adalah perpustakaan yang mempunyai koleksi buku sebagian besar dalam bentuk format digital dan yang bisa diakses dengan komputer.</p>   
						<div class="footer-right">
							<ul class="footer-links-soi">
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#"><i class="fa fa-github"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
								<li><a href="#"><i class="fa fa-pinterest"></i></a></li>
							</ul><!-- end links -->
						</div>						
                    </div><!-- end clearfix -->
                </div><!-- end col -->

				<div class="col-lg-4 col-md-4 col-xs-12">
                    <div class="widget clearfix">
                        <div class="widget-title">
                            <h3>Informasin Link</h3>
                        </div>
                        <ul class="footer-links">
                            <li><a href="index">Home</a></li>
                            <li><a href="#">Blog</a></li>
							<li><a href="{{ Request::is('/') ? '#tentang' : route('home') . '#tentang' }}">Tentang kami</a></li>
							<li><a href="{{ Request::is('/') ? '#kontak' : route('home') . '#kontak' }}">Kontak</a></li>
                        </ul><!-- end links -->
                    </div><!-- end clearfix -->
                </div><!-- end col -->
				
                <div class="col-lg-4 col-md-4 col-xs-12">
                    <div class="widget clearfix">
                        <div class="widget-title">
                            <h3>Kontak Detail</h3>
                        </div>

                        <ul class="footer-links">
                            <li><a href="mailto:#">info@ayomaca.com</a></li>
                            <li><a href="#">www.ayomaca.com</a></li>
                            <li>Mojokerto, 61361</li>
                            <li>+62 81353073422</li>
                        </ul><!-- end links -->
                    </div><!-- end clearfix -->
                </div><!-- end col -->
				
            </div><!-- end row -->
        </div><!-- end container -->
    </footer><!-- end footer -->

    <div class="copyrights">
        <div class="container">
            <div class="footer-distributed">
                <div class="footer-center">                   
                    <p class="footer-company-name">All Rights Reserved. &copy; 2021 <a href="#">AyoMaca</a> Design By : <a href="#"></a></p>
                </div>
            </div>
        </div><!-- end container -->
    </div><!-- end copyrights -->

    <a href="#" id="scroll-to-top" class="dmtop global-radius"><i class="fa fa-angle-up"></i></a>

    <!-- ALL JS FILES -->
    <script src="{{ asset('library-temp') }}/js/all.js"></script>
    <!-- ALL PLUGINS -->
    <script src="{{ asset('library-temp') }}/js/custom.js"></script>
	<script src="{{ asset('library-temp') }}/js/timeline.min.js"></script>
	<script>
		timeline(document.querySelectorAll('.timeline'), {
			forceVerticalMode: 700,
			mode: 'horizontal',
			verticalStartPosition: 'left',
			visibleItems: 4
		});
	</script>
    <script>
        // Smooth scroll dengan jQuery
        $(document).ready(function(){
            // Handle click pada link dengan hash
            $('a[href^="#"]').on('click', function(e) {
                e.preventDefault();
                var target = $(this.hash);
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 70 // offset untuk navbar
                    }, 800);
                }
            });

            // Handle hash di URL saat halaman dimuat
            if(window.location.hash) {
                var target = $(window.location.hash);
                if (target.length) {
                    setTimeout(function() {
                        $('html, body').animate({
                            scrollTop: target.offset().top - 70
                        }, 800);
                    }, 100);
                }
            }
        });
    </script>
    @stack('scripts')
</body>
</html>