# Plan Landing Page SLB Surya Wiyata (Astro + TypeScript)

Tanggal: 2026-09-30
Referensi desain: `screencapture-overlake-org-2026-09-30-01_17_22.png` (overlake.org). Yang ditiru adalah layout dan ritmenya (hero foto besar dengan judul serif, eyebrow kecil, kartu foto berselang-seling, section gelap sebagai jeda, CTA besar di akhir). Warna hijau di referensi diganti biru, kuning, hitam, dan putih dari logo sekolah.

---

## 0. Keputusan yang sudah diambil

| Topik | Keputusan |
|---|---|
| Framework | Astro + TypeScript, situs statis, deploy ke Vercel |
| Izin foto siswa | Sudah ada izin dari sekolah |
| Update konten | Oleh developer (edit file lalu deploy ulang). **Tanpa CMS, tanpa halaman admin** |
| Foto | Semua foto dari ZIP dan PDF masuk ke website |
| Warna | Biru, kuning, hitam, putih sesuai logo |

---

## 1. Bahan (sudah diekstrak)

Semua hasil ekstrak ada di folder `bahan/`. File ZIP, PDF, dan logo asli tetap utuh di tempatnya.

| Bahan | Isi | Lokasi |
|---|---|---|
| Logo | JPEG **200×200 px**, bunga biru dengan lingkaran kuning, salib dan buku di tengah, tulisan "Sekolah Luar Biasa Bagian B-C · Surya Wiyata" | `bahan/logo/logo.jpeg` |
| ZIP 1 (01.06.10) | 3 foto (outing di taman, siswa berkaos kuning-biru) + 1 video 8,7 detik (832×464) | `bahan/zip-1/` |
| ZIP 2 (01.06.43) | 2 foto (kumpul bersama guru/orang tua) + 1 video 7,4 detik (848×478). **Nama file videonya sama dengan video di ZIP 1**, jadi tiap ZIP diekstrak ke folder sendiri | `bahan/zip-2/` |
| ZIP 3 (01.07.14) | 8 foto upacara bendera (portrait, dari HP) | `bahan/zip-3/` |
| PDF "Profile SLB Surya Wiyata" | 31 halaman A4 buatan Canva | teks: `bahan/profil.txt`, gambar per halaman: `bahan/pdf-halaman/`, foto asli di dalam PDF: `bahan/pdf-gambar/` (121 file termasuk mask, ±57 foto yang terpakai) |

### Isi PDF per halaman

| Hal. | Isi | Dipakai di section |
|---|---|---|
| 1 (cover) | Foto gedung, 2 alamat unit, email, slogan **"Bring Hope for a Brighter Future"** | Hero, Kontak |
| 2 | "Mengenal SLB Surya Wiyata": berdiri **1972**, di bawah Yayasan Sosial GKI Kwitang 28 Karya Kasih; melayani tunagrahita, tunarungu (sejak 1984), autisme, down syndrome; 2 unit (Jatiwaringin-Bekasi dan Cipinang Melayu-Jaktim). Foto siswa berseragam hijau | Tentang |
| 3 | Visi + 5 misi | Visi & Misi |
| 4–5 | Legalitas SLB BC (NPSN 20258321, Akreditasi B) dan SLB C (NPSN 20218361, Akreditasi B): domisili, perizinan, akta yayasan | Dua Unit Sekolah (legalitas bisa dibuka-tutup) |
| 6 | Guru & tenaga kependidikan TA 2026/2027: kepala sekolah, wakil, 10 guru, 3 pendamping vokasi, operator, TU, staf kebersihan | Guru & Tendik |
| 7 | Rombongan belajar per kelas SDLB/SMPLB/SMALB + kelas mandiri, total 43 peserta didik | Angka-angka |
| 8 | Kebutuhan layanan pendidikan: kompetensi guru, sarana-prasarana, tata kelola | Mari Berkolaborasi |
| 9 | Hasil Karya & Prestasi (foto) | Karya & Prestasi |
| 10–14 | Kegiatan vokasi: Seni Musik, Tata Rias, Keterampilan Souvenir, TIK, Budidaya Ikan Nila (dengan hari, jam, pengampu) | Program Vokasi |
| 15–20 | Sarana penunjang: green house, kolam ikan nila, taman bermain, taman, toilet, ruang tunggu orang tua, dapur vokasi, asrama guru & ruang pembinaan diri, perpustakaan, area kelas, ruang tamu | Sarana |
| 21–23 | Kolase kegiatan (Hari Disabilitas Internasional, pentas budaya, perkemahan, dll.) | Kegiatan |
| 24 | Penutup: slogan + media sosial: YouTube **@slbsuryawiyata5889**, Instagram **slb_swbc**, TikTok **slb.suryawiyata** | Footer, CTA |
| 25–31 | Data peserta didik: foto wajah + **nama lengkap + kelas** setiap siswa | **Tidak ditampilkan per individu**, lihat bagian 9 |

