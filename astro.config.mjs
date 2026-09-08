// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Hybrid en Astro 7: 'static' prerenderiza todo por defecto y permite
  // optar a SSR por ruta con `export const prerender = false`
  output: 'static',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },

    imageService: "cloudflare"
  }),
  vite: {
    optimizeDeps: {
      include: ['astro/assets/services/noop', 'astro/logger/json']
    }
  }
});
