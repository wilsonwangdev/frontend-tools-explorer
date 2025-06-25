import type { Tool } from '../types';

export const rsbuild: Tool = {
  icon: 'local',
  name: 'Rsbuild',
  description: 'A Rspack-based build tool that provides out-of-box build capabilities with enhanced developer experience',
  category: 'Build Tool',
  docsLink: 'https://rsbuild.dev',
  githubLink: 'https://github.com/web-infra-dev/rsbuild',
  maintainer: 'ByteDance',
  language: 'Rust',
  features: ['Rspack Integration', 'Zero Config', 'Performance Optimized', 'Framework Agnostic']
};