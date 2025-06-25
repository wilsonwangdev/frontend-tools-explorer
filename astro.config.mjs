// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

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
  }
});
