import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import astroLLMsGenerator from 'astro-llms-generate';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  output: 'static',
  site: 'https://shravonix.com',
  integrations: [
    sitemap({
      customPages: [
        'https://shravonix.com/llms.txt',
        'https://shravonix.com/llms-small.txt',
        'https://shravonix.com/llms-full.txt',
      ],
      serialize(item) {
        if (item.url === 'https://shravonix.com/' || item.url === 'https://shravonix.com') {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else if (item.url.includes('/products') || item.url.includes('/services')) {
          item.changefreq = 'monthly';
          item.priority = 0.8;
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.5;
        }
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
    robotsTxt(),
    astroLLMsGenerator({
      title: 'Shravonix — CCTV Surveillance & Security Systems, Anand–Nadiad, Gujarat',
      description: 'Enterprise CCTV supply, installation and AMC & monitoring services for factories, campuses and businesses across Anand, Nadiad and Gujarat.',
      includePatterns: ['**/*'],
      excludePatterns: [],
      i18n: false,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
