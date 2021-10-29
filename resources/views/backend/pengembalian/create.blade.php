@extends('backend.layout')
  
@section('content')
<div class="container-fluid">
    <div class="row mt-4">
        <div class="col-lg-12">
            <h1 class="page-header text-center tittle-ai">Create Pengembalian</h1>
        </div>
    </div>
    @if ($errors->any())
    <div class="alert alert-danger">
        <strong>Maaf</strong> Data yang anda inputkan bermasalah.<br><br>
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @elseif($message = Session::get('fail'))
    <div class="alert alert-danger">
        <p class="text-center">{{ $message }}</p>
    </div>
    @endif
    
    <form action="{{ route('pengembalian.store') }}" method="POST">
        @csrf
        <div class="col-lg-12">
            <div class="row">
                <div class="col-2 align-self-center"></div>
                <div class="col-8 align-self-center rounded bg-white shadow-lg border-primary">
                    <div class="row mt-4 mb-4">
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="form-group row">
                                <label for="#" class="col-sm-3 col-form-label"><strong>Tanggal Kembali</strong></label>
                                <div class="col-sm-3">
                                    <input type="text" onfocus="(this.type='date')" name="Tanggal_Kembali" class="form-control" placeholder="Masukkan Tanggal">
                                </div>
                                <label for="#" class="col-sm-1 col-form-label"><strong>Denda</strong></label>
                                <div class="col-sm-5">
                                    <select class="form-control" name="Denda">
                                    <option value="">Tidak Terlambat</option>
                                    <option value="10000">1 Minggu Terlambat - Rp 10.000</option>
                                    <option value="20000">2 Minggu Terlambat - Rp 20.000</option>
                                    <option value="30000">3 Minggu Terlambat - Rp 30.000</option>
                                    <option value="40000">4 Minggu Terlambat - Rp 40.000</option>
                                    <option value="50000">5 Minggu Terlambat - Rp 50.000</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="form-group row">
                                <label for="#" class="col-sm-3 col-form-label"><strong>Kode Buku</strong></label>
                                <div class="col-sm-9">
                                    <select class="form-control" name="id_Buku" id="#">
                                            <option value="">Pilih Buku</option>
                                        @foreach ($buku as $itemBuku)
                                            <option {{ $itemBuku->Stok }} value="{{ $itemBuku->id }}">{{ $itemBuku->Kode_Buku }} - {{ $itemBuku->Judul_Buku }} {{ $itemBuku->Stok < 1 ? '- Stok Kosong':'' }}</option>                            
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="form-group row">
                                    <label for="#" class="col-sm-3 col-form-label"><strong>Kode Anggota</strong></label>
                                <div class="col-sm-9">
                                    <select class="form-control" name="id_Anggota" id="#">
                                            <option value="">Pilih Anggota</option>
                                        @foreach ($anggota as $itemAnggota)
                                            <option  value="{{ $itemAnggota->id }}">{{ $itemAnggota->Kode_Anggota }} - {{ $itemAnggota->Nama }}</option>                            
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 float-right">
                                <button type="submit" class="btn btn-primary mt-1">Simpan</button>
                                <a class="btn btn-info mt-1" href="{{ route('pengembalian.index') }}"> Kembali</a>
                        </div>
                    </div>
                </div>
                <div class="col-2 align-self-center"></div>
            </div>
        </div>
        {{-- <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group row">
                    <label for="#" class="col-sm-2 col-form-label"><strong>Tanggal Kembali</strong></label>
                    <div class="col-sm-4">
                        <input type="text" onfocus="(this.type='date')" name="Tanggal_Kembali" class="form-control" placeholder="Masukkan Tanggal">
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group row">
                    <label for="#" class="col-sm-2 col-form-label"><strong>Denda</strong></label>
                    <div class="col-sm-4">
                        <select class="form-control" name="Denda">
                        <option value="">Tidak Terlambat</option>
                        <option value="10000">1 Minggu Terlambat - Rp 10.000</option>
                        <option value="20000">2 Minggu Terlambat - Rp 20.000</option>
                        <option value="30000">3 Minggu Terlambat - Rp 30.000</option>
                        <option value="40000">4 Minggu Terlambat - Rp 40.000</option>
                        <option value="50000">5 Minggu Terlambat - Rp 50.000</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group row">
                    <label for="#" class="col-sm-2 col-form-label"><strong>Kode Buku</strong></label>
                    <div class="col-sm-4">
                        <select class="form-control" name="id_Buku" id="#">
                                <option value="">Pilih Buku</option>
                            @foreach ($buku as $itemBuku)
                                <option {{ $itemBuku->Stok < 1 ? 'disabled':'' }} value="{{ $itemBuku->id }}">{{ $itemBuku->Kode_Buku }} - {{ $itemBuku->Judul_Buku }} {{ $itemBuku->Stok < 1 ? '- Stok Kosong':'' }}</option>                            
                            @endforeach
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group row">
                        <label for="#" class="col-sm-2 col-form-label"><strong>Kode Anggota</strong></label>
                    <div class="col-sm-4">
                        <select class="form-control" name="id_Anggota" id="#">
                                <option value="">Pilih Anggota</option>
                            @foreach ($anggota as $itemAnggota)
                                <option  value="{{ $itemAnggota->id }}">{{ $itemAnggota->Kode_Anggota }} - {{ $itemAnggota->Nama }}</option>                            
                            @endforeach
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 text-right">
                    <button type="submit" class="btn btn-success">Simpan</button>
                    <a class="btn btn-danger" href="{{ route('pengembalian.index') }}"> Kembali</a>
            </div>
        </div> --}}
    </form>
</div>
@endsection