---

## 2. Tujuan & pengunjung

**Pengunjung utama:**
1. Orang tua anak berkebutuhan khusus yang mencari sekolah: perlu tahu layanan apa saja, lokasinya, fasilitasnya, dan cara menghubungi.
2. Donatur, gereja/yayasan, dan mitra DU/DI (Dunia Usaha/Dunia Industri): perlu melihat kegiatan, kebutuhan sekolah, dan legalitasnya.
3. Dinas/pengawas: legalitas, NPSN, akreditasi.

**Tujuan halaman:** pengunjung paham siapa SLB Surya Wiyata, percaya (legalitas, sejarah sejak 1972, kegiatan nyata), lalu **menghubungi sekolah** atau berkunjung.

**Target teknis:**
- Lighthouse mobile di atas 95 untuk Performance, Accessibility, Best Practices, dan SEO.
- Bisa dibuka lancar di HP Android kelas bawah dengan sinyal 4G yang lemah.

---

## 3. Tech stack

| Kebutuhan | Pilihan | Alasan |
|---|---|---|
| Framework | **Astro 5** | Hasilnya HTML statis dan **0 KB JavaScript secara default** |
| Bahasa | **TypeScript** (preset `strict`) | Props komponen dan data konten bertipe |
| Output | `output: "static"` (default) | Vercel menyajikan folder `dist/` dari CDN, **tanpa adapter, tanpa server** |
| Styling | **Tailwind CSS v4** (`@tailwindcss/vite`) | Tidak ada runtime; CSS yang tidak terpakai dibuang |
| Font | `@fontsource-variable/fraunces` (judul, serif seperti referensi) + `@fontsource-variable/plus-jakarta-sans` (isi) | Self-hosted, tidak memanggil Google Fonts saat runtime |
| Gambar | **`astro:assets`** (`<Picture />`) | Saat build, foto di-resize ke beberapa ukuran, diubah ke AVIF/WebP, dan diberi width/height (tanpa layout shift) |
| Video | `<video>` native, file mp4 yang sudah dikompres ulang (ffmpeg), `preload="none"` + poster | Tidak diunduh sebelum pengunjung menekan play |
| Interaksi | `<script>` TypeScript biasa di komponen `.astro` | Tanpa React/Vue |
| Carousel | CSS `scroll-snap` + tombol panah (TS kecil) | Tanpa library slider |
| Lightbox galeri | `<dialog>` native | Tanpa library |
| Ikon | `astro-icon` (Iconify, di-inline saat build) | Ikon jadi SVG statis |
| SEO | `@astrojs/sitemap` + meta manual + JSON-LD | |
| Kualitas | `astro check` (tipe) + Prettier (`prettier-plugin-astro`) | |

---

## 4. Warna & tipografi

Warna diambil dari logo dan dari PDF profil (yang juga memakai biru tua dan kuning):

| Token | Hex | Asal | Pemakaian |
|---|---|---|---|
| `navy-900` | `#0A3A60` | turunan PDF | Section paling gelap: footer atas, testimoni |
| `navy-700` | `#0F5286` | **latar PDF** | Pengganti hijau tua referensi: hero overlay, section gelap, judul kartu |
| `blue-500` | `#0780F7` | **biru logo** | Aksen, ikon, garis dekoratif, teks besar. **Bukan untuk teks kecil di atas putih** (kontras 3,9:1) |
| `blue-600` | `#0668C9` | turunan logo | Link dan teks biru kecil (kontras di atas putih ±5:1) |
| `blue-50` | `#EAF3FE` | turunan logo | Latar section angka (pengganti hijau muda referensi) |
| `yellow-400` | `#FFE44A` | **kuning PDF** | Tombol CTA utama, angka statistik, highlight judul |
| `yellow-300` | `#F8FA17` | kuning logo | Hanya aksen kecil (terlalu terang untuk bidang luas) |
| `yellow-50` | `#FFFBE0` | turunan | Latar badge/jadwal |
| `ink` | `#111418` | hitam | Teks judul, footer bawah |
| `muted` | `#4A5563` | | Teks isi |
| `cream` | `#FAF8F3` | | Latar halaman (referensi memakai off-white hangat) |
| `white` | `#FFFFFF` | | Kartu |

