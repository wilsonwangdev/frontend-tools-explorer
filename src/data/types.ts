// Tool Categories
export type ToolCategory =
  | 'Undefined'
  | 'Cross Platform Framework'
  | 'CSS Build Tool'
  | 'Web Components Library'
  | 'Runtime'
  | 'Package Manager'
  | 'Static Site Generator'
  | 'Testing Framework'
  | 'Frontend Framework'
  | 'Build Tool'
  | 'Compiling Tools'
  | 'Monorepo Management Tool'
  | 'Library Development Tool'
  | 'Bundler'
  | 'Web Framework'
  | 'Full Stack Framework'
  | 'Meta Framework'
  | 'Syntax Extension'
  | 'CSS Framework'
  | 'Component Library'
  | 'Linter & Formatter';

export interface Tool {
  icon: 'local' | `https://${string}` | `http://${string}`;
  name: string;
  description: string;
  category: ToolCategory;
  docsLink: string;
  githubLink: string;
}
