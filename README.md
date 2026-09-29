# SLB Surya Wiyata

Landing page resmi SLB Surya Wiyata — *Bring Hope for a Brighter Future*.

Dibangun dengan [Astro](https://astro.build) + TypeScript + Tailwind CSS. Situs sepenuhnya statis (tanpa server, tanpa CMS) dan siap di-deploy ke Vercel.

## Menjalankan

Butuh Node.js 22.12 atau lebih baru.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # cek tipe + build ke dist/
npm run preview  # lihat hasil build
```

## Mengubah konten

Semua teks, data sekolah, jadwal, guru, dan daftar foto ada di satu file: `src/content/site.ts`.

- **Foto**: taruh file `.jpg` di `src/assets/images/<kategori>/`, lalu tambahkan keterangannya di objek `captions` pada `site.ts`. Foto otomatis dikompres ke AVIF/WebP saat build dan muncul di halaman `/galeri`.
- **Video**: file `.mp4` di `public/videos/`, didaftarkan di `videos` pada `site.ts`.

## Deploy ke Vercel

Import repo ini di Vercel. Preset **Astro** terdeteksi otomatis (build `npm run build`, output `dist`). Tidak perlu adapter.

Setelah domain final diketahui, ganti `site` di `astro.config.mjs` dan URL sitemap di `public/robots.txt`.
