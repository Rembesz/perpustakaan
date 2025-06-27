@extends('backend.layout')

@section('content')
<div class="header bg-primary pb-6">
    <div class="container-fluid">
      <div class="header-body">
        <div class="row align-items-center py-4">
          <div class="col-lg-6 col-7">
            <h6 class="h2 text-white d-inline-block mb-0">Google maps</h6>
            <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
              <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                <li class="breadcrumb-item"><a href="{{ route('admin') }}"><i class="fas fa-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Maps</a></li>
                <li class="breadcrumb-item active" aria-current="page">Google maps</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
</div>
  <!-- Page content -->
  <div class="container-fluid mt--6">
    <div class="row">
      <div class="col">
        <div class="card border-0">
            <script async defer src="https://maps.googleapis.com/maps/api/js?key=Removed&callback=initMap&libraries=places" type="text/javascript"></script>
          <div id="map-default" class="map-canvas" data-lat="-7.463098380770655" data-lng="112.43265840061012" style="height: 600px;"></div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <footer class="footer pt-0">
      <div class="row align-items-center justify-content-lg-between">
        <div class="col-lg-6">
          <div class="copyright text-center  text-lg-left  text-muted">
            &copy; 2021 <a href="https://www.creative-tim.com" class="font-weight-bold ml-1" target="_blank">AyoMaca</a>
          </div>
        </div>
      </div>
    </footer>
  </div>

@endsection