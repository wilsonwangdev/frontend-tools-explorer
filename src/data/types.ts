// Tool Categories
export type ToolCategory =
  | 'Runtime'
  | 'Package Manager'
  | 'Static Site Generator'
  | 'Testing Framework'
  | 'Build Tool'
  | 'Monorepo Tool'
  | 'Library Development Tool'
  | 'Bundler'
  | 'Framework'
  | 'SSR Framework'
  | 'UI Library'
  | 'CSS Framework'
  | 'Component Library'
  | 'Testing'
  | 'Linter & Formatter'
  | 'JavaScript Tools'
  | 'Other';

export interface Tool {
  icon: 'local' | `https://${string}` | `http://${string}`;
  name: string;
  description: string;
  category: ToolCategory;
  docsLink: string;
  githubLink: string;
  version?: string;
  language?: string;
  maintainer?: string;
  features?: string[];
  stars?: number;
}