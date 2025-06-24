import type { Tool } from './types';

// Icon paths using Wikimedia Commons CDN for official logos and local paths for custom icons
const iconPaths = {
  rolldown: '/icons/rolldown.svg', // No official CDN URL yet
  oxc: '/icons/oxc.svg', // No official CDN URL yet
  rspack: 'https://rspack.dev/favicon.svg', // Official Rspack logo
  rsbuild: 'https://rsbuild.dev/favicon.svg', // Official Rsbuild logo
  vitest: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg?v=1',
  npm: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg?v=1',
  react: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg?v=1',
  vue: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg?v=1',
  nodejs: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg?v=1',
  deno: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg?v=1',
  bun: 'https://bun.sh/logo.svg',
  pnpm: 'https://pnpm.io/img/pnpm-no-name-with-frame.svg',
  yarn: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Yarn-logo.svg?v=1'
};

// Helper function to get icon path
const getIconPath = (name: string): string => {
  const iconName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  return iconPaths[iconName as keyof typeof iconPaths] || '';
};

import { tools } from './tools';

export { tools };