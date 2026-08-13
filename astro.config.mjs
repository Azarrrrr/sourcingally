// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sourcingally.com',
  trailingSlash: 'always',
  vite: {
    server: {
      allowedHosts: true,
    },
    preview: {
      allowedHosts: true,
    },
  },
});
