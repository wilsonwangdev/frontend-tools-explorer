import type { Tool } from "../types";

export const pnpm: Tool = {
  name: 'pnpm',
  description: 'Fast, disk space efficient package manager',
  icon: 'https://pnpm.io/img/pnpm-no-name-with-frame.svg',
  category: 'Package Manager',
  docsLink: 'https://pnpm.io',
  githubLink: 'https://github.com/pnpm/pnpm',
  maintainer: 'pnpm',
  language: 'TypeScript',
  features: ['Content-Addressable Store', 'Strict Dependencies', 'Monorepo Support']
};