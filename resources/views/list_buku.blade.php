@php
    use Illuminate\Support\Facades\Crypt;
@endphp

@extends('layouts.layout')
<meta name="csrf-token" content="{{ csrf_token() }}">

@section('buku1')
<div class="buku1">
  <div class="all-title-box">
    <div class="container text-center">
      <h1>List Buku <span class="m_1">Daftar Buku yang tersedia saat ini</span></h1>
    </div>
  </div>
  <div id="overviews" class="section wb">
        <div class="container">  
          <div class="Search">
            <div class="col-md-12">
              <form class="form" method="get" action="{{ route('search') }}">
                <div class="row mb-2">
                  <div class="col-md-3 mt-1"><input type="text" name="search" class="form-control" placeholder="Judul buku"></div>
                  <div class="col-md-1 mt-1"><button type="submit" class="btn btn-info">Cari</button></div>
                </div>
              </form>
            </div>
          </div>
          <div class="list-buku">
            <div class="col-md-12 table">
              <div class="row mt-4">  
                @foreach ($buku as $bukus)
                  <div class="col-lg-4">
                    <div class="p-3">
                      <div class="row shadow-lg bg-white rounded">
                        <div class="col-md-12 bg-info"><h2 class="tittle-book mt-2">{{ $bukus->Judul_Buku }}</h2></div>
                        <div class="col-md-12">
                          <div class="row mt-3 mb-3">
                            <div class="col-md-4">
                              <div class="image-blog">
                                @if ($bukus->Img != Null)
                                  <img src="{{ url('img-book/'.$bukus->Img) }}" width="50">
                                @else
                                   Foto Sampul Belum di Upload
                                @endif
                              </div>
                            </div>
                            <div class="col-md-8">
                                <div class="text">
                                  <strong> Penulis : {{ $bukus->Penulis }}</strong>
                                  <p>Kode Buku : {{ $bukus->Kode_Buku }}</p>
                                </div>  
                                <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#flipbookModal-{{ $bukus->id }}" data-pdf="{{ $bukus->filepdf ? route('buku.stream', Crypt::encryptString($bukus->id)) : '' }}">Baca</button>
                                <button onclick="handleLike('buku_{{ $bukus->id }}')" class="btn btn-outline-primary" id="likeBtn_buku_{{ $bukus->id }}">
                                    <i class="fa fa-heart"></i> Like
                                    <span id="likeCount_buku_{{ $bukus->id }}">0</span>
                                </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Modal -->
                  <div class="modal fade modal-flipbook" id="flipbookModal-{{ $bukus->id }}" tabindex="-1" role="dialog" aria-labelledby="flipbookModalLabel-{{ $bukus->id }}" aria-hidden="true">
                    <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h2 class="modal-title tittle-book mt-2" id="flipbookModalLabel-{{ $bukus->id }}">{{ $bukus->Judul_Buku }}</h2>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          @if ($bukus->filepdf)
                          <div id="flip-pdf-viewer-{{ $bukus->id }}" class="pdf-viewer">
                              <div id="book-{{ $bukus->id }}" class="flip-book">
                                  <!-- Pages will be generated here -->
                              </div>
                          </div>
                          @else
                          <p class="text-muted">PDF belum diupload</p>
                          @endif
                        </div>
                      </div>
                    </div>
                  </div>
                @endforeach
              </div><!-- end row -->
            </div>
          </div>
        </div><!-- end container -->
  </div><!-- end section -->
  <style type="text/css">
    p{
      font-family: serif;
      font-size: 12px;
    }
    i { 
      font-family: sans;
      color: orange;
    }
    .img-book {
      width: 100px%;
      height: 140px;
    }
    .tittle-book {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: center;
      margin:center;
      font-weight: bold;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
  }

  @media (min-width: 992px) {
    .modal-flipbook.modal .modal-dialog {
      max-width: 80vw;
    }
  }

  @media (max-width: 499px) {
    .modal-flipbook.modal .modal-dialog {
      max-width: 95vw;
      margin: 10px auto;
    }
    
    .modal-flipbook .modal-body {
      padding: 10px;
    }
    
    .flip-book {
      margin: 0 auto;
      max-width: 100%;
    }
  }

  .flip-book {
      margin: 0 auto;
  }
  .modal-body .pdf-viewer, .modal-body .flip-book {
      /* The height is set by the page-flip.js configuration */
      width: 100%;
  }

  .btn-outline-primary.liked {
      background-color: #ff4757 !important;
      color: #fff !important;
      border: none !important;
      box-shadow: 0 2px 6px rgba(255,71,87,0.15);
  }
  .btn-outline-primary:disabled {
      opacity: 1;
  }
  </style>
@endsection

