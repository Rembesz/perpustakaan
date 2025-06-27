<div id="tentang" class="section wb">
    <div class="container">
        <div class="section-title row text-center">
            <div class="col-md-8 offset-md-2">
                <h3>AyoMaca</h3>
                <p class="lead">AyoMaca adalah sebuah platform perpustakaan digital yang menyediakan berbagai koleksi buku, jurnal ilmiah, artikel edukatif, dan referensi belajar lainnya secara gratis dan mudah diakses oleh siapa saja, kapan saja, dan di mana saja.</p>
            </div>
        </div><!-- end title -->
    
        <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="message-box">
                    <h4>📚 Dari Perpustakaan Fisik ke Digital</h4>
                    <h2>Perpustakaan Digital</h2>
                    <p>AyoMaca merupakan hasil pengembangan dari layanan perpustakaan offline yang telah lebih dulu berdiri. Sejak tahun 2023, perpustakaan ini mulai bertransformasi ke ranah digital demi menjawab tantangan zaman dan kebutuhan pembaca akan akses informasi yang cepat dan fleksibel.</p>
                    <p>Dengan memanfaatkan teknologi digital, AyoMaca kini hadir sebagai perpustakaan berbasis web yang responsif, praktis, dan terintegrasi dengan berbagai koleksi literatur digital dari manapun.</p>

                    <button onclick="handleLike('section1')" class="btn btn-outline-primary" id="likeBtn1">
                        <i class="fa fa-heart"></i> Like
                        <span id="likeCount1">0</span>
                    </button>
                </div><!-- end messagebox -->
            </div><!-- end col -->
            
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="tentang post-media wow fadeIn">
                    <img src="{{ asset('library-temp') }}/images/about_02.jpg" alt="" class="img-fluid tentang-img">
                </div><!-- end media -->
            </div><!-- end col -->
        </div>
        <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="post-media wow fadeIn">
                    <img src="{{ asset('library-temp') }}/images/koleksi.jpg" alt="" class="img-fluid tentang-img">
                </div><!-- end media -->
            </div><!-- end col -->
            
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="message-box">
                    <h2>Koleksi Buku</h2>
                    <p>AyoMaca memiliki koleksi buku digital yang beragam dan terus berkembang, mencakup berbagai bidang ilmu pengetahuan dan minat bacaan. Mulai dari buku pelajaran, literatur fiksi dan nonfiksi, jurnal ilmiah, hingga referensi penelitian – semua tersedia dalam satu platform yang mudah diakses. Pengguna dapat dengan mudah menjelajahi koleksi melalui fitur pencarian dan kategori, seperti sains, teknologi, sastra, sejarah, pendidikan, dan banyak lagi.</p>
                    
                    <button onclick="handleLike('section2')" class="btn btn-outline-primary" id="likeBtn2">
                        <i class="fa fa-heart"></i> Like
                        <span id="likeCount2">0</span>
                    </button>
                </div>
            </div>
        </div><!-- end row -->
        <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="message-box">
                    <h2> Visi & Misi</h2>
                    <ol>
                        <li>Menjadi pusat literasi digital yang inklusif, edukatif, dan berkelanjutan bagi seluruh masyarakat Indonesia.                        </li>
                        <li>Menyediakan akses literasi yang setara dan mudah dijangkau.</li>
                        <li>Mendukung pembelajaran seumur hidup melalui koleksi yang relevan dan berkualitas.</li>
                        <li>Menumbuhkan budaya membaca di era digital.</li>
                        <li>Berinovasi dalam layanan perpustakaan berbasis teknologi</li>
                    </ol>

                    <button onclick="handleLike('section3')" class="btn btn-outline-primary" id="likeBtn3">
                        <i class="fa fa-heart"></i> Like
                        <span id="likeCount3">0</span>
                    </button>
                </div>
            </div><!-- end col -->
            
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="post-media wow fadeIn">
                    <img src="{{ asset('library-temp') }}/images/about_03.jpg" alt="" class="img-fluid tentang-img">
                </div><!-- end media -->
            </div><!-- end col -->
        </div>
    </div><!-- end container -->
</div><!-- end section -->

<script>
function getDeviceId() {
    let deviceId = localStorage.getItem('deviceId');
    if (!deviceId) {
        deviceId = 'device_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('deviceId', deviceId);
    }
    return deviceId;
}

function handleLike(sectionId) {
    const deviceId = getDeviceId();
    const hasLiked = localStorage.getItem(`liked_${sectionId}_${deviceId}`);
    
    if (hasLiked) {
        alert('Anda sudah memberikan like untuk bagian ini');
        return;
    }

    // Kirim request ke server
    fetch(`/like/${sectionId}`, {
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': '{{ csrf_token() }}',
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Update tampilan
        const countElement = document.getElementById(`likeCount${sectionId.slice(-1)}`);
        if (countElement) {
            countElement.textContent = data.likes;
        }
        
        // Simpan status like untuk device ini
        localStorage.setItem(`liked_${sectionId}_${deviceId}`, 'true');
        
        // Update tampilan button
        const btn = document.getElementById(`likeBtn${sectionId.slice(-1)}`);
        btn.classList.add('liked');
        btn.disabled = true;
    });
}

// Load saved likes and button states when page loads
document.addEventListener('DOMContentLoaded', function() {
    const deviceId = getDeviceId();
    
    // Ambil jumlah like dari server
    fetch('/likes')
        .then(response => response.json())
        .then(likes => {
            Object.keys(likes).forEach(sectionId => {
                const countElement = document.getElementById(`likeCount${sectionId.slice(-1)}`);
                if (countElement) {
                    countElement.textContent = likes[sectionId];
                }
                // Load status like untuk device ini
                const hasLiked = localStorage.getItem(`liked_${sectionId}_${deviceId}`);
                const btn = document.getElementById(`likeBtn${sectionId.slice(-1)}`);
                if (btn && hasLiked) {
                    btn.classList.add('liked');
                    btn.disabled = true;
                }
            });
        });
});
</script>

<style>
.btn-outline-primary {
    border-radius: 20px;
    padding: 8px 20px;
    margin-top: 10px;
    transition: all 0.3s ease;
}
.btn-outline-primary i {
    margin-right: 5px;
}
.btn-outline-primary.liked {
    background-color: #ff4757;
    color: white;
    border-color: #ff4757;
}
.btn-outline-primary:disabled {
    opacity: 0.8;
    cursor: not-allowed;
}
</style>
