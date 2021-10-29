@extends('layouts.layout')

@section('anggota')
<div class="anggota">
    <div class="all-title-box">
		<div class="container text-center">
			<h1>Anggota<span class="m_1"></span></h1>
		</div>
	</div>
	
	<div id="teachers" class="section wb">
        <div class="container">
			<div class="Search">
				<div class="col-md-12">
				  <form class="form" method="get" action="{{ route('searchmember') }}">
					<div class="row mb-2">
					  <div class="col-md-3 mt-1"><input type="text" name="searchmember" class="form-control" placeholder="Cari Nama / Kode"></div>
					  <div class="col-md-1 mt-1"><button type="submit" class="btn btn-info">Cari</button></div>
					</div>
				  </form>
				</div>
			</div>
            <div class="row mt-4">
				@foreach ($anggota as $anggotas)
				<div class="col-lg-3 col-md-6 col-12">
					<div class="our-team">
						<div class="team-img">
							@if ($anggotas->Img != Null)
								<img src="{{ url('img-user/'.$anggotas->Img) }}" class="img-thumbnail" width="150">
							@else
								<img src="{{ asset('img-user') }}/nopick.png"   width="150">
							@endif
							<div class="social">
								<ul>
									<li><a href="https://www.google.com/search?q=facebook {{ $anggotas->Nama }}" class="fa fa-facebook"></a></li>
									<li><a href="https://www.google.com/search?q=twitter {{ $anggotas->Nama }}" class="fa fa-twitter"></a></li>
									<li><a href="https://www.google.com/search?q=linkedin {{ $anggotas->Nama }}" class="fa fa-linkedin"></a></li>
									<li><a href="https://www.google.com/search?q=skype {{ $anggotas->Nama }}" class="fa fa-skype"></a></li>
								</ul>
							</div>
						</div>
						<div class="team-content">
							<h3 class="title">
								{{ $anggotas->Nama}}
							</h3>
							<span class="post">{{ $anggotas->Jurusan }}</span>
						</div>
					</div>
				</div>
				@endforeach
            </div><!-- end row -->
        </div><!-- end container -->
    </div><!-- end section -->	
	
</div>
@endsection