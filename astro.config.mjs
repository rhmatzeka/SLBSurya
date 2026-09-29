// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://slb-surya-wiyata.vercel.app',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always',
  },
  // Halaman tujuan dimuat duluan saat link ditunjuk/disentuh, jadi pindah halaman terasa instan
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  image: {
    responsiveStyles: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
