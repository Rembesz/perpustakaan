@extends('layouts.layout')
@section('peminjaman')
<div class="anggota">
	<div id="teachers" class="section wb">
        <div class="container">
            <div class="row">
				<div class="col-lg-3 col-md-6 col-12">
					<div class="our-team">
						<div class="team-img">
							<img src="{{ asset('library-temp') }}/images/team-01.png">
							<div class="social">
								<ul>
									<li><a href="#" class="fa fa-facebook"></a></li>
									<li><a href="#" class="fa fa-twitter"></a></li>
									<li><a href="#" class="fa fa-linkedin"></a></li>
									<li><a href="#" class="fa fa-skype"></a></li>
								</ul>
							</div>
						</div>
						<div class="team-content">
							<h3 class="title">Nama User</h3>
						</div>
					</div>
				</div>

				<div class="col-lg-9 col-md-6 col-12">
                            <div class="contact_form">
                                <div id="message"></div>
                                <form id="contactform" class="" action="{{ route('pinjaman.store') }}" name="contactform" method="POST">
                                    <div class="row row-fluid">
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <input type="text"  onfocus="(this.type='date')" name="Tanggal_Pinjam" class="form-control" placeholder=" Masukkan Tanggal Pinjam">
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <input type="text"  onfocus="(this.type='date')" name="Tanggal_Kembali" class="form-control" placeholder="Masukkan Tanggal Kembali">
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <input type="text" name="id_Buku" class="form-control" placeholder="Masukkan ID BUKu">
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <input type="text" name="Kode_Anggota" class="form-control" placeholder="Masukkan Kode Anggota">
                                        </div>
                                        <div class="text-center pd">
                                            <button type="submit" value="SEND" id="submit" class="btn btn-light btn-radius btn-brd grd1 btn-block">Kirim</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                </div>
				
            </div><!-- end row -->
        </div><!-- end container -->
    </div><!-- end section -->	
	
</div>
@endsection