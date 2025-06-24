import type { Tool } from '../types';

export const bun: Tool = {
  icon: 'https://bun.sh/logo.svg',
  name: 'Bun',
  description: 'All-in-one JavaScript runtime & toolkit designed for speed',
  category: 'Runtime',
  docsLink: 'https://bun.sh',
  githubLink: 'https://github.com/oven-sh/bun',
  maintainer: 'Oven',
  language: 'Zig',
  features: ['Fast Startup', 'Built-in Bundler', 'npm Compatibility', 'SQLite Support']
};