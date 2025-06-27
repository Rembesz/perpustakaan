<?php
$host = 'localhost';
$dbname = 'perpustakaan';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Koneksi database berhasil!";
} catch(PDOException $e) {
    echo "Koneksi database gagal: " . $e->getMessage();
}
?> 