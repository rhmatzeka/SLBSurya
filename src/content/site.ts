import type { ImageMetadata } from 'astro';

/* ------------------------------------------------------------------ */
/* Foto                                                                */
/* ------------------------------------------------------------------ */

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/images/**/*.jpg', {
  eager: true,
});

export type PhotoKey = keyof typeof captions;

export interface Photo {
  key: string;
  src: ImageMetadata;
  alt: string;
  category: GalleryCategory;
}

export type GalleryCategory = 'kegiatan' | 'vokasi' | 'sarana' | 'prestasi' | 'tentang';

/** Keterangan setiap foto, dipakai sebagai alt text dan caption galeri. */
const captions = {
  'tentang/gedung-1': 'Gedung SLB Surya Wiyata dengan tanaman di teras depan',
  'tentang/gedung-2': 'Halaman depan dan papan nama SLB Surya Wiyata',
  'tentang/siswa-bersama': 'Siswa SLB Surya Wiyata bercelemek dan bertopi koki di kegiatan Junior Chef',

  'prestasi/prestasi-1': 'Siswi berkostum tari dan berlukis wajah bersama gurunya',
  'prestasi/prestasi-2': 'Siswa dan guru di podium juara 1 pada ajang O2SN dan FLS2N siswa penyandang disabilitas',
  'prestasi/prestasi-3': 'Siswa membawa map SLB B-C Surya Wiyata saat mengikuti lomba',
  'prestasi/prestasi-4': 'Siswa mengerjakan lomba di meja panitia',

  'vokasi/musik-1': 'Siswa bernyanyi bersama diiringi keyboard',
  'vokasi/musik-2': 'Kelas seni musik dengan siswa berdiri mengelilingi guru',
  'vokasi/rias-1': 'Siswi belajar tata rias bersama pendamping',
  'vokasi/rias-2': 'Siswa berpose dengan hasil face painting',
  'vokasi/rias-3': 'Siswa berseragam pramuka dengan lukisan wajah',
  'vokasi/rias-4': 'Dua siswi tersenyum setelah belajar tata rias',
  'vokasi/souvenir-1': 'Siswa menunjukkan gelang manik-manik buatannya',
  'vokasi/souvenir-2': 'Siswa duduk di lantai menyimak penjelasan di ruang keterampilan',
  'vokasi/tik-1': 'Siswa belajar komputer di laboratorium',
  'vokasi/tik-2': 'Dua siswa mengetik di laptop',
  'vokasi/tik-3': 'Siswa belajar mengetik sepuluh jari di laptop',
  'vokasi/tik-4': 'Guru mendampingi siswa belajar TIK',
  'vokasi/nila-1': 'Siswa mengamati kolam budidaya ikan nila',
  'vokasi/nila-2': 'Siswa memberi makan ikan nila di kolam',

  'sarana/green-house': 'Green house dengan tanaman sayur hidroponik',
  'sarana/kolam-1': 'Kolam bundar budidaya ikan nila di samping green house',
  'sarana/kolam-2': 'Air jernih di kolam budidaya ikan nila',
  'sarana/taman-bermain': 'Taman bermain anak dengan rumput sintetis dan pagar kayu',
  'sarana/taman-1': 'Taman sekolah dengan lampu hias di malam hari',
  'sarana/taman-2': 'Jalan setapak di taman sekolah pada malam hari',
  'sarana/toilet-1': 'Toilet murid dengan bilik dan urinoir',
  'sarana/toilet-2': 'Toilet duduk yang bersih untuk murid',
  'sarana/toilet-3': 'Kamar mandi murid dengan pintu biru',
  'sarana/ruang-tunggu': 'Ruang tunggu orang tua yang teduh dan terbuka',
  'sarana/dapur-1': 'Dapur vokasi dengan meja bar dan kursi',
  'sarana/dapur-2': 'Dapur vokasi lengkap dengan kompor dan penghisap asap',
  'sarana/asrama': 'Bangunan asrama guru dan ruang pembinaan diri',
  'sarana/perpustakaan': 'Perpustakaan dengan rak buku warna-warni',
  'sarana/area-kelas': 'Selasar area kelas berwarna cerah',
  'sarana/kelas-1': 'Ruang kelas dengan meja belajar siswa',
  'sarana/kelas-2': 'Ruang kelas dengan mural balon udara',
  'sarana/ruang-tamu-1': 'Ruang tamu sekolah dengan sofa',
  'sarana/ruang-tamu-2': 'Ruang tamu sekolah yang lapang dan terang',

  'kegiatan/pakaian-adat': 'Siswa mengenakan pakaian adat Nusantara',
  'kegiatan/pameran-karya': 'Siswa berpose di samping mading karya bertema stop bullying',
  'kegiatan/batik': 'Guru dan siswi berkebaya dan berkain batik membawa papan SLB C Surya Wiyata',
  'kegiatan/pentas-seni': 'Siswa tampil dalam pentas seni dengan kostum merah kuning',
  'kegiatan/kemah': 'Siswi tersenyum di dalam tenda saat kegiatan berkemah',
  'kegiatan/tata-boga': 'Siswa berseragam koki memegang kue buatannya',
  'kegiatan/lukis-wajah': 'Siswa dengan lukisan wajah harimau',
  'kegiatan/tari': 'Siswa menari dan bernyanyi di atas panggung',
  'kegiatan/wisata-rombongan': 'Rombongan siswa dan guru berfoto di depan gapura',
  'kegiatan/outing-1': 'Siswa berkaos kuning biru saat kegiatan di taman kota',
  'kegiatan/outing-2': 'Dua siswi ceria saat kegiatan di luar sekolah',
  'kegiatan/outing-3': 'Siswa dan guru duduk bersama saat piknik di taman',
  'kegiatan/kebersamaan-1': 'Guru dan keluarga besar sekolah berkumpul bersama',
  'kegiatan/kebersamaan-2': 'Keluarga besar SLB Surya Wiyata bernyanyi bersama',
  'kegiatan/upacara-1': 'Upacara bendera di lapangan sekolah',
  'kegiatan/upacara-2': 'Barisan siswa saat upacara bendera',
  'kegiatan/upacara-3': 'Guru mendampingi petugas upacara',
  'kegiatan/upacara-4': 'Siswa memberi hormat saat upacara bendera',
  'kegiatan/upacara-5': 'Siswa berbaris di lapangan upacara',
  'kegiatan/upacara-6': 'Tiang bendera dan lapangan upacara sekolah',
  'kegiatan/upacara-7': 'Guru dan siswa berdiri bersama saat upacara',
  'kegiatan/upacara-8': 'Petugas pengibar bendera bersiap di tiang bendera',
  'kegiatan/video-piknik': 'Cuplikan video piknik bersama di taman',
  'kegiatan/video-kebersamaan': 'Cuplikan video kebersamaan keluarga sekolah',
} as const;

