@extends('backend.layout')

@section('content')
<div class="header pb-6 d-flex align-items-center" style="min-height: 500px; background-image: url({{ asset('dashboard') }}/assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
    <!-- Mask -->
    <span class="mask bg-gradient-default opacity-8"></span>
    <!-- Header container -->
    <div class="container-fluid d-flex align-items-center">
      <div class="row">
        <div class="col-lg-7 col-md-10">
          <h1 class="display-2 text-white">Hello {{ Auth::user()->name }}</h1>
          <p class="text-white mt-0 mb-5">This is your profile page. You can see the account profile</p>
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
                  <img src="{{ asset('img-user') }}/avatar.jpg" class="rounded-circle">
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
                {{ Auth::user()->name }}<span class="font-weight-light">, 27</span>
              </h5>
              <div class="h5 font-weight-300">
                <i class="ni location_pin mr-2"></i>{{ Auth::user()->email }}
              </div>
              <div>
                <i class="ni education_hat mr-2"></i>Admin
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
                <h3 class="mb-0">Profile Admin</h3>
              </div>
            </div>
          </div>
          <div class="card-body">
            <form>
              <div class="pl-lg-4">
                <div class="row mt-3">
                  <div class="col-sm-3">
                      <h3 class="m-b-10 f-w-600">Nama</h3>
                  </div>
                  <div class="col-sm-6">
                      <h3 class="text-muted f-w-400">
                        {{ Auth::user()->name }}
                      </h3>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-sm-3">
                      <h3 class="m-b-10 f-w-600">Email</h3>
                  </div>
                  <div class="col-sm-6">
                      <h3 class="text-muted f-w-400">
                        {{ Auth::user()->email }}
                      </h3>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-sm-3">
                      <h3 class="m-b-10 f-w-600">Tgl Pembuatan</h3>
                  </div>
                  <div class="col-sm-6">
                      <h3 class="text-muted f-w-400">
                        {{ Auth::user()->created_at }}
                      </h3>
                  </div>
                </div>
              </div>
              <hr class="my-4" />
            </form>
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