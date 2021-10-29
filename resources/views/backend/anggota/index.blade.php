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
                        <h3 class="mb-0 tittle-ai">Tabel Anggota</h3>
                    </div>
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table width="100%" class="table align-items-center table-flush">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col" class="sort text-center" data-sort="no">No</th>
                                        <th scope="col" class="sort" data-sort="code">Kode Anggota</th>
                                        <th scope="col" class="sort" data-sort="nama">Nama</th>
                                        <th scope="col" class="sort" data-sort="jurusan">Jurusan</th>
                                        <th scope="col" class="sort" data-sort="telp">No Telepon</th>
                                        <th scope="col" class="sort" data-sort="alamat">Alamat</th>
                                        <th scope="col" class="text-center" data-sort="completion">Action</th>
                                      </tr>
                                </thead>
                                <tbody>
                                    @foreach ($anggota as $member)
                                    <tr>
                                        <td>{{ $loop->iteration }}</td>
                                        <td class="text-center">{{ $member->Kode_Anggota }}</td>
                                        <td>{{ $member->Nama }}</td>
                                        <td>{{ $member->Jurusan }}</td>
                                        <td>{{ $member->No_Telp }}</td>
                                        <td>{{ $member->Alamat }}</td>
                                        <td class="text-center">
                                            <form action="{{ route('anggota.destroy',$member->id) }}" method="POST">

                                                <a class="btn btn-info" href="{{ route('anggota.show',$member->id) }}">Tampil</a>
                                                            
                                                <a class="btn btn-primary" href="{{ route('anggota.edit',$member->id) }}">Edit</a>
                                                    
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
                <span class="text-right">{{ $anggota->links() }}</span>
            </div>
        </div>
        <div class="col-lg-2 pull-right">   
            <a class="btn btn-success" href="{{ route('anggota.create') }}"> Tambah Anggota</a>
        </div>
    </div>
</div>

@endsection