**Aturan warna:**
- Teks di atas kuning selalu `ink`, tidak pernah putih.
- Teks di atas `navy-700`/`navy-900` berwarna putih atau kuning.
- Semua teks minimal WCAG AA (4,5:1). Ini ditekankan karena sebagian pengunjung punya gangguan penglihatan atau keterbatasan kognitif.

**Tipografi:**
- Judul: Fraunces, besar dan tebal (`h1` 64–72px desktop / 40px mobile, `h2` 40–48px / 30px).
- Eyebrow di atas judul: Plus Jakarta Sans 13px, uppercase, `letter-spacing`, warna `blue-600`.
- Isi: 17–18px dengan `line-height` 1.65, jadi lebih besar dari biasanya supaya mudah dibaca.

**Motif:** bentuk kelopak bunga dari tepi logo dipakai sebagai pembatas section (menggantikan siluet pohon/pagar di referensi) dan sebagai latar dekoratif angka-angka, dalam bentuk SVG inline.

---

## 5. Logo

Logo aslinya hanya **200×200 px JPEG**, jadi akan buram di layar retina dan tidak transparan.

Rencana:
1. **Gambar ulang logo sebagai SVG** (`src/assets/logo/logo.svg`): bunga biru `#0780F7`, lingkaran kuning, salib dan buku putih-hitam, teks melingkar dengan `<textPath>`. Hasilnya tajam di ukuran berapa pun dan ukuran filenya kecil.
2. Cek SVG berdampingan dengan logo asli dalam keadaan di-zoom, sampai bentuk dan warnanya sama.
3. Dari SVG itu dibuat favicon (`favicon.svg` + `apple-touch-icon.png` 180px) dan dipakai di OG image.
4. Kalau sekolah punya file logo resolusi tinggi atau vektor, file itu yang dipakai.

---

## 6. Peta section (dengan konten asli)

Halaman utama `/`, urut dari atas ke bawah:

