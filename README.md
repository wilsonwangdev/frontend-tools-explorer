<div align="center">

# Frontend Tools Explorer

**A comprehensive, searchable directory of modern frontend development tools and libraries.**

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)
[![Styled with Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![GitHub](https://img.shields.io/github/license/wilsonwangdev/frontend-tools-explorer?color=blue)](https://github.com/wilsonwangdev/frontend-tools-explorer/blob/main/LICENSE)

[View Demo](https://frontend-tools-explorer.vercel.app) | [Report Bug](https://github.com/wilsonwangdev/frontend-tools-explorer/issues) | [Request Feature](https://github.com/wilsonwangdev/frontend-tools-explorer/pulls)

</div>

## 🚀 About The Project

Frontend Tools Explorer is a curated collection of essential tools, libraries, and frameworks for modern frontend development. It helps developers discover and compare different tools across various categories including:

- UI Libraries & Frameworks (React, Vue, Svelte, etc.)
- Build Tools & Bundlers (Vite, Rollup, esbuild, etc.)
- Testing Frameworks (Vitest, Jest, Playwright, etc.)
- Package Managers (npm, pnpm, Yarn, etc.)
- Runtimes (Node.js, Deno, Bun, etc.)
- Linters & Formatters (ESLint, Biome, etc.)
- And many more!

### ✨ Features

- **Comprehensive Directory**: 40+ carefully selected frontend tools
- **Instant Search**: Find tools quickly with real-time filtering
- **Category Filtering**: Browse tools by specific categories
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **Performance Optimized**: Fast loading with smooth transitions
- **Accessibility Focused**: Keyboard navigation and screen reader support

## 🛠️ Built With

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types

## 🏁 Getting Started

### Prerequisites

- Node.js LTS:
  - v20 LTS (v20.0.0 or newer, default v20.19.3)
  - v22 LTS (v22.0.0 or newer, also supported v22.17.0)
- pnpm (v8.0.0 or newer)

> **Note:** This project requires specific Node.js and package manager versions. For more details, see [PACKAGE-MANAGER.md](./docs/PACKAGE-MANAGER.md) and [NODE-VERSION.md](./docs/NODE-VERSION.md).

### Installation

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

   > **Note:** This project requires pnpm as the package manager. We recommend using Corepack (built into Node.js 20+) to manage pnpm. See [PACKAGE-MANAGER.md](./docs/PACKAGE-MANAGER.md) for more details and troubleshooting.

3. Start the development server

   ```sh
   pnpm dev
   ```

4. Open your browser and visit `http://localhost:4321`

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
   - The project uses Husky and lint-staged to automatically format and lint your code on commit
   - This ensures all code follows the project's style guidelines
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Adding a New Tool

To add a new frontend tool to the directory:

1. Create a new file in `src/data/tools/` with the tool name (e.g., `newtool.ts`)
2. Follow the existing tool file structure
3. Import and add your tool to the array in `src/data/tools/index.ts`
4. Submit a pull request

Please see [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for detailed contribution guidelines.

## 📚 Documentation

All project documentation is available in the [docs](./docs) directory. This includes:

- [Contributing Guidelines](./docs/CONTRIBUTING.md)
- [CI Setup](./docs/CI.md)
- [Linting and Formatting](./docs/LINTING.md)
- [Markdown Linting](./docs/MARKDOWN-LINTING.md)
- [Package Manager Configuration](./docs/PACKAGE-MANAGER.md)
- [Node.js Version Requirements](./docs/NODE-VERSION.md)
- [Lockfile Management](./docs/LOCKFILE-MANAGEMENT.md)
- [Image Processing](./docs/IMAGE-PROCESSING.md)

## 🔄 Continuous Integration

This project uses GitHub Actions for continuous integration to ensure code quality. The CI workflow automatically runs linting and formatting checks on every pull request and push to the main branch.

You can test the CI workflow locally before pushing changes:

```sh
# Run the CI test script
./scripts/test-ci.sh
```

For more details on the CI setup, troubleshooting common issues, and best practices, see [CI.md](./docs/CI.md).

### Dependency Management

This project uses pnpm for dependency management and requires proper lockfile handling, especially in CI environments. For guidance on managing the lockfile and resolving common issues, see [LOCKFILE-MANAGEMENT.md](./docs/LOCKFILE-MANAGEMENT.md).

## 🖼️ Image Processing

This project uses Astro's built-in image optimization with Sharp for processing images. Sharp is required for both local development and Vercel deployment.

For more details on image processing configuration, troubleshooting, and best practices, see [IMAGE-PROCESSING.md](./docs/IMAGE-PROCESSING.md).

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

Project Link: [https://github.com/wilsonwangdev/frontend-tools-explorer](https://github.com/wilsonwangdev/frontend-tools-explorer)

## 🗺️ Roadmap

We're constantly working to improve Frontend Tools Explorer. Here are some features we're planning to add:

- Pagination for better performance with large datasets
- Tool comparison feature
- User reviews and ratings

See the [open issues](https://github.com/wilsonwangdev/frontend-tools-explorer/issues) for a full list of proposed features and known issues.

## 🙏 Acknowledgments

- All the amazing frontend tool creators and maintainers
- The open source community for continuous innovation
