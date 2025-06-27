// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  image: {
    // Enable built-in image optimization
    domains: [
      'rspack.dev',
      'static.npmjs.com',
      'react.dev',
      'vuejs.org',
      'raw.githubusercontent.com'
    ]
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },

  vite: {
    build: {
      cssCodeSplit: true,
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    },
    optimizeDeps: {
      include: ['tailwindcss']
    }
  },

  // Configure Vercel adapter with image service enabled
  adapter: vercel({
    imageService: true,
    devImageService: 'sharp'
  })
});
