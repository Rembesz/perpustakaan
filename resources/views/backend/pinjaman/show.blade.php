@php
    use Illuminate\Support\Facades\Crypt;
@endphp

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
              <div class="our_solution_category">
                <div class="solution_cards_box">
                  @foreach ($pinjaman as $pinjam)
                    @foreach ($pinjam->buku as $books)
                    <div class="col-md-6 mb-4">
                      <div class="solution_card text-center p-4 mb-4 {{ $pinjam->Status == null ? 'not-returned' : 'returned' }}">
                        <h3 class="mb-3" style="font-weight:bold;">{{ $books->Judul_Buku }}</h3>
                        @if ($books->Img != Null)
                            <img src="{{ url('img-book/'.$books->Img) }}" alt="Buku" width="120" height="120" class="mb-3 rounded shadow">
                        @else
                            <div class="mb-3 text-muted">Image Not Found</div>
                        @endif

                        <table class="table table-borderless text-white mb-3" style="background:transparent;">
                            <tr>
                                <td class="text-right pr-2">Tanggal Pinjam:</td>
                                <td class="text-left pl-2">{{ $pinjam->Tanggal_Pinjam }}</td>
                            </tr>
                            <tr>
                                <td class="text-right pr-2">Tanggal Kembali:</td>
                                <td class="text-left pl-2">{{ $pinjam->Tanggal_Kembali }}</td>
                            </tr>
                            <tr>
                                <td class="text-right pr-2">Status:</td>
                                <td class="text-left pl-2">
                                    @if($pinjam->Status != null)
                                        <span class="badge badge-success px-3 py-2" style="font-size:0.5rem;">Dikembalikan</span>
                                    @else
                                        <span class="badge badge-warning px-3 py-2" style="font-size:0.5rem;">Dipinjam</span>
                                    @endif
                                </td>
                            </tr>
                            <tr>
                                <td class="text-right pr-2">Denda:</td>
                                <td class="text-left pl-2">
                                    @if($pinjam->Status != null && $pinjam->pengembalian->count())
                                        @foreach ($pinjam->pengembalian as $item)
                                            {{ $item->Denda ? 'Rp ' . number_format($item->Denda, 0, ',', '.') : 'Tidak ada denda' }}
                                        @endforeach
                                    @else
                                        ---
                                    @endif
                                </td>
                            </tr>
                        </table>

                        @if($pinjam->Status == null)
                            <form method="POST" action="{{ route('pengembalian.store') }}" class="toggle-form">
                                @csrf
                                <input type="hidden" name="Tanggal_Kembali" value="{{ \Carbon\Carbon::now()->toDateString() }}">
                                <input type="hidden" name="id_Buku" value="{{ $books->id }}">
                                <input type="hidden" name="id_Anggota" value="{{ $pinjam->id_Anggota }}">
                                <input type="hidden" name="pinjaman_id" value="{{ $pinjam->id }}">
                                <input type="hidden" name="session_token" value="{{ session()->token() }}">
                                <div class="toggle-container">
                                    <div class="checkbox-container green">
                                        <input type="checkbox" id="toggle-{{ $pinjam->id }}" class="return-toggle" onclick="if(confirm('Apakah yakin buku sudah dikembalikan?')) this.form.submit(); else this.checked = false;" />
                                        <label for="toggle-{{ $pinjam->id }}"></label>
                                    </div>
                                    <span class="toggle-label">Kembalikan Buku</span>
                                </div>
                            </form>
                        @else
                            @php
                                $pengembalianId = $pinjam->pengembalian->count() ? $pinjam->pengembalian->first()->id : null;
                            @endphp
                            @if($pengembalianId)
                                <form method="POST" action="{{ route('pengembalian.delete', $pengembalianId) }}" class="toggle-form">
                                    @csrf
                                    @method('DELETE')
                                    <input type="hidden" name="pinjaman_id" value="{{ $pinjam->id }}">
                                    <input type="hidden" name="session_token" value="{{ session()->token() }}">
                                    <div class="toggle-container">
                                        <div class="checkbox-container yellow">
                                            <input type="checkbox" checked id="toggle-cancel-{{ $pinjam->id }}" class="cancel-toggle" onclick="if(confirm('Batalkan pengembalian buku ini?')) this.form.submit(); else this.checked = true;" />
                                            <label for="toggle-cancel-{{ $pinjam->id }}"></label>
                                        </div>
                                        <span class="toggle-label">Batalkan Pengembalian</span>
                                    </div>
                                </form>
                            @endif
                        @endif

                        <div class="mt-3">
                            @if($pinjam->Status == null)
                                <a class="btn btn-primary btn-sm" href="{{ route('pinjaman.edit', Crypt::encryptString($pinjam->id)) }}">Edit</a>
                            @endif
                            <a class="btn btn-danger btn-sm" href="{{ route('pinjaman.delete', Crypt::encryptString($pinjam->id)) }}">Hapus</a>
                        </div>
                      </div>
                    </div>
                    @endforeach
                  @endforeach
                </div>
              </div>
            </div>
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
            &copy; 2021 <a href="https://www.creative-tim.com" class="font-weight-bold ml-1" target="_blank">AyoMaca</a>
          </div>
        </div>
      </div>
    </footer>
