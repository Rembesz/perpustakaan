@extends('backend.layout')
 
@section('content')
<div class="container-fluid mt-4">
    <div class="card">
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    @if ($message = Session::get('success'))
                    <div class="alert alert-success">
                        <p>{{ $message }}</p>
                    </div>
                    @elseif($message = Session::get('fail'))
                        <div class="alert alert-danger">
                            <p>{{ $message }}</p>
                        </div>
                    @endif
                    <div class="card-header border-0">
                        <h3 class="mb-0 tittle-ai">Tabel Peminjaman</h3>
                    </div>
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table width="100%" class="table align-items-center table-flush">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col" class="text-center" data-sort="no">No</th>
                                        {{-- <th scope="col" class="sort" data-sort="code">Tanggal Pinjam</th>
                                        <th scope="col" class="sort" data-sort="tgl_kembali">Tanggal Kembali</th> --}}
                                        {{-- <th scope="col" class="sort" data-sort="judul">Judul Buku</th> --}}
                                        <th scope="col"  class="sort text-center" data-sort="kode">Kode Anggota</th>
                                        <th scope="col" class="sort" data-sort="nama">Nama Peminjam</th>
                                        <th scope="col" class="sort" data-sort="nama">No Telepon</th>
                                        <th scope="col" class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($pinjaman->unique('id_Anggota') as $pinjam)
                                    <tr>
                                        <td class="text-center">{{ $loop->iteration }}</td>
                                        {{-- <td>{{ $pinjam->Tanggal_Pinjam }}</td>
                                        <td>{{ $pinjam->Tanggal_Kembali }}</td> --}}
                                        {{-- <td>
                                            @foreach ($pinjam->buku as $itemBuku)
                                                {{ $itemBuku->Judul_Buku }}
                                            @endforeach
                                        </td> --}} 
                                        <td class="text-center">{{ $pinjam->anggota->Kode_Anggota }}</td>
                                        <td> {{ $pinjam->anggota->Nama }}</td>
                                        <td> +62 {{ $pinjam->anggota->No_Telp }}</td>
                                        <td class="text-center">
                                            <form method="POST">
                                                @csrf
                                                

                                                <a class="btn btn-info" href="{{ route('pinjaman.show',$pinjam->id_Anggota) }}">Tampil</a>
                                
                                                {{-- <a class="btn btn-primary" href="{{ route('pinjaman.edit',$pinjam->id) }}">Edit</a>
                                                
                                                <a class="btn btn-danger" href="{{ route('pinjaman.destroy',$pinjam->id) }}">Hapus</a> --}}
                                    
                                               
                                                {{-- @method('DELETE') --}}
                                            </form>
                                        </td>
                                    </tr>
                                        @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-10 margin-tb">   
            <div class="pull-left">
                {{-- {{ $anggota->links() }}   --}}
            </div>
        </div>
        <div class="col-lg-2 pull-right">   
            <a class="btn btn-success" href="{{ route('pinjaman.create') }}">Tambahkan Data</a>
        </div>
    </div>
</div>

@endsection