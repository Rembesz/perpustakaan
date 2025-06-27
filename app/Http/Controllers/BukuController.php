<?php

namespace App\Http\Controllers;

use App\Model\Buku;
use Carbon\Carbon;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Null_;

class BukuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = BUku::query();
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where('Judul_Buku', 'like', "%$search%")
                  ->orWhere('Kode_Buku', 'like', "%$search%");
        }
        $buku = $query->paginate(100);
        $date = Carbon::today()->toDateString();
        return view('backend.buku.index',compact('buku'))->with('i', (request()->input('page', 1) - 1) * 10);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.buku.create');
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
            'Kode_Buku' => 'required|unique:buku',
            'Judul_Buku'=> 'required|unique:buku',
            'img_book'  => 'file|image|mimes:jpeg,png,jpg|max:2048',
            'Penulis'   => 'required',
            'Stok'      => 'required',
            'filepdf'   => 'nullable|file|mimes:pdf|max:20480',
        ]);

        $buku = new Buku;
        $buku->Kode_Buku = $request->Kode_Buku;
        $buku->Judul_Buku = $request->Judul_Buku;
        $buku->Penulis = $request->Penulis;
        $buku->Stok = $request->Stok;

        // Handle image upload
        if ($request->hasFile('img_book')) {
            $img_book = $request->file('img_book');
            $img_name = time()."_".$img_book->getClientOriginalName();
            $img_book->move(public_path('img-book'), $img_name);
            $buku->Img = $img_name;
        } else {
            $buku->Img = null;
        }

        // Handle PDF upload
        if ($request->hasFile('filepdf')) {
            $pdf = $request->file('filepdf');
            // Clean filename - replace spaces and special characters
            $originalName = $pdf->getClientOriginalName();
            $cleanName = preg_replace('/[^a-zA-Z0-9._-]/', '_', $originalName);
            $pdf_name = time()."_".$cleanName;
            // Store the file in storage/app/buku_pdf
            $pdf->storeAs('buku_pdf', $pdf_name, 'local');
            $buku->filepdf = $pdf_name;
        } else {
            $buku->filepdf = null;
        }

        $buku->save();
        return redirect()->route('buku.index')->with('success','Buku berhasil di input');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Buku  $buku
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $buku = Buku::find($id);
        
        if (!$buku) {
            return redirect()->route('buku.index')->with('error', 'Buku tidak ditemukan');
        }
        
        return view('backend.buku.show', compact('buku'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Buku  $buku
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $buku = Buku::find($id);
        
        if (!$buku) {
            return redirect()->route('buku.index')->with('error', 'Buku tidak ditemukan');
        }
        
        return view('backend.buku.edit', compact('buku'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Buku  $buku
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'Kode_Buku' => 'required|unique:buku,Kode_Buku,'.$id,
            'img_book'  => 'file|image|mimes:jpeg,png,jpg|max:2048',
            'Judul_Buku'=> 'required|unique:buku,Judul_Buku,'.$id,
            'Penulis'   => 'required',
            'Stok'      => 'required',
            'filepdf'   => 'nullable|file|mimes:pdf|max:20480',
        ]);
        
        $buku = Buku::find($id);
        
        if (!$buku) {
            return redirect()->route('buku.index')->with('error', 'Buku tidak ditemukan');
        }
        
        $buku->Kode_Buku = $request->Kode_Buku;
        $buku->Judul_Buku = $request->Judul_Buku;
        $buku->Penulis = $request->Penulis;
        $buku->Stok = $request->Stok;

        // Handle image upload dan hapus gambar lama jika ada upload baru
        if ($request->hasFile('img_book')) {
            // Hapus gambar lama jika ada
            if ($buku->Img != null) {
                $oldPath = public_path('img-book/'.$buku->Img);
                if (file_exists($oldPath)) {
                    unlink($oldPath);
                }
            }
            $img_book = $request->file('img_book');
            $img_name = time()."_".$img_book->getClientOriginalName();
            $img_book->move(public_path('img-book'), $img_name);
            $buku->Img = $img_name;
        }
        // Jika tidak upload gambar baru, jangan set Img ke null (biarkan gambar lama tetap ada)

        // Handle PDF upload dan hapus file lama jika ada upload baru
        if ($request->hasFile('filepdf')) {
            // Hapus PDF lama jika ada
            if ($buku->filepdf != null) {
                $oldPdf = storage_path('app/buku_pdf/'.$buku->filepdf);
                if (file_exists($oldPdf)) {
                    unlink($oldPdf);
                }
            }
            $pdf = $request->file('filepdf');
            // Clean filename - replace spaces and special characters
            $originalName = $pdf->getClientOriginalName();
            $cleanName = preg_replace('/[^a-zA-Z0-9._-]/', '_', $originalName);
            $pdf_name = time()."_".$cleanName;
            // Store the file in storage/app/buku_pdf
            $pdf->storeAs('buku_pdf', $pdf_name, 'local');
            $buku->filepdf = $pdf_name;
        }
        // Jika tidak upload PDF baru, jangan set filepdf ke null (biarkan file lama tetap ada)

        $buku->save();
        return redirect()->route('buku.index')->with('success','Buku berhasil di update');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Buku  $buku
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $buku = Buku::find($id);
        
        if (!$buku) {
            return redirect()->route('buku.index')->with('error', 'Buku tidak ditemukan');
        }
        
        // Hapus gambar jika ada dan file-nya ada
        if ($buku->Img != null) {
            $path = public_path('img-book/'.$buku->Img);
            if (file_exists($path)) {
                unlink($path);
            }
        }
        // Hapus PDF jika ada dan file-nya ada
        if ($buku->filepdf != null) {
            $droppdf = storage_path('app/buku_pdf/'.$buku->filepdf);
            if (file_exists($droppdf)) {
                unlink($droppdf);
            }
        }
        $buku->delete();
        return redirect()->route('buku.index')->with('success','Buku berhasil dihapus');
    }

    public function stream($id)
    {
        $buku = Buku::find($id);
        
        if (!$buku) {
            abort(404, 'Buku tidak ditemukan');
        }
        
        if ($buku->filepdf) {
            $path = storage_path('app/buku_pdf/' . $buku->filepdf);
            if (file_exists($path)) {
                return response()->file($path);
            }
        }
        abort(404, 'File PDF tidak ditemukan');
    }
}
