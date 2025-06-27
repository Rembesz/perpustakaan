<h1 align="center">📚 Sistem Informasi Perpustakaan</h1>

<p align="center">
  <i>Aplikasi web untuk manajemen perpustakaan berbasis Laravel dapat digunakan untuk online dan offline</i><br><br>
  <img src="https://img.shields.io/badge/Status-Development-yellow" />
  <img src="https://img.shields.io/badge/Laravel-10.x-red" />
  <img src="https://img.shields.io/badge/Made%20with-Love-ff69b4" />
</p>

---

## ✨ Fitur Utama

✅ Registrasi dan login user  
✅ Manajemen data buku (tambah, edit, hapus)  
✅ Pencarian buku  
✅ Peminjaman dan pengembalian buku  
✅ Non login user dapat membaca flipbook
✅ Dashboard statistik peminjaman dan pengunjung

---

## 🧰 Teknologi yang Digunakan

| Teknologi   | Keterangan                      |
|-------------|----------------------------------|
| Laravel     | Framework utama (PHP)           |
| MySQL       | Database relasional             |
| HTML/CSS    | Tampilan antarmuka pengguna     |
| JavaScript  | Interaktivitas frontend         |
| Blade       | Templating engine Laravel       |

---

## 🚀 Cara Instalasi

```bash
# 1. Clone repository
git clone https://github.com/Rembesz/perpustakaan.git

# 2. Masuk ke folder project
cd perpustakaan

# 3. Install dependensi Laravel
composer install

# 4. Salin .env dan generate key
cp .env.example .env
php artisan key:generate

# 5. Atur konfigurasi database di file .env

# 6. Migrasi database
php artisan migrate

# 7. Jalankan server lokal
php artisan serve
