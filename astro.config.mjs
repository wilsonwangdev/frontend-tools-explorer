// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    // 启用内置的图片优化功能
    domains: [
      'rspack.dev',
      'static.npmjs.com',
      'react.dev',
      'vuejs.org',
      'raw.githubusercontent.com'
    ]
  }
});