export function photo(key: PhotoKey): Photo {
  const file = files[`../assets/images/${key}.jpg`];
  if (!file) throw new Error(`Foto tidak ditemukan: ${key}`);
  return {
    key,
    src: file.default,
    alt: captions[key],
    category: key.split('/')[0] as GalleryCategory,
  };
}

/** Semua foto untuk halaman galeri (poster video tidak ikut). */
export const allPhotos: Photo[] = (Object.keys(captions) as PhotoKey[])
  .filter((k) => !k.startsWith('kegiatan/video-'))
  .map(photo);

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: 'kegiatan', label: 'Kegiatan' },
  { id: 'vokasi', label: 'Vokasi' },
  { id: 'sarana', label: 'Sarana' },
  { id: 'prestasi', label: 'Karya & Prestasi' },
  { id: 'tentang', label: 'Sekolah' },
];

/* ------------------------------------------------------------------ */
/* Identitas & kontak                                                  */
/* ------------------------------------------------------------------ */

export const school = {
  name: 'SLB Surya Wiyata',
  slogan: 'Bring Hope for a Brighter Future',
  sloganId: 'Membawa harapan untuk masa depan yang lebih cerah.',
  founded: 1972,
  foundation: 'Yayasan Sosial GKI Kwitang 28 Karya Kasih',
  foundationShort: 'Yayasan Sosial Karya Kasih',
  description:
    'SLB Surya Wiyata melayani anak tunarungu, tunagrahita, autisme, dan down syndrome sejak 1972, di Pondok Gede, Kota Bekasi dan Cipinang Melayu, Jakarta Timur.',
};

