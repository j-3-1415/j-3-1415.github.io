import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://j-3-1415.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
