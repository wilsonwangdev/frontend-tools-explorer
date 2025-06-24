import type { Tool } from '../types';

export const rspack: Tool = {
  icon: '',
  name: 'Rspack',
  description: 'Fast Rust-based bundler with webpack compatibility, designed for high-performance JavaScript bundling',
  category: 'Bundler',
  docsLink: 'https://rspack.dev',
  githubLink: 'https://github.com/web-infra-dev/rspack',
  maintainer: 'ByteDance',
  language: 'Rust',
  features: ['Webpack Compatible', 'High Performance', 'HMR Support', 'Plugin System']
};