export const socials = [
  { id: 'instagram', label: 'Instagram', handle: '@slb_swbc', href: 'https://www.instagram.com/slb_swbc/' },
  { id: 'youtube', label: 'YouTube', handle: '@slbsuryawiyata5889', href: 'https://www.youtube.com/@slbsuryawiyata5889' },
  { id: 'tiktok', label: 'TikTok', handle: '@slb.suryawiyata', href: 'https://www.tiktok.com/@slb.suryawiyata' },
] as const;

export interface Campus {
  id: string;
  name: string;
  short: string;
  area: string;
  address: string[];
  email: string;
  mapsQuery: string;
  npsn: string;
  accreditation: string;
  license: string;
  domicile: string;
}

const foundationLegal = {
  foundation: 'Yayasan Sosial GKI Kwitang 28 Karya Kasih',
  deed: 'No. 59 tanggal 30 Mei 1984, Notaris Koesbiono Sarmanhadi, SH.',
  ratification: 'Tambahan Berita Negara RI 8/10 - 2010 no. 81',
};

export const campuses: (Campus & typeof foundationLegal)[] = [
  {
    id: 'bc',
    name: 'SLB BC Surya Wiyata',
    short: 'Unit BC',
    area: 'Pondok Gede, Kota Bekasi',
    address: ['Jln. Cempaka Bulak No. 27, RT 001/RW 04', 'Kel. Jaticempaka, Kec. Pondok Gede', 'Kota Bekasi, Jawa Barat'],
    email: 'slbsuryawiyata.bc@gmail.com',
    mapsQuery: 'SLB Surya Wiyata, Jl. Cempaka Bulak No. 27, Jaticempaka, Pondok Gede, Bekasi',
    npsn: '20258321',
    accreditation: 'B',
    license: '421.9/596/Disdik/2003 tgl. 20 Januari 2003',
    domicile: 'Jln. Cempaka Bulak No. 27 Rt. 001 Rw. 04, Kel. Jaticempaka Kec. Pondok Gede, Kota Bekasi - Jawa Barat',
    ...foundationLegal,
  },
  {
    id: 'c',
    name: 'SLB C Surya Wiyata',
    short: 'Unit C',
    area: 'Cipinang Melayu, Jakarta Timur',
    address: ['Jln. Harapan Indah XX No. 5, RT 008/RW 12', 'Kel. Cipinang Melayu, Kec. Makasar', 'Jakarta Timur, DKI Jakarta'],
    email: 'slbsuryawiyata.c@gmail.com',
    mapsQuery: 'SLB C Surya Wiyata, Jl. Harapan Indah XX No. 5, Cipinang Melayu, Makasar, Jakarta Timur',
    npsn: '20218361',
    accreditation: 'B',
    license: '21340/i.6/31.75.00.000/-1.851.232/2015',
    domicile: 'Jln. Harapan Indah XX No. 5 Rt. 008 Rw. 12, Kel. Cipinang Melayu Kec. Makasar, Jakarta Timur',
    ...foundationLegal,
  },
];

export const mapsUrl = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

/** Halaman situs, urut sesuai alur jelajah. Dipakai menu, footer, kartu "Jelajahi", dan kartu "Selanjutnya". */
export interface PageInfo {
  href: string;
  label: string;
  title: string;
  description: string;
  image: PhotoKey;
}

