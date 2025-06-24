// Tool Categories
export type ToolCategory =
  | 'Runtime'
  | 'Package Manager'
  | 'Build Tool'
  | 'Bundler'
  | 'Framework'
  | 'UI Library'
  | 'CSS Framework'
  | 'Testing'
  | 'Linter & Formatter'
  | 'JavaScript Tools';

export interface Tool {
  icon: string;
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