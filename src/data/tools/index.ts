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

// Export all tools sorted alphabetically by name
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
  yarn,
  vite,
  rslib,
  esbuild,
  obuild,
].sort((a, b) => a.name.localeCompare(b.name));
