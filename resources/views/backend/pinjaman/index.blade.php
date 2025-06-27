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
                    @elseif($message = Session::get('fail'))
                        <div class="alert alert-danger">
                            <p>{{ $message }}</p>
                        </div>
                    @endif
                    <div class="card-header border-0 d-flex justify-content-between align-items-center">
                        <h3 class="mb-0 tittle-ai">Tabel Peminjaman</h3>
                        <form method="GET" action="{{ route('pinjaman.index') }}" class="search-form-admin">
                            <input type="text" name="search" value="{{ request('search') }}" placeholder="Cari nama, judul buku, atau kode..." class="form-control search-input-admin">
                        </form>
                    </div>
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table width="100%" class="table align-items-center table-flush">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col" class="text-center" data-sort="no">No</th>
                                        <th scope="col"  class="sort text-center" data-sort="kode">Kode Anggota</th>
                                        <th scope="col" class="sort" data-sort="nama">Nama Peminjam</th>
                                        <th scope="col" class="sort" data-sort="judul">Judul Buku</th>
                                        <th scope="col" class="sort" data-sort="code">Tanggal Pinjam</th>
                                        <th scope="col" class="sort" data-sort="tgl_kembali">Tanggal Kembali</th>
                                        <th scope="col" class="text-center">Status</th>
                                        <th scope="col" class="text-center">Denda</th>
                                        <th scope="col" class="text-center">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody id="pinjaman-list">
                                    @foreach ($pinjaman->unique('id_Anggota') as $pinjam)
                                    <tr>
                                        <td class="text-center">{{ $loop->iteration }}</td>
                                        <td class="text-center">{{ $pinjam->anggota->Kode_Anggota }}</td>
                                        <td> {{ $pinjam->anggota->Nama }}</td>
                                        <td>
                                            @php
                                                $latestPinjam = \App\Model\Pinjaman::where('id_Anggota', $pinjam->id_Anggota)
                                                    ->orderByDesc('Tanggal_Pinjam')
                                                    ->first();
                                            @endphp
                                            @if($latestPinjam)
                                                @foreach ($latestPinjam->buku as $itemBuku)
                                                    {{ $itemBuku->Judul_Buku }}
                                                @endforeach
                                            @endif
                                        </td>
                                        <td>
                                            {{ $latestPinjam ? $latestPinjam->Tanggal_Pinjam : '-' }}
                                        </td>
                                        <td>
                                            {{ $latestPinjam ? $latestPinjam->Tanggal_Kembali : '-' }}
                                        </td>
                                        <td class="text-center">
                                            {{-- STATUS KOLEKTIF ANGGOTA --}}
                                            @php
                                                $allReturned = \App\Model\Pinjaman::where('id_Anggota', $pinjam->id_Anggota)->whereNull('Status')->count() === 0;
                                            @endphp
                                            <span class="badge badge-{{ $allReturned ? 'success' : 'warning' }}">
                                                {{ $allReturned ? 'Sudah' : 'Belum' }}
                                            </span>
                                        </td>
                                        <td class="text-center">
                                            @php
                                            $totalDenda = \App\Model\Pengembalian::where('id_Anggota', $pinjam->id_Anggota)->sum('Denda');
                                        @endphp
                                        Rp {{ number_format($totalDenda, 0, ',', '.') }}
                                        </td>
                                        <td class="text-center">
                                            <a href="{{ route('pinjaman.show', Crypt::encryptString($pinjam->id_Anggota)) }}" class="btn btn-info btn-sm mb-2">Detail Pinjaman</a>
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