export const pages: PageInfo[] = [
  {
    href: '/tentang',
    label: 'Tentang',
    title: 'Tentang Kami',
    description: 'Sejarah sejak 1972, layanan kekhususan, visi & misi, serta guru yang mendampingi.',
    image: 'tentang/gedung-2',
  },
  {
    href: '/program',
    label: 'Program',
    title: 'Program & Jenjang',
    description: 'Lima program vokasi, jenjang SDLB hingga SMALB, dan jadwal kegiatan setiap pekan.',
    image: 'vokasi/tik-2',
  },
  {
    href: '/sarana',
    label: 'Sarana',
    title: 'Sarana Sekolah',
    description: 'Green house, kolam ikan nila, kelas, perpustakaan, dan fasilitas pendukung lainnya.',
    image: 'sarana/green-house',
  },
  {
    href: '/kegiatan',
    label: 'Kegiatan',
    title: 'Kegiatan Siswa',
    description: 'Pentas seni, berkemah, upacara, piknik, dan prestasi siswa di berbagai ajang.',
    image: 'kegiatan/pentas-seni',
  },
  {
    href: '/galeri',
    label: 'Galeri',
    title: 'Galeri Foto',
    description: 'Semua foto kegiatan, program vokasi, sarana, serta karya dan prestasi siswa.',
    image: 'kegiatan/wisata-rombongan',
  },
  {
    href: '/kontak',
    label: 'Kontak',
    title: 'Kontak & Kerja Sama',
    description: 'Alamat dua unit sekolah, email, legalitas, dan cara bermitra dengan kami.',
    image: 'tentang/gedung-1',
  },
];

export const pageByHref = (href: string) => pages.find((p) => p.href === href)!;

export const nav = pages.map((p) => ({ label: p.label, href: p.href }));

/* ------------------------------------------------------------------ */
/* Tentang, visi & misi                                                */
/* ------------------------------------------------------------------ */

export const about = {
  history: [
    'SLB Surya Wiyata berdiri tahun 1972 di bawah naungan Yayasan Sosial GKI Kwitang 28 Karya Kasih. Pada awalnya sekolah ini melayani anak-anak tunagrahita dari Panti Asuhan Dorkas.',
    'Sejak 1984 kami juga melayani murid tunarungu, dan kini juga anak-anak dengan spektrum autisme dan down syndrome.',
  ],
  services: [
    { code: 'B', title: 'Tunarungu', text: 'Sejak 1984' },
    { code: 'C', title: 'Tunagrahita', text: 'Sejak 1972' },
    { code: 'ASD', title: 'Spektrum Autisme', text: '' },
    { code: 'DS', title: 'Down Syndrome', text: '' },
  ],
};

export const vision =
  'Terwujudnya murid yang religius, berintegritas tinggi, kreatif, dan mandiri dengan mengoptimalkan potensi unik setiap murid melalui pembelajaran adaptif berbasis IPTEK agar mampu berkontribusi nyata di masyarakat.';

export const missions: { title: string; text: string; image: PhotoKey }[] = [
  {
    title: 'Iman & Karakter',
    text: 'Memperkuat keimanan dan karakter religius setiap murid dalam keseharian di sekolah.',
    image: 'kegiatan/pentas-seni',
  },
  {
    title: 'Minat & Bakat',
    text: 'Mengembangkan minat dan bakat setiap anak secara inklusif, sesuai keunikan masing-masing.',
    image: 'kegiatan/tari',
  },
  {
    title: 'Belajar Adaptif',
    text: 'Meningkatkan kualitas pembelajaran yang adaptif dan berbasis IPTEK.',
    image: 'vokasi/tik-3',
  },
  {
    title: 'Mandiri & Berwirausaha',
    text: 'Mengembangkan kemandirian dan jiwa kewirausahaan melalui keterampilan vokasi.',
    image: 'kegiatan/tata-boga',
  },
  {
    title: 'Kreatif & Bermitra',
    text: 'Mengembangkan kreativitas dan menjalin kerja sama dengan Dunia Usaha dan Dunia Industri (DU/DI).',
    image: 'kegiatan/pameran-karya',
  },
];

/* ------------------------------------------------------------------ */
/* Angka                                                               */
/* ------------------------------------------------------------------ */

