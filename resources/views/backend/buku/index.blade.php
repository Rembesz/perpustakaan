@php
    use Illuminate\Support\Facades\Crypt;
@endphp

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
                    @endif
                    <div class="card-header border-0 d-flex justify-content-between align-items-center">
                        <h3 class="mb-0">Tabel Buku</h3>
                        <form method="GET" action="{{ route('buku.index') }}" class="search-form-admin">
                            <input type="text" name="search" value="{{ request('search') }}" placeholder="Cari judul atau kode buku..." class="form-control search-input-admin">
                        </form>
                    </div>
                    <div class="panel-body">
                        <div class="table-responsive">
                        <table width="100%" class="table align-items-center table-flush">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col" class="sort text-center" data-sort="no">No</th>
                                    <th scope="col">Gambar</th>
                                    <th scope="col" class="sort" data-sort="code">Kode Buku</th>
                                    <th scope="col" class="sort" data-sort="judul">Judul Buku</th>
                                    <th scope="col">Penulis</th>
                                    <th scope="col" class="text-center" data-sort="stok">Stok</th>
                                    <th scope="col" class="text-center" data-sort="completion">Action</th>
                                </tr>
                            </thead>
                            <tbody id="buku-list">
                                    @foreach ($buku as $book)
                                    <tr>
                                        <td>{{ $loop->iteration }}</td>
                                        <td>
                                            @if ($book->Img != Null)
                                                <img src="{{ url('img-book/'.$book->Img) }}" width="80">
                                            @else
                                                Image Not Found
                                            @endif
                                        </td>
                                        <td>{{ $book->Kode_Buku }}</td>
                                        <td>{{ $book->Judul_Buku }}</td>
                                        <td>{{ $book->Penulis }}</td>
                                        <td class="text-center">{{ $book->Stok }}</td>
                                        <td class="text-center">
                                            <form action="{{ route('buku.destroy', Crypt::encryptString($book->id)) }}" method="POST">
                            
                                                <a class="btn btn-info" href="{{ route('buku.show', Crypt::encryptString($book->id)) }}">Tampil</a>
                                
                                                <a class="btn btn-primary" href="{{ route('buku.edit', Crypt::encryptString($book->id)) }}">Edit</a>
                                    
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
                {{ $buku->links() }}
            </div>
        </div>
        <div class="col-lg-2 pull-right">   
            <a class="btn btn-success" href="{{ route('buku.create') }}">Tambah Buku</a> 
        </div>
    </div>
</div>
@endsection