import type { Tool } from '../types';
import { angular } from './angular';
import { astro } from './astro';
import { biome } from './biome';
import { bun } from './bun';
import { cypress } from './cypress';
import { deno } from './deno';
import { docusaurus } from './docusaurus';
import { dprint } from './dprint';
import { electron } from './electron';
import { esbuild } from './esbuild';
import { eslint } from './eslint';
import { farm } from './farm';
import { flutter } from './flutter';
import { fresh } from './fresh';
import { ionic } from './ionic';
import { jest } from './jest';
import { lightningcss } from './lightningcss';
import { lit } from './lit';
import { lynx } from './lynx';
import { mdx } from './mdx';
import { mocha } from './mocha';
import { moon } from './moon';
import { nativescript } from './nativescript';
import { nextjs } from './nextjs';
import { nodejs } from './nodejs';
import { npm } from './npm';
import { nuxt } from './nuxt';
import { nx } from './nx';
import { obuild } from './obuild';
import { oxc } from './oxc';
import { parcel } from './parcel';
import { playwright } from './playwright';
import { pnpm } from './pnpm';
import { preact } from './preact';
import { qwik } from './qwik';
import { react } from './react';
import { reactnative } from './reactnative';
import { remix } from './remix';
import { rolldown } from './rolldown';
import { rollup } from './rollup';
import { rsbuild } from './rsbuild';
import { rslib } from './rslib';
import { rspack } from './rspack';
import { rspress } from './rspress';
import { rstest } from './rstest';
import { shadcn } from './shadcn';
import { solid } from './solid';
import { storybook } from './storybook';
import { svelte } from './svelte';
import { swc } from './swc';
import { tailwind } from './tailwind';
import { tarui } from './tarui';
import { turbo } from './turbo';
import { unocss } from './unocss';
import { vite } from './vite';
import { vitepress } from './vitepress';
import { vitest } from './vitest';
import { vue } from './vue';
import { webdriverio } from './webdriverio';
import { webpack } from './webpack';
import { yarn } from './yarn';
import { tanstack } from './tanstack';

// Export all tools sorted alphabetically by name
export const tools: Tool[] = [
  tanstack,
  moon,
  storybook,
  webpack,
  remix,
  fresh,
  ionic,
  mdx,
  nativescript,
  lynx,
  flutter,
  reactnative,
  unocss,
  lightningcss,
  rspress,
  rstest,
  tarui,
  electron,
  farm,
  docusaurus,
  angular,
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
  yarn,
  vite,
  rslib,
  esbuild,
  obuild,
  shadcn,
  tailwind,
  astro,
  vitepress,
  preact,
  svelte,
  lit,
  solid,
  nextjs,
  nuxt,
  qwik,
  rollup,
  eslint,
  biome,
  dprint,
  turbo,
  nx,
  swc,
  mocha,
  jest,
  playwright,
  cypress,
  webdriverio,
  parcel,
].sort((a, b) => a.name.localeCompare(b.name));