export const stats = [
  { value: '1972', label: 'Tahun berdiri, lebih dari 50 tahun melayani anak berkebutuhan khusus', icon: 'calendar' },
  { value: '43', label: 'Peserta didik terdaftar di Dapodik tahun ajaran 2026/2027', icon: 'users' },
  { value: '2', label: 'Unit sekolah di Pondok Gede, Bekasi dan Cipinang Melayu, Jakarta Timur', icon: 'pin' },
  { value: '5', label: 'Program vokasi untuk bekal kemandirian dan keterampilan hidup', icon: 'spark' },
] as const;

/* ------------------------------------------------------------------ */
/* Jenjang                                                             */
/* ------------------------------------------------------------------ */

export const levels: {
  name: string;
  full: string;
  classes: string;
  students: number;
  image: PhotoKey;
  tone: 'navy' | 'blue' | 'yellow';
}[] = [
  { name: 'SDLB', full: 'Sekolah Dasar Luar Biasa', classes: 'Kelas I–VI', students: 27, image: 'kegiatan/upacara-8', tone: 'navy' },
  { name: 'SMPLB', full: 'Sekolah Menengah Pertama Luar Biasa', classes: 'Kelas VII–IX', students: 4, image: 'kegiatan/upacara-4', tone: 'blue' },
  { name: 'SMALB', full: 'Sekolah Menengah Atas Luar Biasa', classes: 'Kelas X–XII', students: 8, image: 'vokasi/tik-3', tone: 'yellow' },
];

export const levelNote = 'Ditambah 5 peserta didik di Kelas Mandiri (non-Dapodik). Data rombongan belajar per 6 Maret 2026.';

/* ------------------------------------------------------------------ */
/* Program vokasi                                                      */
/* ------------------------------------------------------------------ */

export interface Program {
  id: string;
  title: string;
  text: string;
  schedule?: string;
  mentor?: string;
  images: PhotoKey[];
}

export const programs: Program[] = [
  {
    id: 'seni-musik',
    title: 'Seni Musik',
    text: 'Siswa belajar bernyanyi dan memainkan alat musik angklung bersama-sama, melatih kepekaan, kerja sama, dan rasa percaya diri.',
    schedule: 'Senin · 08.00–11.00',
    mentor: 'Bpk. Indra Simanjuntak',
    images: ['vokasi/musik-1', 'vokasi/musik-2'],
  },
  {
    id: 'tata-rias',
    title: 'Tata Rias',
    text: 'Untuk jenjang SMPLB dan SMALB: face painting, pemahaman dasar make-up, dan perawatan diri sebagai bekal keterampilan kerja.',
    schedule: 'Rabu · 11.00–13.00',
    mentor: 'Sdr. Septhia',
    images: ['vokasi/rias-2', 'vokasi/rias-1', 'vokasi/rias-3', 'vokasi/rias-4'],
  },
  {
    id: 'souvenir',
    title: 'Keterampilan Souvenir',
    text: 'Siswa membuat souvenir dan kerajinan tangan seperti gelang manik-manik, melatih motorik halus, ketelitian, dan kreativitas.',
    schedule: 'Rabu · 11.00–13.00',
    mentor: 'Ibu Cecilia',
    images: ['vokasi/souvenir-2', 'vokasi/souvenir-1'],
  },
  {
    id: 'tik',
    title: 'Teknologi Informasi & Komunikasi',
    text: 'Belajar mengetik 10 jari dan desain grafis dengan Canva untuk anak tunarungu, serta kegiatan TIK untuk melatih nalar dan motorik anak tunagrahita.',
    schedule: 'Rabu · 08.00–12.00',
    mentor: 'Bpk. Tjen Sufiatno',
    images: ['vokasi/tik-2', 'vokasi/tik-1', 'vokasi/tik-3', 'vokasi/tik-4'],
  },
  {
    id: 'ikan-nila',
    title: 'Budidaya Ikan Nila',
    text: 'Sejak September 2024 seluruh peserta didik dari setiap jenjang bergiliran merawat dan mengembangbiakkan ikan nila di kolam sekolah.',
    schedule: 'Bergilir, semua jenjang',
    images: ['vokasi/nila-1', 'vokasi/nila-2'],
  },
  {
    id: 'karya-prestasi',
    title: 'Karya & Prestasi',
    text: 'Dari panggung seni hingga podium juara di ajang O2SN dan FLS2N, kami merayakan setiap karya dan pencapaian siswa, sekecil apa pun langkahnya.',
    images: ['prestasi/prestasi-1', 'prestasi/prestasi-2', 'prestasi/prestasi-3', 'prestasi/prestasi-4'],
  },
];

