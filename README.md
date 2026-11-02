# Sirah Nabawiyah — Jejak Risalah

Website statis edukatif untuk mempelajari perjalanan hidup Rasulullah ﷺ melalui kronologi peristiwa, narasi ringkas, konteks, dan rujukan awal.

## Fitur
- Desain responsif dengan tema glassmorphism gelap, emerald, dan aksen emas.
- Timeline kronologis yang dapat difilter berdasarkan periode Makkah dan Madinah.
- Pencarian peristiwa berdasarkan judul, tahun, label, dan ringkasan.
- Panel detail berisi ringkasan, konteks, rujukan, dan catatan kehati-hatian.
- Tanpa database, framework, atau proses build; dapat di-host langsung di Cloudflare Pages.

## Struktur
```text
sirah-nabawiyah/
├── index.html
├── README.md
└── assets/
    ├── css/style.css
    └── js/
        ├── data.js
        └── app.js
```

## Menjalankan secara lokal
Buka `index.html` di browser. Untuk pengalaman paling konsisten, jalankan melalui ekstensi Live Server atau server lokal sederhana.

## Deploy ke Cloudflare Pages melalui GitHub
1. Buat repository GitHub, misalnya `sirah-nabawiyah`.
2. Unggah **isi folder proyek** ke root repository. Pastikan `index.html` berada di root, bukan di dalam folder bertingkat.
3. Di Cloudflare Dashboard pilih **Workers & Pages → Create application → Pages → Connect to Git**.
4. Pilih repository tersebut dan branch produksi `main`.
5. Framework preset: `None`.
6. Build command: kosongkan jika diizinkan (atau gunakan `exit 0`).
7. Build output directory: `.`
8. Klik **Save and Deploy**.

## Catatan editorial dan sumber
Kronologi ini adalah peta belajar, bukan edisi kritis akademik. Tahun Masehi sering merupakan perkiraan yang dikonversi dari kronologi Hijriah atau tradisi sirah. Tanggal harian, urutan beberapa kejadian, jumlah peserta, dan detail narasi dapat berbeda antar-sumber.

Rujukan awal yang disebut pada tiap peristiwa meliputi:
- Al-Qur'an, dengan nomor surah dan ayat untuk peristiwa yang disebut di dalamnya.
- Sahih al-Bukhari dan Sahih Muslim, dengan nama kitab/bab atau tema riwayat jika relevan.
- Ibn Ishaq melalui redaksi Ibn Hisham, *al-Sirah al-Nabawiyyah*.
- Ibn Sa'd, *al-Tabaqat al-Kabir*.
- Riwayat dalam Musnad Ahmad untuk beberapa tema yang tidak menjadi bagian dari Sahihain.

**Penting:** disebutnya sebuah kitab sebagai rujukan tidak berarti seluruh detail peristiwa otomatis sahih. Setiap riwayat perlu ditelusuri dan dinilai secara individual. Sebelum dipakai sebagai bahan ajar atau publikasi ilmiah, lakukan verifikasi lanjutan pada edisi kitab, nomor hadis, sanad, dan kajian sejarah yang relevan.
