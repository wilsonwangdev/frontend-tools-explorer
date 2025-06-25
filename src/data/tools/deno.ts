import type { Tool } from '../types';

export const deno: Tool = {
  icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg?v=1',
  name: 'Deno',
  description: 'A modern runtime for JavaScript and TypeScript with built-in security features',
  category: 'Runtime',
  docsLink: 'https://deno.com/',
  githubLink: 'https://github.com/denoland/deno',
  maintainer: 'Deno Land',
  language: 'TypeScript',
  features: ['Secure by Default', 'TypeScript Support', 'Built-in Tools', 'URL Imports']
};