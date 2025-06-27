<?php
// Script untuk memperbaiki nama file PDF yang mengandung spasi
// Jalankan script ini sekali untuk memperbaiki file yang sudah ada

require_once 'vendor/autoload.php';

use App\Model\Buku;

// Ambil semua buku yang memiliki filepdf
$bukus = Buku::whereNotNull('filepdf')->get();

foreach ($bukus as $buku) {
    $oldFilename = $buku->filepdf;
    $oldPath = public_path('pdf-book/' . $oldFilename);
    
    if (file_exists($oldPath)) {
        // Clean filename
        $cleanName = preg_replace('/[^a-zA-Z0-9._-]/', '_', $oldFilename);
        $newPath = public_path('pdf-book/' . $cleanName);
        
        if ($oldFilename !== $cleanName) {
            // Rename file
            if (rename($oldPath, $newPath)) {
                // Update database
                $buku->filepdf = $cleanName;
                $buku->save();
                echo "Fixed: {$oldFilename} -> {$cleanName}\n";
            } else {
                echo "Failed to rename: {$oldFilename}\n";
            }
        } else {
            echo "No change needed: {$oldFilename}\n";
        }
    } else {
        echo "File not found: {$oldPath}\n";
    }
}

echo "PDF filename fix completed!\n";
?> 