export const weeklySchedule: { day: string; items: { time: string; title: string; mentor: string }[] }[] = [
  {
    day: 'Senin',
    items: [{ time: '08.00–11.00', title: 'Seni Musik: bernyanyi & angklung', mentor: 'Bpk. Indra Simanjuntak' }],
  },
  {
    day: 'Rabu',
    items: [
      { time: '08.00–12.00', title: 'Keterampilan TIK: mengetik 10 jari & Canva', mentor: 'Bpk. Tjen Sufiatno' },
      { time: '11.00–13.00', title: 'Tata Rias (SMPLB & SMALB)', mentor: 'Sdr. Septhia' },
      { time: '11.00–13.00', title: 'Keterampilan Souvenir', mentor: 'Ibu Cecilia' },
    ],
  },
  {
    day: 'Bergilir',
    items: [{ time: 'Semua jenjang', title: 'Budidaya Ikan Nila', mentor: 'Seluruh peserta didik' }],
  },
];

/* ------------------------------------------------------------------ */
/* Sarana                                                              */
/* ------------------------------------------------------------------ */

export interface FacilityGroup {
  id: string;
  tab: string;
  title: string;
  text: string;
  items: string[];
  images: PhotoKey[];
}

export const facilityGroups: FacilityGroup[] = [
  {
    id: 'luar-ruang',
    tab: 'Luar Ruang',
    title: 'Hijau, terbuka, dan hidup',
    text: 'Green house, kolam ikan nila, dan taman menjadi ruang belajar di luar kelas: tempat siswa merawat tanaman, mengamati ikan, dan bermain dengan aman.',
    items: ['Green House', 'Kolam Budidaya Ikan Nila', 'Taman Bermain Anak', 'Taman Sekolah'],
    images: ['sarana/green-house', 'sarana/kolam-1', 'sarana/taman-bermain', 'sarana/taman-1'],
  },
  {
    id: 'belajar',
    tab: 'Ruang Belajar',
    title: 'Kelas cerah untuk belajar adaptif',
    text: 'Ruang kelas berwarna cerah, perpustakaan, dan dapur vokasi dirancang supaya setiap anak nyaman belajar sesuai kebutuhannya.',
    items: ['Area Kelas', 'Ruang Kelas', 'Perpustakaan', 'Dapur Vokasi'],
    images: ['sarana/kelas-2', 'sarana/area-kelas', 'sarana/perpustakaan', 'sarana/dapur-2'],
  },
  {
    id: 'pendukung',
    tab: 'Fasilitas Pendukung',
    title: 'Nyaman untuk siswa, guru, dan orang tua',
    text: 'Ruang tunggu orang tua yang teduh, ruang tamu, asrama guru dan ruang pembinaan diri, serta toilet murid yang bersih.',
    items: ['Ruang Tunggu Orang Tua', 'Ruang Tamu', 'Asrama Guru & Ruang Pembinaan Diri', 'Toilet Murid'],
    images: ['sarana/ruang-tunggu', 'sarana/ruang-tamu-2', 'sarana/asrama', 'sarana/toilet-3'],
  },
];

/* ------------------------------------------------------------------ */
/* Kegiatan                                                            */
/* ------------------------------------------------------------------ */

