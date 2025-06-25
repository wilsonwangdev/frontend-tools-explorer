import type { Tool } from '../types';

export const oxc: Tool = {
  icon: 'https://cdn.jsdelivr.net/gh/oxc-project/oxc-assets/round.svg',
  name: 'Oxc',
  description: 'Collection of high-performance JavaScript tools including parser, transformer, resolver, and minifier',
  category: 'JavaScript Tools',
  docsLink: 'https://oxc-project.github.io',
  githubLink: 'https://github.com/oxc-project/oxc',
  maintainer: 'VoidZero',
  language: 'Rust',
  features: ['Fast Parser', 'TypeScript Support', 'Code Transformation', 'Minification']
};