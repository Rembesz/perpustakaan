// Buku Show Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Set PDF.js worker path
    if (typeof pdfjsLib !== 'undefined') {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }

    // Get PDF URL and book info from meta tags
    const pdfUrlMeta = document.querySelector('meta[name="pdf-url"]');
    const pdfUrl = pdfUrlMeta ? pdfUrlMeta.content : null;

    const bukuJudulMeta = document.querySelector('meta[name="buku-judul"]');
    const bukuJudul = bukuJudulMeta ? bukuJudulMeta.content : 'Buku';

    const bukuPenulisMeta = document.querySelector('meta[name="buku-penulis"]');
    const bukuPenulis = bukuPenulisMeta ? bukuPenulisMeta.content : 'Unknown Author';

    const bukuKodeMeta = document.querySelector('meta[name="buku-kode"]');
    const bukuKode = bukuKodeMeta ? bukuKodeMeta.content : 'Unknown Code';

    const bukuImageMeta = document.querySelector('meta[name="buku-image"]');
    const bukuImage = bukuImageMeta ? bukuImageMeta.content : '/img-user/nopick.png';

    if (!pdfUrl) {
        console.log('No PDF URL found');
        return;
    }

    console.log('PDF URL:', pdfUrl);
    console.log('Buku Judul:', bukuJudul);
    console.log('Buku Penulis:', bukuPenulis);
    console.log('Buku Kode:', bukuKode);
    console.log('Buku Image:', bukuImage);

    // Variables for normal PDF viewer
    let pdfDoc = null;
    let pageNum = 1;
    let pageRendering = false;
    let pageNumPending = null;
    let scale = 1.5;
    let canvas = null;
    let ctx = null;
    let pageFlip = null;

    // Initialize normal PDF viewer
    function initNormalViewer() {
        canvas = document.createElement('canvas');
        ctx = canvas.getContext('2d');

        // Load PDF
        pdfjsLib.getDocument(pdfUrl).promise.then(function(pdfDoc_) {
            pdfDoc = pdfDoc_;
            const pageCountElement = document.getElementById('page-count');
            if (pageCountElement) {
                pageCountElement.textContent = pdfDoc.numPages;
            }
            renderPage(pageNum);
        }).catch(function(error) {
            console.error('Error loading PDF:', error);
            document.getElementById('pdf-canvas-container').innerHTML = `
                <div class="text-center p-4">
                    <p class="text-danger">Error loading PDF file</p>
                    <p class="text-muted">${error.message}</p>
                    <button class="btn btn-primary" onclick="location.reload()">Retry</button>
                </div>
            `;
        });
    }

    // Render PDF page
    function renderPage(num) {
        if (!pdfDoc) return;

        pageRendering = true;
        pdfDoc.getPage(num).then(function(page) {
            const viewport = page.getViewport({ scale: scale });
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };

            const renderTask = page.render(renderContext);
            renderTask.promise.then(function() {
                pageRendering = false;
                if (pageNumPending !== null) {
                    renderPage(pageNumPending);
                    pageNumPending = null;
                }
            });
        }).catch(function(error) {
            console.error('Error rendering page:', error);
            pageRendering = false;
        });

        const pageNumElement = document.getElementById('page-num');
        if (pageNumElement) {
            pageNumElement.textContent = num;
        }
    }

    function queueRenderPage(num) {
        if (pageRendering) {
            pageNumPending = num;
        } else {
            renderPage(num);
        }
    }

    // Navigation functions
    function onPrevPage() {
        if (!pdfDoc || pageNum <= 1) return;
        pageNum--;
        queueRenderPage(pageNum);
    }

    function onNextPage() {
        if (!pdfDoc || pageNum >= pdfDoc.numPages) return;
        pageNum++;
        queueRenderPage(pageNum);
    }

    function zoomIn() {
        scale += 0.2;
        queueRenderPage(pageNum);
    }

    function zoomOut() {
        if (scale > 0.5) {
            scale -= 0.2;
            queueRenderPage(pageNum);
        }
    }

    function goToPage() {
        if (!pdfDoc) return;
        const input = document.getElementById('page-input');
        const page = parseInt(input.value);
        if (page >= 1 && page <= pdfDoc.numPages) {
            pageNum = page;
            queueRenderPage(pageNum);
        }
    }

    // View switching functions
    function switchToNormalView() {
        document.getElementById('normal-pdf-viewer').style.display = 'block';
        document.getElementById('flip-pdf-viewer').style.display = 'none';

        // Update button states
        document.getElementById('normal-view').classList.add('active');
        document.getElementById('flip-view').classList.remove('active');

        // Destroy StPageFlip if exists and clean up its container
        if (pageFlip && typeof pageFlip.destroy === 'function') {
            pageFlip.destroy();
            pageFlip = null;

            const flipContainer = document.getElementById('flip-pdf-viewer');
            if (flipContainer) {
                flipContainer.innerHTML = ''; // Clean the container
            }
        }

        // Initialize normal viewer if not already done
        if (!pdfDoc) {
            initNormalViewer();
        }
    }

    function switchToFlipView() {
        document.getElementById('normal-pdf-viewer').style.display = 'none';
        document.getElementById('flip-pdf-viewer').style.display = 'block';

        // Update button states
        document.getElementById('flip-view').classList.add('active');
        document.getElementById('normal-view').classList.remove('active');

        // Re-create the book container for a pristine state before initializing
        const flipContainer = document.getElementById('flip-pdf-viewer');
        if (flipContainer) {
            flipContainer.innerHTML = '<div id="book"></div>';
        }

        // Initialize StPageFlip
        initStPageFlip();
    }

    // Initialize StPageFlip with HTML pages
    function initStPageFlip() {
        if (pageFlip) {
            pageFlip.destroy();
        }

        const container = document.getElementById('book');
        if (!container) return;

        // Clear container
        container.innerHTML = '';

        // Check if StPageFlip is available
        if (typeof St === 'undefined' || typeof St.PageFlip === 'undefined') {
            console.error('StPageFlip not loaded');
            container.innerHTML = `
                <div class="text-center p-4">
                    <p class="text-warning">StPageFlip library not loaded</p>
                    <p class="text-muted">Please check your internet connection</p>
                    <button class="btn btn-primary" onclick="switchToNormalView()">Back to Normal View</button>
                </div>
            `;
            return;
        }

        try {
            // Create StPageFlip instance with good configuration
            pageFlip = new St.PageFlip(container, {
                width: 800,
                height: 1000,
                size: "stretch",
                minWidth: 315,
                maxWidth: 1000,
                minHeight: 400,
                maxHeight: 2000,
                maxShadowOpacity: 0.5,
                showCover: true,
                mobileScrollSupport: false,
                autoSize: true
            });

            // Load PDF pages as HTML
            loadPDFPagesAsHTML();

        } catch (error) {
            console.error('Error creating StPageFlip:', error);
            container.innerHTML = `
                <div class="text-center p-4">
                    <p class="text-warning">Error creating flip book</p>
                    <p class="text-muted">${error.message}</p>
                    <button class="btn btn-primary" onclick="switchToNormalView()">Back to Normal View</button>
                </div>
            `;
        }
    }

    // Load PDF pages as HTML elements
    function loadPDFPagesAsHTML() {
        if (!pageFlip) return;

        pdfjsLib.getDocument(pdfUrl).promise.then(function(pdfDoc_) {
            const totalPages = pdfDoc_.numPages;
            console.log('Loading', totalPages, 'pages for flip book');

            // Load all PDF pages
            const pagePromises = [];
            for (let i = 1; i <= totalPages; i++) {
                pagePromises.push(createHTMLPage(pdfDoc_, i));
            }

            Promise.all(pagePromises).then(function(htmlPages) {
                // Load pages into StPageFlip
                pageFlip.loadFromHTML(htmlPages);
                console.log('Flip book loaded successfully');
            }).catch(function(error) {
                console.error('Error loading pages for flip book:', error);
            });
        }).catch(function(error) {
            console.error('Error loading PDF for flip book:', error);
        });
    }

    // Create HTML page from PDF page
    function createHTMLPage(pdfDoc, pageNum) {
        return pdfDoc.getPage(pageNum).then(function(page) {
            // Get book dimensions from flipbook config
            const bookWidth = 800;
            const bookHeight = 680;

            const pdfPageViewport = page.getViewport({ scale: 1 });

            // Calculate scale to fit page into book, with a little padding
            const scale = Math.min(
                (bookWidth * 0.95) / pdfPageViewport.width,
                (bookHeight * 0.95) / pdfPageViewport.height
            );

            const viewport = page.getViewport({ scale: scale });
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };

            return page.render(renderContext).promise.then(function() {
                const pageElement = document.createElement('div');
                pageElement.className = 'my-page';
                pageElement.innerHTML = `
                    <div class="page-content">
                        <div class="page-header">
                            <small class="text-muted">Halaman ${pageNum}</small>
                        </div>
                        <div class="page-image">
                            <img src="${canvas.toDataURL()}" alt="Page ${pageNum}">
                        </div>
                    </div>
                `;
                return pageElement;
            });
        });
    }

    // Event listeners
    const prevButton = document.getElementById('prev-page');
    if (prevButton) {
        prevButton.addEventListener('click', onPrevPage);
    }

    const nextButton = document.getElementById('next-page');
    if (nextButton) {
        nextButton.addEventListener('click', onNextPage);
    }

    const zoomInButton = document.getElementById('zoom-in');
    if (zoomInButton) {
        zoomInButton.addEventListener('click', zoomIn);
    }

    const zoomOutButton = document.getElementById('zoom-out');
    if (zoomOutButton) {
        zoomOutButton.addEventListener('click', zoomOut);
    }

    const goToPageButton = document.getElementById('go-to-page');
    if (goToPageButton) {
        goToPageButton.addEventListener('click', goToPage);
    }

    const downloadButton = document.getElementById('download-pdf');
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = bukuJudul + '.pdf';
            link.click();
        });
    }

    // View mode switchers
    const normalViewButton = document.getElementById('normal-view');
    if (normalViewButton) {
        normalViewButton.addEventListener('click', switchToNormalView);
    }

    const flipViewButton = document.getElementById('flip-view');
    if (flipViewButton) {
        flipViewButton.addEventListener('click', switchToFlipView);
    }

    // Enter key for page input
    const pageInput = document.getElementById('page-input');
    if (pageInput) {
        pageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                goToPage();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (document.getElementById('normal-pdf-viewer').style.display !== 'none') {
            if (e.key === 'ArrowLeft') {
                onPrevPage();
            } else if (e.key === 'ArrowRight') {
                onNextPage();
            } else if (e.key === '+' || e.key === '=') {
                zoomIn();
            } else if (e.key === '-') {
                zoomOut();
            }
        }
    });

    // Mouse wheel zoom
    const pdfViewer = document.getElementById('normal-pdf-viewer');
    if (pdfViewer) {
        pdfViewer.addEventListener('wheel', function(e) {
            if (e.ctrlKey) {
                e.preventDefault();
                if (e.deltaY < 0) {
                    zoomIn();
                } else {
                    zoomOut();
                }
            }
        });
    }

    // Initialize normal viewer by default
    initNormalViewer();

    // Append canvas to container
    const canvasContainer = document.getElementById('pdf-canvas-container');
    if (canvasContainer && canvas) {
        canvasContainer.appendChild(canvas);
    }

    // PDF Preview Toggle Logic
    const toggleBtn = document.getElementById('toggle-pdf-preview');
    const pdfCard = document.getElementById('pdf-preview-card');
    if (toggleBtn && pdfCard) {
        const cardBody = pdfCard.querySelector('.card-body');
        toggleBtn.addEventListener('click', function() {
            if (cardBody.style.display === 'none' || cardBody.style.display === '') {
                cardBody.style.display = 'block';
                toggleBtn.textContent = 'Close Preview';
            } else {
                cardBody.style.display = 'none';
                toggleBtn.textContent = 'Preview PDF';
            }
        });
    }
});