export const activities: { title: string; tag: string; image: PhotoKey }[] = [
  { title: 'Juara 1 di Ajang O2SN & FLS2N', tag: 'Prestasi', image: 'prestasi/prestasi-2' },
  { title: 'Pentas Seni & Budaya', tag: 'Seni', image: 'kegiatan/pentas-seni' },
  { title: 'Berkemah Bersama', tag: 'Luar Ruang', image: 'kegiatan/kemah' },
  { title: 'Belajar Tata Boga', tag: 'Vokasi', image: 'kegiatan/tata-boga' },
  { title: 'Wisata Bersama Keluarga Sekolah', tag: 'Kebersamaan', image: 'kegiatan/wisata-rombongan' },
  { title: 'Upacara Bendera', tag: 'Karakter', image: 'kegiatan/upacara-7' },
  { title: 'Piknik di Taman Kota', tag: 'Luar Ruang', image: 'kegiatan/outing-3' },
  { title: 'Pakaian Adat Nusantara', tag: 'Budaya', image: 'kegiatan/pakaian-adat' },
  { title: 'Mading Stop Bullying', tag: 'Karya', image: 'kegiatan/pameran-karya' },
];

export const photoStrip: PhotoKey[] = [
  'kegiatan/outing-1',
  'kegiatan/upacara-3',
  'kegiatan/kebersamaan-1',
  'kegiatan/upacara-4',
  'kegiatan/outing-2',
  'kegiatan/lukis-wajah',
  'kegiatan/upacara-7',
  'kegiatan/batik',
];

export const videos = [
  { id: 'piknik', title: 'Piknik bersama di taman', src: '/videos/piknik.mp4', poster: 'kegiatan/video-piknik' as PhotoKey },
  { id: 'kebersamaan', title: 'Kebersamaan keluarga sekolah', src: '/videos/kebersamaan.mp4', poster: 'kegiatan/video-kebersamaan' as PhotoKey },
];

/* ------------------------------------------------------------------ */
/* Guru & tenaga kependidikan (TA 2026/2027)                           */
/* ------------------------------------------------------------------ */

export const leadership = [
  { role: 'Kepala Sekolah', name: 'Lucy Veronica Kansil, S.Th' },
  { role: 'Wakil Kepala Sekolah', name: 'Yusniar, S.Psi., S.Pd., Gr' },
];

export const teachers = [
  'Maniar Gultom, S.PdK',
  'Aenah Mochtar, S.Pd',
  'Lenny Marlina, S.Pd',
  'Oci Cristy Darlinta Koilhar, S.Th',
  'Savitri Adriani, S.Pd',
  'Muhammad Iqbal Fakih, S.Psi',
  'Debora Novita Murni Panggabean, SE.',
  'Meylisa Debora Carlina Br. Barus, S.S',
  'Ismi Evriliyani, S.IKom',
  'Yuli Triasion',
];

export const staffGroups = [
  {
    role: 'Pendamping Vokasional',
    people: ['Indra Simanjuntak (Seni Musik)', 'Cecilia Felicia (Membatik & Keterampilan)', 'Septhia (Tata Rias)'],
  },
  { role: 'Operator Sekolah', people: ['Tjen Sufiatno'] },
  { role: 'Tata Usaha', people: ['Khelvin Tania'] },
  { role: 'Staf Kebersihan', people: ['Rizky Bayu', 'Ruslan', 'Erina Simangunsong'] },
];

/* ------------------------------------------------------------------ */
/* Kolaborasi                                                          */
/* ------------------------------------------------------------------ */

export const needs = [
  {
    title: 'Kompetensi Guru & Tenaga Kependidikan',
    text: 'Program peningkatan kompetensi yang terencana dan berdampak pada kemandirian, perilaku, daya pikir kritis, dan kemampuan teknologi peserta didik.',
    icon: 'users',
  },
  {
    title: 'Sarana & Prasarana Penunjang',
    text: 'Pengadaan sarana sesuai skala prioritas untuk lingkungan belajar yang aman, nyaman, sehat, dan menyenangkan, serta bekal keterampilan masa depan.',
    icon: 'home',
  },
  {
    title: 'Tata Kelola Administrasi',
    text: 'Pembenahan tata kelola administrasi sekolah mengacu pada standar pendidikan nasional demi layanan terbaik bagi seluruh pemangku kepentingan.',
    icon: 'doc',
  },
] as const;