| # | Section | Meniru bagian referensi | Konten | Foto |
|---|---|---|---|---|
| 1 | **Top bar** | Strip tipis paling atas | Email unit BC & C, ikon YouTube/Instagram/TikTok | – |
| 2 | **Navbar** (sticky) | Logo kiri, menu kanan, tombol kuning | Logo SVG + "SLB Surya Wiyata"; menu: Tentang, Program, Sarana, Kegiatan, Kontak; tombol kuning **"Hubungi Kami"** | – |
| 3 | **Hero** | Foto besar + judul serif besar | Eyebrow "Sekolah Luar Biasa · Sejak 1972"; judul **"Bring Hope for a Brighter Future"**; subjudul: "Pendidikan yang adaptif dan penuh kasih untuk anak tunarungu, tunagrahita, autisme, dan down syndrome, di Bekasi dan Jakarta Timur."; tombol "Hubungi Kami" + "Kenali Kami" | Foto grup siswa berseragam hijau (hal. 2) atau foto upacara (ZIP 3), dengan overlay `navy-900` gradasi |
| 4 | **Tentang** | "We're a school where curiosity thrives" + kolase 3 foto + 2 kolom teks | Teks "Mengenal SLB Surya Wiyata" (hal. 2), dirapikan jadi 2 paragraf; link "Visi & Misi" | Kolase: gedung (cover), siswa, kegiatan |
| 5 | **Angka-angka** | Blok "at a glance" 575 / 7:1 / $1.8M / 75 + maskot burung hantu | **1972** tahun berdiri · **43** peserta didik · **2** unit sekolah · **3** jenjang (SDLB, SMPLB, SMALB) · **5** program vokasi. Maskot diganti logo SVG besar | – |
| 6 | **Visi & Misi** | Section teks besar | Visi sebagai kutipan besar (serif, latar kuning seperti PDF) + 5 misi dengan ikon centang | – |
| 7 | **Layanan Kekhususan** | *(tambahan)* | 4 kartu: Tunarungu (B), Tunagrahita (C), Autisme, Down Syndrome, masing-masing dengan penjelasan 1–2 kalimat | Ikon |
| 8 | **Program Vokasi** | "Where dynamic, authentic experiences..." kartu foto berselang-seling kiri-kanan | 5 kartu: **Seni Musik** (angklung & bernyanyi, Senin 08.00–11.00, Bpk. Indra Simanjuntak) · **Tata Rias** (face painting, dasar make-up, SMPLB–SMALB, Rabu 11.00–13.00, Sdr. Septhia) · **Keterampilan Souvenir** (Rabu 11.00–13.00, Ibu Cecilia) · **TIK** (mengetik 10 jari, desain Canva untuk tunarungu, nalar & motorik untuk tunagrahita, Rabu 08.00–12.00, Bpk. Tjen Sufiatno) · **Budidaya Ikan Nila** (sejak September 2024, semua jenjang bergilir). Jadwal ditampilkan sebagai badge kuning | Foto hal. 10–14 |
| 9 | **Karya & Prestasi** | Strip foto | Foto hasil karya dan prestasi siswa, dengan keterangan singkat | Foto hal. 9 |
| 10 | **Sarana Penunjang** | "Students find room to grow" + tab | Tab/filter: **Luar ruang** (green house, kolam ikan nila, taman bermain, taman) · **Belajar** (area kelas, perpustakaan, dapur vokasi) · **Pendukung** (ruang tunggu orang tua, ruang tamu, asrama guru & ruang pembinaan diri, toilet murid). Setiap foto diberi keterangan | Foto hal. 15–20 |
| 11 | **Kegiatan** | Carousel + video | Carousel foto kegiatan: upacara bendera, outing, kumpul bersama, Hari Disabilitas Internasional, pentas budaya, perkemahan. Plus 2 video pendek (play saat diklik) | ZIP 1–3 + hal. 21–23 |
| 12 | **Guru & Tendik** | *(tambahan, gaya kartu referensi)* | Kepala Sekolah **Lucy Veronica Kansil, S.Th**, Wakil **Yusniar, S.Psi., S.Pd., Gr** ditonjolkan; 10 guru dan 3 pendamping vokasi dalam grid nama + gelar (tanpa foto, karena tidak ada di PDF) | Inisial / ikon |
| 13 | **Dua Unit Sekolah** | "Chart a path..." 3 kartu → 2 kartu | **SLB BC Surya Wiyata** (Jln. Cempaka Bulak No. 27, Jaticempaka, Pondok Gede, Kota Bekasi · NPSN 20258321 · Akreditasi B · slbsuryawiyata.bc@gmail.com) dan **SLB C Surya Wiyata** (Jln. Harapan Indah XX No. 5, Cipinang Melayu, Makasar, Jakarta Timur · NPSN 20218361 · Akreditasi B · slbsuryawiyata.c@gmail.com). Tombol "Buka di Google Maps" (link biasa, bukan embed) + "Kirim Email". Legalitas lengkap di `<details>` "Lihat legalitas" | Foto gedung |
| 14 | **Mari Berkolaborasi** | Section gelap sebagai jeda (pengganti testimoni) | Tiga kebutuhan dari hal. 8: kompetensi guru & tendik, sarana-prasarana, tata kelola; ditambah ajakan kerja sama DU/DI (misi ke-5) dan dukungan donatur. Latar `navy-700`, CTA kuning | Foto kegiatan redup |
| 15 | **Galeri** | Strip foto horizontal | 8–12 foto pilihan + tombol **"Lihat semua foto"** menuju `/galeri` | Campuran |
| 16 | **CTA penutup** | "Get started here and watch your child flourish" di atas foto besar | "Bring Hope for a Brighter Future", ajakan berkunjung atau menghubungi sekolah; tombol Email BC / Email C / Instagram | Foto grup besar |
| 17 | **Footer** | Footer 4 kolom | Logo + yayasan; alamat 2 unit; menu; media sosial; "© 2026 SLB Surya Wiyata · Yayasan Sosial Karya Kasih" | – |

**Halaman lain:**
- `/galeri`: **semua foto** dari ZIP dan PDF (±70 foto), dikelompokkan (Kegiatan, Vokasi, Sarana, Karya & Prestasi), lazy-load, dan dengan lightbox.
- `404`: halaman sederhana dengan logo dan tombol kembali.

---

## 7. Foto & video

