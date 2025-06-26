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

| Feature | Biome | markdownlint-cli2 |
|---------|-------|------------------|
| Linting | ✅ | ✅ |
| Formatting | ✅ | ✅ |
| Astro Support | ⚠️ (partial) | N/A |
| Markdown Support | ❌ | ✅ |
| Performance | Very Fast | Fast |
| Editor Integration | ✅ | ✅ |
| Configuration | `biome.json` | `.markdownlint.json` |

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
  "*.astro": ["biome check --write", "biome format --write"],
  "*.md": ["markdownlint-cli2 --fix"]
}
```

This ensures that:
- JavaScript and TypeScript files are linted and formatted
- Astro files are linted and formatted (to the extent supported by Biome)
- Markdown files are linted and automatically fixed when possible

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

## Markdown Linting with markdownlint-cli2

In addition to Biome, this project uses [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) to lint and format Markdown documentation files.

### Features

- **Consistent formatting** across all markdown files
- **Automated fixes** for common issues
- **Pre-commit checks** to ensure documentation quality
- **CI integration** to verify documentation in pull requests

### Usage

```bash
# Check markdown files for issues
pnpm lint:md

# Fix markdown issues automatically where possible
pnpm lint:md:fix
```

For more details on the markdown linting setup, see [MARKDOWN-LINTING.md](./MARKDOWN-LINTING.md).

## Installation

Biome and markdownlint-cli2 are already installed as dev dependencies in this project. You can use them directly through the npm scripts or via their respective commands:

```bash
# Using npm scripts for Biome
pnpm lint
pnpm format
pnpm check

# Using npm scripts for markdownlint
pnpm lint:md
pnpm lint:md:fix

# Or directly
pnpm biome check .
pnpm biome format .
pnpm markdownlint-cli2 "**/*.md"
pnpm markdownlint-cli2 --fix "**/*.md"
```

## Editor Integration

Both Biome and markdownlint offer VS Code extensions for editor integration:

- [Biome VS Code Extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
- [markdownlint VS Code Extension](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

The project's `.vscode/settings.json` is already configured to use Biome when it's installed. The markdownlint extension will automatically use the project's `.markdownlint.json` configuration.