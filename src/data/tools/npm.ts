import type { Tool } from '../types';

export const npm: Tool = {
  icon: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg?v=1',
  name: 'npm',
  description: 'Default package manager for Node.js with the largest software registry in the world',
  category: 'Package Manager',
  docsLink: 'https://www.npmjs.com',
  githubLink: 'https://github.com/npm/cli',
  maintainer: 'GitHub',
  language: 'JavaScript',
  features: ['Large Registry', 'Scripts', 'Version Management', 'Security Audits']
};