# Contributing to Frontend Tools Explorer

Thank you for considering contributing to Frontend Tools Explorer! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How Can I Contribute?

### Reporting Bugs

Bugs are tracked as GitHub issues. Create an issue and provide the following information:

- Use a clear and descriptive title
- Describe the exact steps to reproduce the bug
- Provide specific examples (links, screenshots, etc.)
- Describe the behavior you observed and what you expected to see
- Include browser and OS information

### Suggesting Enhancements

Enhancement suggestions are also tracked as GitHub issues. When creating an enhancement suggestion:

- Use a clear and descriptive title
- Provide a detailed description of the suggested enhancement
- Explain why this enhancement would be useful
- Include mockups or examples if applicable

### Adding New Tools

To add a new frontend tool to the directory:

1. Create a new file in `src/data/tools/` with the tool name (e.g., `newtool.ts`)
2. Follow this template:

```typescript
import type { Tool } from '../types';

export const toolName: Tool = {
  icon: 'https://path-to-tool-icon.svg',  // URL to the tool's icon
  name: 'Tool Name',                      // Display name of the tool
  description: 'Brief description of the tool and its purpose',
  category: 'Frontend Framework',         // Must match one of the categories in types.ts
  docsLink: 'https://tool-docs-url.com',  // Link to official documentation
  githubLink: 'https://github.com/org/repo' // Link to GitHub repository
};
```

3. Import and add your tool to the array in `src/data/tools/index.ts`
4. Submit a pull request

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests if available
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Development Setup

### Prerequisites

- Node.js LTS:
  - v20 LTS (v20.0.0 or newer, default v20.19.3)
  - v22 LTS (v22.0.0 or newer, also supported v22.17.0)
- pnpm (v8.0.0 or newer)

> **Note:** This project requires pnpm as the package manager. We recommend using Corepack (built into Node.js) to manage pnpm:
> ```sh
> # Enable Corepack
> corepack enable
>
> # Activate pnpm
> corepack prepare pnpm@latest --activate
> ```
>
> For more details on our package manager and Node.js requirements, see [PACKAGE-MANAGER.md](./PACKAGE-MANAGER.md) and [NODE-VERSION.md](./NODE-VERSION.md).

### Setup Steps

1. Clone the repository
   ```sh
   git clone https://github.com/wilsonwangdev/frontend-tools-explorer.git
   cd frontend-tools-explorer
   ```

2. Install dependencies
   ```sh
   # Using Corepack (recommended)
   corepack enable
   corepack prepare pnpm@latest --activate
   pnpm install

   # Alternative: If you have network issues with Corepack
   npm install -g pnpm@8.15.4
   pnpm install

   # Note: Ensure you're using Node.js v22 LTS
   # Check your version with: node -v
   # If needed, install the LTS version from nodejs.org
   ```

   > If you encounter network issues with Corepack during git operations, see the [Troubleshooting section in PACKAGE-MANAGER.md](./PACKAGE-MANAGER.md#troubleshooting).

3. Start the development server
   ```sh
   pnpm dev
   ```

4. Open your browser and visit `http://localhost:4321`

5. Test your changes locally before submitting a PR
   ```sh
   # Run linting checks
   pnpm lint

   # Test CI workflow locally
   ./scripts/test-ci.sh
   ```

   > For more details on testing CI locally, see [CI.md](./CI.md#testing-ci-locally).

## Style Guidelines

### Code Style

- Use TypeScript for type safety
- Follow the existing code style in the project
- Use meaningful variable and function names
- Add comments for complex logic

### Commit Messages

- Use clear and meaningful commit messages
- Reference issues and pull requests when relevant

## Additional Notes

### Issue and Pull Request Labels

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements or additions to documentation
- `good first issue`: Good for newcomers

## Thank You!

Your contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contribution you make is **greatly appreciated**.
