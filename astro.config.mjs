import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bojanmilinic.com',
  integrations: [
    tailwind(),
    sitemap({
      // /sitemap is an internal dev page, /booking-confirmed is only reachable after form submit
      filter: (page) => !page.includes('/sitemap/') && !page.includes('/booking-confirmed/'),
    }),
  ],
  output: 'static',
});