**Inventaris dan pemetaan:**
- Foto dari PDF (`bahan/pdf-gambar/`) dicocokkan ke halaman asalnya lewat `pdfimages -list`, lalu diberi nama deskriptif, misalnya `vokasi-tata-rias-1.jpg`, `sarana-perpustakaan.jpg`, `kegiatan-hdi-2024.jpg`.
- Foto dari ZIP diberi nama `kegiatan-upacara-1..8.jpg`, `kegiatan-outing-1..3.jpg`, `kegiatan-kumpul-1..2.jpg`.
- Mask PNG (smask) dan duplikat dibuang.
- Semua foto pilihan disalin ke `src/assets/images/<kategori>/`.

**Pengolahan:**
- `astro:assets` membuat ukuran 400/800/1200/1600px dalam AVIF + WebP.
- Foto ZIP berorientasi portrait (dari HP), jadi dipakai di slot portrait atau di-crop dengan `object-position` yang dicek satu per satu supaya wajah tidak terpotong.
- Kolase Canva di hal. 21–23: dipakai foto-foto aslinya (dari `pdf-gambar`), bukan screenshot halamannya.
- Video: di-encode ulang dengan ffmpeg ke H.264 ±720p, tanpa audio kalau memang tidak ada suara penting, target < 800 KB per video; poster JPG dari frame pertama.
- Setiap foto diberi **alt text** Bahasa Indonesia yang menjelaskan isinya.

---

## 8. Struktur folder

```
pace project/
├─ bahan/                  # hasil ekstrak (tidak di-commit)
├─ *.zip, *.pdf, *.png     # bahan asli (tidak di-commit)
├─ src/
│  ├─ assets/
│  │  ├─ images/{hero,tentang,vokasi,sarana,kegiatan,prestasi,unit}/
│  │  ├─ videos/           # (atau public/videos/, karena video tidak diproses Astro)
│  │  └─ logo/logo.svg
│  ├─ components/
│  │  ├─ layout/   TopBar, Navbar, Footer
│  │  ├─ sections/ Hero, About, Stats, VisionMission, Services, Vocational,
│  │  │            Achievements, Facilities, Activities, Staff, Campuses,
│  │  │            Collaborate, GalleryPreview, FinalCta
│  │  └─ ui/       Button, SectionHeading, Container, PetalDivider,
│  │               Carousel, Lightbox, Tabs, Badge
│  ├─ content/
│  │  └─ site.ts           # SEMUA teks & data dari PDF, bertipe
│  ├─ layouts/BaseLayout.astro
│  ├─ scripts/reveal.ts
│  ├─ styles/global.css    # @import "tailwindcss" + @theme
│  └─ pages/ index.astro, galeri.astro, 404.astro
├─ public/ favicon.svg, apple-touch-icon.png, og-image.jpg, robots.txt, videos/
├─ astro.config.mjs
├─ package.json            # "name": "slb-surya-wiyata" (folder berspasi tidak dipakai sebagai nama)
├─ tsconfig.json           # extends "astro/tsconfigs/strict"
└─ PLAN.md
```

Semua konten ada di `src/content/site.ts`, dengan tipe seperti `VocationalProgram`, `Facility`, `Campus`, `StaffMember`, dan `Stat`. Untuk mengubah teks cukup edit satu file ini lalu deploy ulang.

---

## 9. Privasi data peserta didik

Hal. 25–31 PDF berisi foto wajah, **nama lengkap, dan kelas** setiap siswa. Kode kelas (B/C) menunjukkan jenis disabilitas anak, dan halaman website publik akan diindeks Google.

**Rekomendasi:** data per siswa itu **tidak ditampilkan**. Yang dipakai hanya angka jumlah peserta didik dan foto kegiatan (sudah ada izin). Kalau sekolah tetap ingin menampilkannya, pakai nama depan saja tanpa kode kelas.

---

## 10. Data yang perlu dikonfirmasi ke sekolah

1. **Jumlah peserta didik:** rincian per kelas berjumlah 27 SDLB + 4 SMPLB + 8 SMALB = **39**, ditambah 5 kelas mandiri = **44**, tetapi di PDF tertulis **43**. Mana yang benar?
2. **Nomor telepon/WhatsApp:** tidak ada di PDF. Sebaiknya ada, karena orang tua lebih sering menghubungi lewat WA daripada email.
3. **Psikolog:** kolomnya kosong di hal. 6. Dikosongkan, atau ditulis?
4. **Nama pengampu souvenir:** "Cecilia Felicia" (hal. 6) atau "Ibu Cecil Cecilia" (hal. 12)?
5. Salah ketik di visi ("yanag" → "yang"): akan dibetulkan di website.
6. Logo resolusi tinggi atau vektor: ada? (Kalau tidak, logo digambar ulang sebagai SVG.)
7. Pendaftaran siswa baru: apakah ada info/jadwal PPDB yang perlu ditampilkan?
8. Domain: sudah punya (misalnya `.sch.id`), atau pakai `*.vercel.app` dulu?

