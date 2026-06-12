import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Endereco final do blog. Ajustar quando apontar o dominio.
export default defineConfig({
  site: 'https://blog.fazpage.com.br',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
