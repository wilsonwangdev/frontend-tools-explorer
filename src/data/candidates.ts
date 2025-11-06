import type { Tool } from './types';

type Candidate = Omit<Tool, 'icon' | 'category'> & {
  // preserve whatever types Tool had for icon/category, but also allow the empty string
  icon: (Tool extends { icon: infer I } ? I : unknown) | '';
  category: (Tool extends { category: infer C } ? C : unknown) | '';
};

export const Candidates: Candidate[] = [
  {
    name: 'nest',
    icon: '',
    description:
      'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
    category: '',
    docsLink: 'https://nestjs.com/',
    githubLink: 'https://github.com/nestjs/nest',
  },
  {
    name: 'Express',
    icon: '',
    description: 'Fast, unopinionated, minimalist web framework for Node.js',
    category: '',
    docsLink: 'https://expressjs.com/',
    githubLink: 'https://github.com/expressjs/express',
  },
  {
    name: 'Koa',
    icon: '',
    description: 'Next generation web framework for Node.js',
    category: '',
    docsLink: 'https://koajs.com/',
    githubLink: 'https://github.com/koajs/koa',
  },
];
