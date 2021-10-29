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
                        <h3 class="mb-0">Tabel pengembalian</h3>
                    </div>
                    <div class="panel-body">
                        <div class="table-responsive">
                        <table width="100%" class="table align-items-center table-flush">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col" class="text-center" data-sort="no">No</th>
                                    <th scope="col" class="sort" data-sort="tgl_kembali">Tanggal Kembali</th>
                                    <th scope="col" class="sort" data-sort="denda">Denda</th>
                                    <th scope="col" class="sort" data-sort="judul">Judul Buku</th>
                                    <th scope="col" class="sort" data-sort="nama">Nama Peminjam</th>
                                    <th scope="col" class="text-center">Action</th>
                                    <th scope="col"></th>
                                  </tr>
                                </thead>
                                <tbody>
                                    @foreach ($pengembalian as $kembali)
                                    <tr>
                                        <td>{{ $loop->iteration }}</td>
                                        <td>{{ $kembali->Tanggal_Kembali }}</td>
                                        <td>{{ $kembali->Denda }}
                                            @if ($kembali->Denda == Null)
                                                Tidak Ada Denda
                                            @endif
                        
                                        </td>
                                        <td>
                                            @foreach ($kembali->buku as $itemBuku)
                                                {{ $itemBuku->Judul_Buku }}
                                            @endforeach
                                        </td>
                                        <td>
                                            {{ $kembali->anggota->Nama }}
                                        </td>
                                        <td class="text-center">
                                            <form action="{{ route('pengembalian.destroy',$kembali->id) }}" method="POST">
                            
                                                {{-- <a class="btn btn-info" href="{{ route('pengembalian.show',Crypt::encrypt($kembali->id)) }}">Tampil</a> --}}
                                
                                                <a class="btn btn-primary" href="{{ route('pengembalian.edit',$kembali->id)}}">Edit</a>
                                    
                                                @csrf
                                                @method('DELETE')
                                
                                                <button type="submit" class="btn btn-danger">Hapus</button>
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
                {{ $pengembalian->links() }}
            </div>
        </div>
        <div class="col-lg-2 pull-right">   
            <a class="btn btn-success" href="{{ route('pengembalian.create') }}">Tambahkan Data</a>
        </div>
    </div>
</div>
@endsection