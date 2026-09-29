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
  image: {
    responsiveStyles: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
