# Portofolio — Muhammad Haikal Abidin

Struktur proyek ini dipecah menjadi 3 file agar mudah diedit di Visual Studio Code:

```
portfolio-mha/
├── index.html      → struktur & konten halaman
├── css/
│   └── style.css   → semua styling/tampilan
└── js/
    └── script.js   → interaktivitas (menu, animasi, form)
```

## Cara membuka di VS Code

1. Ekstrak (unzip) folder `portfolio-mha`.
2. Buka VS Code → **File > Open Folder…** → pilih folder `portfolio-mha`.
3. Untuk melihat hasilnya secara langsung sambil mengedit, install extension **Live Server** (oleh Ritwick Dey) dari tab Extensions di VS Code.
4. Klik kanan pada `index.html` → **Open with Live Server**. Browser akan terbuka dan otomatis refresh setiap kali Anda menyimpan perubahan.

## Bagian yang paling sering ingin diubah

- **Nama, peran, tagline** → cari `<h1>Muhammad Haikal` dan `const roles = [...]` di `js/script.js`.
- **Email, telepon, lokasi** → cari bagian `<!-- CONTACT -->` di `index.html`.
- **Pengalaman kerja / pendidikan** → cari `<!-- RESUME -->` di `index.html`.
- **Proyek portofolio** → cari `<!-- PORTFOLIO -->` di `index.html`, setiap proyek ada di dalam `.proj-card`.
- **Warna** → semua warna diatur lewat variabel CSS di bagian paling atas `css/style.css` (`:root { ... }`), tinggal ubah nilai hex-nya untuk mengganti seluruh tema warna sekaligus.

Selamat mengedit!
