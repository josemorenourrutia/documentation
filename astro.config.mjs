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
      // Español docs in `src/content/docs/es/`
      es: {
        label: 'Español',
      },
      // English docs in `src/content/docs/en/`
      ca: {
        label: 'Catalán',
      },
      // English docs in `src/content/docs/en/`
      en: {
        label: 'Inglés',
      },
    },
  })]
});