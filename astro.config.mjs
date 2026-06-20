import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import editableRegions from '@cloudcannon/editable-regions/astro-integration';

export default defineConfig({
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  integrations: [editableRegions()],

  vite: {
    plugins: [tailwindcss()]
  }
});