Sebelum dikonfirmasi, website memakai data PDF apa adanya (43 peserta didik), tanpa nomor WA.

---

## 11. Fase eksekusi

| Fase | Pekerjaan | Estimasi |
|---|---|---|
| 1 | ~~Ekstrak ZIP, baca PDF, sampling warna~~ ✅ selesai | – |

> **Status 2026-09-30:** fase 2–10 selesai (Astro 7.3 + Node 24 LTS via mise, Tailwind 4.3, TypeScript 6). Lighthouse mobile beranda 95/100/100/100, galeri 99/100/100/100; JS ke browser 1,6 KB gzip; beranda saat dibuka 414 KB. Logo memakai versi PNG transparan 360px dari dalam PDF (bukan digambar ulang). Font mengikuti referensi: Besley (judul) + Inter (isi). Fase 11: push ke github.com/rhmatzeka/SLBSurya, deploy Vercel menyusul.
| 2 | Inventaris & penamaan foto, pilih foto per section, encode ulang video | 1–2 jam |
| 3 | Setup Astro + TS strict + Tailwind v4 + sitemap + font + token warna, git init | 30 menit |
| 4 | Logo SVG + favicon + OG image | 1 jam |
| 5 | Komponen dasar (Button, SectionHeading, PetalDivider, Carousel, Tabs, Lightbox, reveal) | 1–2 jam |
| 6 | `site.ts` berisi semua konten PDF | 1 jam |
| 7 | Section 1–17 (mobile-first, lalu desktop) | 4–6 jam |
| 8 | Halaman `/galeri` + 404 | 1 jam |
| 9 | SEO (meta, OG, JSON-LD `School` ×2, sitemap, robots) | 30 menit |
| 10 | QA (lihat bagian 12) + perbaikan | 1–2 jam |
| 11 | Push GitHub + deploy Vercel | 15 menit |

### Detail interaksi (semua vanilla TS)
- Navbar transparan di atas hero, berubah putih solid dengan bayangan setelah di-scroll; menu hamburger fullscreen di mobile.
- Smooth scroll ke anchor dengan `scroll-margin-top` untuk navbar sticky.
- Fade-in saat scroll, **dimatikan** kalau pengguna mengaktifkan `prefers-reduced-motion`.
- Tab sarana dengan keyboard (arrow keys) dan ARIA `tablist`.
- Lightbox dengan tombol kiri/kanan, `Esc` untuk menutup, dan swipe di HP.

### Deploy
1. Repo GitHub (nama misalnya `slb-surya-wiyata`). Commit tanpa Co-Authored-By atau atribusi AI.
2. Vercel → Import → preset Astro terdeteksi otomatis (`astro build`, output `dist`) → Deploy. Tidak perlu adapter.
3. `.gitignore`: `node_modules`, `dist`, `.astro`, `bahan/`, `*.zip`, `*.pdf`, `screencapture-*.png`.

---

## 12. Kriteria selesai

- [ ] Semua konten PDF hal. 1–24 tampil (kecuali data per siswa, sesuai bagian 9)
- [ ] Semua foto ZIP dan PDF ada di website (pilihan di halaman utama, semuanya di `/galeri`)
- [ ] Logo tajam di retina; favicon dan preview link WA/IG muncul dengan benar
- [ ] Warna hanya dari palet bagian 4, dan semua teks lolos kontras AA
- [ ] Tampilan dicek di **mobile 390×844** dan **desktop 1440px**, dibandingkan dengan referensi overlake
- [ ] Dicek juga di Safari iPhone dan Chrome Android
- [ ] Lighthouse mobile ≥ 95 untuk keempat kategori
- [ ] JS ke browser < 15 KB gzip; halaman utama pertama dibuka < 1,2 MB; LCP < 2 detik
- [ ] Semua gambar punya alt; bisa dinavigasi dengan keyboard; fokus terlihat
- [ ] `astro check` 0 error, `npm run build` bersih
- [ ] Live di Vercel dan link sudah dibuka dari HP
