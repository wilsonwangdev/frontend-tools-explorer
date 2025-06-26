import type { Tool } from "../types";

// Import individual tool configurations
import { rolldown } from "./rolldown";
import { oxc } from "./oxc";
import { rspack } from "./rspack";
import { rsbuild } from "./rsbuild";
import { vitest } from "./vitest";
import { npm } from "./npm";
import { react } from "./react";
import { vue } from "./vue";
import { nodejs } from "./nodejs";
import { deno } from "./deno";
import { bun } from "./bun";
import { pnpm } from "./pnpm";
import { yarn } from "./yarn";
import { vite } from "./vite";
import { rslib } from "./rslib";
import { esbuild } from "./esbuild";
import { obuild } from "./obuild";
import { shadcn } from "./shadcn";
import { tailwind } from "./tailwind";
import { astro } from "./astro";
import { vitepress } from "./vitepress";
import { preact } from "./preact";
import { svelte } from "./svelte";
import { lit } from "./lit";
import { solid } from "./solid";
import { nextjs } from "./nextjs";
import { nuxt } from "./nuxt";
import { qwik } from "./qwik";
import { rollup } from "./rollup";
import { eslint } from "./eslint";
import { biome } from "./biome";
import { dprint } from "./dprint";
import { turbo } from "./turbo";
import { nx } from "./nx";
import { swc } from "./swc";
import { mocha } from "./mocha";
import { jest } from "./jest";
import { playwright } from "./playwright";
import { cypress } from "./cypress";
import { webdriverio } from "./webdriverio";
import { parcel } from "./parcel";
import { angular } from "./angular";
import { docusaurus } from "./docusaurus";
import { farm } from "./farm";
import { electron } from "./electron";
import { tarui } from "./tarui";
import { lightningcss } from "./lightningcss";
import { rstest } from "./rstest";
import { rspress } from "./rspress";

// Export all tools sorted alphabetically by name
export const tools: Tool[] = [
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
