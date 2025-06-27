@php
    use Illuminate\Support\Facades\Crypt;
@endphp

@extends('backend.layout')
 
@section('content')

    <div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Tables</h6>
              <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item"><a href="{{ route('admin') }}"><i class="fas fa-home"></i></a></li>
                  <li class="breadcrumb-item"><a href="#">Tables</a></li>
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
          <div class="card">
            <!-- Card header -->
            <div class="card-header border-0">
                <a href="buku"><h3 class="mb-0">Tabel Buku</h3></a>
            </div>
            <!-- Light table -->
            <div class="table-responsive">
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="sort text-center" data-sort="no">No</th>
                    <th scope="col" class="sort" data-sort="code">Kode Buku</th>
                    <th scope="col" class="sort" data-sort="judul">Judul Buku</th>
                    <th scope="col">Penulis</th>
                    <th scope="col" class="text-center" data-sort="stok">Stok</th>
                    <th scope="col" class="text-center" data-sort="completion">Action</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody class="list">
                    @foreach ($buku as $book)
                    <tr>
                        <th class="text-center" scope="row">
                            {{ $loop->iteration }}
                        </th>
                        <td class="Code">
                            {{ $book->Kode_Buku }}
                        </td>
                        <td>
                        <span class="badge badge-dot mr-4">
                            @if ( $book->Stok >= 1 )
                            <i class="bg-success"></i>
                            @else
                            <i class="bg-danger"></i>
                            @endif
                            {{ $book->Judul_Buku }}
                        </span>
                        </td>
                        <td>
                        <div class="Penulis">
                            <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="{{ $book->Penulis }}">
                            <img alt="Image placeholder" src="{{ asset('dashboard') }}//assets/img/theme/team-1.jpg">
                            </a>
                            <span>{{ $book->Penulis }}</span>
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            <span>{{ $book->Stok }}</span>
                        </div>
                        </td>
                        <td class="text-center">
                        <div class="dropdown">
                            <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-ellipsis-v"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                            <form method="POST">
                                @csrf
                                <a class="dropdown-item" href="{{ route('buku.show', Crypt::encryptString($book->id)) }}">Tampil</a>
                                <a class="dropdown-item" href="{{ route('buku.edit', Crypt::encryptString($book->id)) }}">Edit</a>
                                <a class="dropdown-item" href="{{ route('buku.destroy', Crypt::encryptString($book->id)) }}">Hapus</a>
                            </form>
                            </div>
                        </div>
                        </td>
                    </tr>
                    @endforeach
               </tbody>
              </table>
            </div>
            <!-- Card footer -->
            <div class="card-footer py-4">
                {{ $buku->links() }} 
            </div>
          </div>
        </div>
      </div>
      <!-- table 2 -->
      <div class="row">
        <div class="col">
          <div class="card">
            <!-- Card header -->
            <div class="card-header border-0">
              <a href="anggota"><h3 class="mb-0">Tabel Anggota</h3></a>
            </div>
            <!-- Light table -->
            <div class="table-responsive">
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="sort text-center" data-sort="no">No</th>
                    <th scope="col">Gambar</th>
                    <th scope="col" class="sort" data-sort="code">Kode Anggota</th>
                    <th scope="col" class="sort" data-sort="nama">Nama</th>
                    <th scope="col" class="sort" data-sort="jurusan">Jurusan</th>
                    <th scope="col" class="sort" data-sort="telp">No Telepon</th>
                    <th scope="col" class="sort" data-sort="alamat">Alamat</th>
                    <th scope="col" class="text-center" data-sort="completion">Action</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody class="list">
                    @foreach ($anggota as $member)
                    <tr>
                        <th class="text-center" scope="row">
                            {{ $loop->iteration }}
                        </th>
                        <td>
                          @if ($member->Img != Null)
                            <img src="{{ url('img-user/'.$member->Img) }}" alt="member" class="rounded" width="30">
                          @else
                            <img src="{{ asset('img-user') }}/avatar.jpg"  alt="member" class="rounded" width="30">
                          @endif
                        </td>
                        <td class="Code">
                            {{ $member->Kode_Anggota }}
                        </td>
                        <td>
                        <span>{{ $member->Nama }}</span>
                        </td>
                        <td>
                        <div class="d-flex align-items-center">
                            <span>{{ $member->Jurusan }}</span>
                        </div>
                        </td>
                        <td>
                        <div class="d-flex align-items-center">
                            <span>{{ $member->No_Telp }}</span>
                        </div>
                        </td>
                        <td>
                            <span>{{ $member->Alamat }}</span>
                        </td>
                        <td class="text-center">
                        <div class="dropdown">
                            <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-ellipsis-v"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                            <form method="POST">
                                @csrf
                                <a class="dropdown-item" href="{{ route('anggota.show', Crypt::encryptString($member->id)) }}">Tampil</a>
                                <a class="dropdown-item" href="{{ route('anggota.edit', Crypt::encryptString($member->id)) }}">Edit</a>
                                <a class="dropdown-item" href="{{ route('anggota.destroy', Crypt::encryptString($member->id)) }}">Hapus</a>
                            </form>
                            </div>
                        </div>
                        </td>
                    </tr>
                    @endforeach
               </tbody>
              </table>
            </div>
            <!-- Card footer -->
            <div class="card-footer py-4">
              {{ $anggota->links() }} 
            </div>
          </div>
        </div>
      </div>
      <!-- Table 3 -->
      <div class="row">
        <div class="col">
          <div class="card">
            <!-- Card header -->
            <div class="card-header border-0">
                <a href="pinjaman"><h3 class="mb-0">Tabel Peminjaman</h3></a>
            </div>
            <!-- Light table -->
            <div class="table-responsive">
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="text-center" data-sort="no">No</th>
                    <th scope="col" class="sort" data-sort="code">Tanggal Pinjam</th>
                    <th scope="col" class="sort" data-sort="tgl_kembali">Tanggal Kembali</th>
                    <th scope="col" class="sort" data-sort="judul">Judul Buku</th>
                    <th scope="col" class="sort" data-sort="nama">Nama Peminjam</th>
                    <th scope="col" class="text-center">Action</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody class="list">
                    @foreach ($pinjaman as $pinjam)
                    <tr>
                        <th class="text-center" scope="row">
                            {{ $loop->iteration }}
                        </th>
                        <td>
                            <span>{{ $pinjam->Tanggal_Pinjam }}</span>
                        </td>
                        <td>
                            <span>{{ $pinjam->Tanggal_Kembali }}</span>
                        </td>
                        <td>
                        <div class="d-flex align-items-center Penulis">
                            <span>
                                @foreach ($pinjam->buku as $itemBuku)
                                    {{ $itemBuku->Judul_Buku }}
                                @endforeach
                            </span>
                        </div>
                        </td>
                        <td>
                        <div class="d-flex align-items-center">
                            <span> {{ $pinjam->anggota->Nama }}</span>
                        </div>
                        </td>
                        <td class="text-center">
                        <div class="dropdown">
                            <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-ellipsis-v"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                            <form method="POST">
                                @csrf
                                <a class="dropdown-item" href="{{ route('pinjaman.show', Crypt::encryptString($pinjam->id_Anggota)) }}">Tampil</a>
                                <a class="dropdown-item" href="{{ route('pinjaman.edit', Crypt::encryptString($pinjam->id)) }}">Edit</a>
                                <a class="dropdown-item" href="{{ route('pinjaman.delete', Crypt::encryptString($pinjam->id)) }}">Hapus</a>
                            </form>
                            </div>
                        </div>
                        </td>
                    </tr>
                    @endforeach
               </tbody>
              </table>
            </div>
            <!-- Card footer -->
            <div class="card-footer py-4">
              {{ $pinjaman->links() }} 
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt0">
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