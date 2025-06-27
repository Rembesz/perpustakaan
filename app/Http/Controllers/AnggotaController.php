<?php

namespace App\Http\Controllers;

use App\Model\Anggota;

use Illuminate\Http\Request;

class AnggotaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Anggota::query();
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where('Nama', 'like', "%$search%")
                  ->orWhere('Kode_Anggota', 'like', "%$search%");
        }
        $anggota = $query->paginate(10);
        return view('backend.anggota.index', compact('anggota'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.anggota.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'Kode_Anggota'  => 'required|unique:anggota',
            'Nama'          => 'required|unique:anggota',
            'file'          => 'file|image|mimes:jpeg,png,jpg|max:2048',
            'Jurusan'       => 'required',
            'No_Telp'       => 'required|max:12|min:10',
            'Alamat'        => 'required',
        ]);
        // Anggota::create($request->all());
        
        if ($request->hasFile('file')){
            $file = $request->file('file');
            $img_name = time()."_".$file->getClientOriginalName();
            $path = public_path('/img-user');
            $file->move($path,$img_name);
    
            $anggota = new Anggota;
            $anggota->Kode_Anggota = $request->Kode_Anggota;
            $anggota->Nama = $request->Nama;
            $anggota->Img = $img_name;
            $anggota->Jurusan = $request->Jurusan;
            $anggota->No_Telp = $request->No_Telp;
            $anggota->Alamat = $request->Alamat;
            $anggota->save();
        }
        else {
            $anggota = new Anggota;
            $anggota->Kode_Anggota = $request->Kode_Anggota;
            $anggota->Nama = $request->Nama;
            $anggota->Img = Null;
            $anggota->Jurusan = $request->Jurusan;
            $anggota->No_Telp = $request->No_Telp;
            $anggota->Alamat = $request->Alamat;
            $anggota->save();
        }
        
        return redirect()->route('anggota.index')->with('success','Anggota berhasil di input');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Anggota  $anggota
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $anggota = \App\Model\Anggota::find($id);
        if (!$anggota) {
            // Redirect atau tampilkan pesan error jika data tidak ditemukan
            return redirect()->route('anggota.index')->with('error', 'Anggota tidak ditemukan');
        }
        return view('backend.anggota.show', compact('anggota'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Anggota  $anggota
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $anggota = Anggota::find($id);
        return view('backend.anggota.edit',compact('anggota'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Anggota  $anggota
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'Kode_Anggota'  => 'required|unique:anggota',
            'Nama'          => 'required',
            'file'          => 'file|image|mimes:jpeg,png,jpg|max:2048',
            'Jurusan'       => 'required',
            'No_Telp'       => 'required|max:12|min:11',
            'Alamat'        => 'required',
        ]);
        
        // $anggota = Anggota::findOrFail($id);
        if ($request->hasFile('file')){    
            $anggota = Anggota::find($id);

            $path = public_path('img-user/'.$anggota->Img);
            if ($anggota->Img != Null){
                unlink($path);
            }

            $file = $request->file('file');
            $img_name = time()."_".$file->getClientOriginalName();
            $path = public_path('/img-user');
            $file->move($path,$img_name);

            $anggota->Kode_Anggota = $request->Kode_Anggota;
            $anggota->Nama = $request->Nama;
            $anggota->Img = $img_name;
            $anggota->Jurusan = $request->Jurusan;
            $anggota->No_Telp = $request->No_Telp;
            $anggota->Alamat = $request->Alamat;
            $anggota->save();
        }
        else {
            $anggota = Anggota::find($id);
            $anggota->Kode_Anggota = $request->Kode_Anggota;
            $anggota->Nama = $request->Nama;
            $anggota->Img = Null;
            $anggota->Jurusan = $request->Jurusan;
            $anggota->No_Telp = $request->No_Telp;
            $anggota->Alamat = $request->Alamat;
            $anggota->save();
        }
        
        return redirect()->route('anggota.index')->with('succes','Anggota berhasil di update');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Anggota  $anggota
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $anggota = Anggota::findOrFail($id);
        $path = public_path('img-user/'.$anggota->Img);
        if ($anggota->Img != Null){
            unlink($path);
        }
        $anggota->delete();
        return redirect()->route('anggota.index')->with('success','Anggota berhasil dihapus');
    }
}