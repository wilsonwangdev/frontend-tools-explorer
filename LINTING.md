# Linting and Formatting Setup

This project uses Biome, a modern Rust-based JavaScript/TypeScript tooling solution that offers significant performance improvements over traditional JavaScript-based tools. Additionally, we use Husky and lint-staged to automatically run linting and formatting on staged files during the commit process.

## Biome

[Biome](https://biomejs.dev/) is a complete toolchain for web projects that includes both linting and formatting capabilities. It's a spiritual successor to Rome and offers excellent compatibility with Astro projects.

### Features

- **Fast formatter** with 97% Prettier compatibility
- **Powerful linter** with rules for JavaScript, TypeScript, and JSX
- **Partial support for Astro files** (frontmatter portion)
- **Import sorting** capabilities

### Usage

```bash
# Run linting
pnpm lint

# Format code
pnpm format

# Run both linting and formatting with auto-fixes
pnpm check

# Direct usage
biome check .
biome format --write .
```



## Features Summary

| Feature | Biome |
|---------|-------|
| Linting | ✅ |
| Formatting | ✅ |
| Astro Support | ⚠️ (partial) |
| Performance | Very Fast |
| Editor Integration | ✅ |
| Configuration | `biome.json` |

## Automated Checks with Husky and lint-staged

This project uses [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged) to automatically run linting and formatting on staged files before each commit.

### How It Works

1. When you run `git commit`, Husky triggers the pre-commit hook
2. The pre-commit hook runs lint-staged
3. lint-staged runs Biome on only the files that are staged for commit
4. If there are any linting or formatting issues, the commit is blocked until they are fixed

### Configuration

The lint-staged configuration is in `.lintstagedrc.json`:

```json
{
  "*.{js,jsx,ts,tsx}": ["biome check --write", "biome format --write"],
  "*.astro": ["biome check --write", "biome format --write"]
}
```

This ensures that:
- JavaScript and TypeScript files are linted and formatted
- Astro files are linted and formatted (to the extent supported by Biome)

### Benefits

- **Speed**: Only checks files that are being committed
- **Consistency**: Ensures all committed code follows project standards
- **Automation**: No need to remember to run linting/formatting manually

## Why Biome?

This project uses **Biome** as the linting and formatting tool because:

1. It provides both linting and formatting in a single tool
2. It has good support for Astro files (frontmatter)
3. It offers a Prettier-compatible formatter
4. It provides excellent performance for JavaScript and TypeScript projects

## Installation

Biome is already installed as a dev dependency in this project. You can use it directly through the npm scripts or via the `biome` command:

```bash
# Using npm scripts
pnpm lint
pnpm format
pnpm check

# Or directly
pnpm biome check .
pnpm biome format .
```

## Editor Integration

Biome offers a VS Code extension for editor integration:

- [Biome VS Code Extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)

The project's `.vscode/settings.json` is already configured to use Biome when it's installed.