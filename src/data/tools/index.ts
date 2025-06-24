import type { Tool } from '../types';

// Import individual tool configurations
import { rolldown } from './rolldown';
import { oxc } from './oxc';
import { rspack } from './rspack';
import { rsbuild } from './rsbuild';
import { vitest } from './vitest';
import { npm } from './npm';
import { react } from './react';
import { vue } from './vue';
import { nodejs } from './nodejs';
import { deno } from './deno';
import { bun } from './bun';
import { pnpm } from './pnpm';
import { yarn } from './yarn';

// Export all tools
export const tools: Tool[] = [
  rolldown,
  oxc,
  rspack,
  rsbuild,
  vitest,
  npm,
  react,
  vue,
  nodejs,
  deno,
  bun,
  pnpm,
  yarn
];