@push('scripts')
<!-- Like Button Script -->
<script src="{{ asset('js/like-button.js') }}"></script>

<!-- PDF.js Library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"></script>

<!-- StPageFlip Library -->
<script src="https://unpkg.com/page-flip@2.0.7/dist/js/page-flip.browser.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function () {
    if (typeof pdfjsLib !== 'undefined') {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }

    $('div[id^="flipbookModal-"]').on('show.bs.modal', function (event) {
        const modal = $(this);
        const bookId = modal.attr('id').split('-')[1];
        const triggerButton = $(event.relatedTarget);
        const pdfUrl = triggerButton.data('pdf');
        const bookContainer = modal.find('.flip-book');
        
        if (!pdfUrl) {
            bookContainer.html('<p class="text-muted">Pratinjau PDF tidak tersedia.</p>');
            return;
        }

        if (bookContainer.data('initialized')) {
            return;
        }

        bookContainer.data('initialized', true);
        bookContainer.html('<p>Memuat pratinjau...</p>');

        async function initStPageFlip() {
            try {
                const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
                const screenWidth = window.innerWidth;

                // Get the first page to determine the aspect ratio
                const firstPage = await pdf.getPage(1);
                const viewport = firstPage.getViewport({ scale: 1 });
                const aspectRatio = viewport.height / viewport.width;
                
                if (screenWidth < 500) {
                    // Mobile - Simple single page view with manual navigation
                    let currentPage = 1;
                    const totalPages = pdf.numPages;
                    
                    async function renderPage(pageNum) {
                        const page = await pdf.getPage(pageNum);
                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');
                        const viewport = page.getViewport({ scale: 1.2 });
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;
                        await page.render({ canvasContext: context, viewport: viewport }).promise;
                        
                        bookContainer.html(`
                            <div style="text-align: center; padding: 10px;">
                                <img src="${canvas.toDataURL()}" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                                <div style="margin-top: 15px; display: flex; justify-content: center; gap: 10px;">
                                    <button onclick="changePage(${pageNum - 1})" class="btn btn-sm btn-outline-primary" ${pageNum <= 1 ? 'disabled' : ''}>
                                        <i class="fa fa-chevron-left"></i> Sebelumnya
                                    </button>
                                    <span style="padding: 5px 10px; background: #f8f9fa; border-radius: 4px; font-size: 12px;">
                                        ${pageNum} / ${totalPages}
                                    </span>
                                    <button onclick="changePage(${pageNum + 1})" class="btn btn-sm btn-outline-primary" ${pageNum >= totalPages ? 'disabled' : ''}>
                                        Selanjutnya <i class="fa fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        `);
                    }
                    
                    // Make changePage function globally accessible
                    window.changePage = function(newPage) {
                        if (newPage >= 1 && newPage <= totalPages) {
                            currentPage = newPage;
                            renderPage(currentPage);
                        }
                    };
                    
                    // Render first page
                    await renderPage(currentPage);
                    return;
                }

                // Desktop/Tablet - Full flipbook
                const bookWidth = 550;
                const bookHeight = bookWidth * aspectRatio;

                const pageFlip = new St.PageFlip(bookContainer[0], {
                    width: bookWidth,
                    height: bookHeight,
                    size: 'stretch',
                    showCover: true
                });

                const numPages = pdf.numPages;
                let pagesHtml = '';

                // First page (cover)
                const page1 = await pdf.getPage(1);
                const canvas1 = document.createElement('canvas');
                const context1 = canvas1.getContext('2d');
                const viewport1 = page1.getViewport({ scale: 1.5 });
                canvas1.height = viewport1.height;
                canvas1.width = viewport1.width;
                await page1.render({ canvasContext: context1, viewport: viewport1 }).promise;
                pagesHtml += `<div class="page page-cover" data-density="hard"><div class="page-content"><img src="${canvas1.toDataURL()}" style="width: 100%; height: 100%;"></div></div>`;
                
                // Process remaining pages
                for (let i = 2; i <= numPages; i++) {
                    const page = await pdf.getPage(i);
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    const viewport = page.getViewport({ scale: 1.5 });
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    await page.render({ canvasContext: context, viewport: viewport }).promise;
                    pagesHtml += `<div class="page"><div class="page-content"><img src="${canvas.toDataURL()}" style="width: 100%; height: 100%;"></div></div>`;
                }

                bookContainer.html(pagesHtml);
                pageFlip.loadFromHTML(bookContainer.children());

            } catch (error) {
                console.error('Error loading PDF for flipbook:', error);
                bookContainer.html(`<p class="text-danger">Gagal memuat PDF: ${error.message}</p>`);
            }
        }

        initStPageFlip();
    });
});
</script>
@endpush

