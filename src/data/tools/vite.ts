import type { Tool } from "../types";

export const vite: Tool = {
  name: 'Vite',
  description: 'Fast, reliable, and secure dependency management',
  icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg?v=1',
  category: 'Build Tool',
  docsLink: 'https://vitejs.dev',
  githubLink: 'https://github.com/vitejs/vite',
  maintainer: 'Evan You',
  language: 'TypeScript',
  features: ['Workspaces', 'Plug\'n\'Play', 'Zero-Installs', 'Constraints']
};