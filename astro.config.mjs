// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Keep in sync with SITE_URL in src/config/site.ts.
  site: 'https://rawafid.app',

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: "ar",
    locales: ["ar", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
