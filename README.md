# Sirah Nabawiyah — Jejak Risalah

Web app statis berbahasa Indonesia untuk membaca perjalanan hidup Rasulullah ﷺ secara kronologis.

## Isi proyek
- `index.html` — struktur halaman
- `assets/css/style.css` — desain responsif
- `assets/js/data.js` — data timeline dan rujukan awal
- `assets/js/app.js` — filter periode dan modal detail

## Menjalankan lokal
Buka `index.html` di browser. Koneksi internet diperlukan untuk memuat Google Fonts; aplikasi tetap berfungsi jika font eksternal gagal dimuat.

## Deploy ke Cloudflare Pages melalui GitHub
1. Buat repository baru di GitHub, misalnya `sirah-nabawiyah`.
2. Unggah seluruh isi folder proyek ini ke root repository (pastikan `index.html` berada di root).
3. Di Cloudflare Dashboard buka **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
4. Pilih repository GitHub yang baru dibuat.
5. Pengaturan:
   - Production branch: `main`
   - Framework preset: `None`
   - Build command: `exit 0` (atau kosong jika dashboard mengizinkan)
   - Build output directory: `/` atau `.` sesuai pilihan dashboard untuk proyek statis.
6. Klik **Save and Deploy**.

Setelah integrasi GitHub aktif, perubahan yang di-push ke branch produksi akan memicu deployment otomatis.

## Catatan editorial dan validitas
Konten `data.js` adalah kerangka awal, bukan edisi akademik final. Tahun sejumlah peristiwa merupakan perkiraan. Rujukan disebut sebagai titik awal penelusuran, bukan klaim bahwa setiap detail narasi telah dinilai sahih. Sebelum dipublikasikan sebagai bahan ajar, lakukan verifikasi riwayat secara individual dengan edisi kitab, bab, nomor hadis, ayat, dan/atau halaman yang dapat diperiksa. Bedakan:
- teks Al-Qur'an,
- hadis beserta kitab dan nomor/kitab-bab,
- riwayat sirah/historiografi,
- pendapat atau rekonstruksi sejarawan.

Jangan menambahkan kutipan hadis atau ayat tanpa teks dan rujukan yang telah diperiksa.
