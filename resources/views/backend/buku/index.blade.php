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
                    <div class="card-header border-0">
                        <h3 class="mb-0">Tabel Buku</h3>
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
                            <tbody>
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
                                            <form action="{{ route('buku.destroy',$book->id) }}" method="POST">
                            
                                                <a class="btn btn-info" href="{{ route('buku.show',$book->id) }}">Tampil</a>
                                
                                                <a class="btn btn-primary" href="{{ route('buku.edit',$book->id) }}">Edit</a>
                                    
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