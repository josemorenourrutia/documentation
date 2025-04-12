// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [starlight({
    title: 'TeiDSpace',
    // Set English as the default language for this site.
    defaultLocale: 'es',
    locales: {
      // English docs in `src/content/docs/en/`
      en: {
        label: 'English',
      },
      // Español docs in `src/content/docs/es/`
      es: {
        label: 'Español',
      },
    },
  })]
});