</div>

<style>
.our_solution_category {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
}
.solution_cards_box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
.solution_card {
  width: 100%;
  background: linear-gradient(140deg, #42c3ca 0%, #42c3ca 50%, #42c3cac7 75%);
  box-shadow: 0 2px 4px 0 rgba(136, 144, 195, 0.2),
    0 5px 15px 0 rgba(37, 44, 97, 0.15);
  border-radius: 15px;
  margin: 12px 0;
  padding: 18px 22px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  min-height: 220px;
  transition: 0.7s;
  color: #fff;
}

/* Pink color for books that haven't been returned */
.solution_card.not-returned {
  background: linear-gradient(140deg, #e91e63 0%, #e91e63 50%, #e91e63c7 75%);
}

/* Aqua color for books that have been returned */
.solution_card.returned {
  background: linear-gradient(140deg, #42c3ca 0%, #42c3ca 50%, #42c3cac7 75%);
}

.solution_card .solu_title h3 {
  color: #fff;
  font-size: 1.3rem;
  margin-top: 13px;
  margin-bottom: 13px;
}
.solution_card .solu_description p {
  font-size: 15px;
  margin-bottom: 10px;
  color: #fff;
}
.solution_card .solu_description a.btn {
  border-radius: 10px;
  margin-right: 8px;
  margin-top: 8px;
}
@media screen and (max-width: 768px) {
  .solution_card { flex: 0 0 100%; }
}
.solution_card {
    background: linear-gradient(140deg, #42c3ca 0%, #42c3ca 50%, #42c3cac7 75%);
    border-radius: 15px;
    box-shadow: 0 2px 4px 0 rgba(136, 144, 195, 0.2), 0 5px 15px 0 rgba(37, 44, 97, 0.15);
    color: #fff;
    margin-bottom: 24px;
}
.table-borderless td, .table-borderless th {
    border: none !important;
    padding: .5rem .5rem;
}

/* Toggle Switch Styles */
.toggle-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
    gap: 10px;
}

.toggle-label {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 15px
}

.toggle-form {
    margin: 0;
    padding: 0;
}

.checkbox-container {
    display: inline-block;
    position: relative;
}

.checkbox-container label {
    background-color: #aaa;
    border: 1px solid #fff;
    border-radius: 20px;
    display: inline-block;
    position: relative;
    transition: all 0.3s ease-out;
    width: 45px;
    height: 25px;
    z-index: 2;
    cursor: pointer;
}

.checkbox-container label::after {
    content: ' ';
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 1.5px;
    left: 1px;
    transform: translateX(0);
    transition: transform 0.3s linear;
    width: 20px;
    height: 20px;
    z-index: 3;
}

.checkbox-container input {
    visibility: hidden;
    position: absolute;
    z-index: 2;
}

.checkbox-container input:checked + label::after {
    transform: translateX(calc(100% + 0.5px));
}

.checkbox-container.green input:checked + label {
    background-color: #47B881;
}

.checkbox-container.yellow input:checked + label {
    background-color: #f39c12;
}
</style>
@endsection

@push('scripts')
@endpush