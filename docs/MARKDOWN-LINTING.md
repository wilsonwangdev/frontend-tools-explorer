# Markdown Linting Setup

## Overview

This project uses markdownlint-cli2 to ensure consistent formatting and style in all markdown documentation files. Markdown linting helps maintain readability, consistency, and adherence to best practices across all documentation.

## Features

- **Consistent formatting** across all markdown files
- **Automated fixes** for common issues
- **Pre-commit checks** to ensure documentation quality
- **CI integration** to verify documentation in pull requests

## Configuration

The project includes several configuration files for markdown linting:

### `.markdownlint.json`

This is the main configuration file that defines the rules for markdown linting:

```json
{
  "default": true,
  "MD013": false,
  "MD033": false,
  "MD041": false,
  "MD046": { "style": "fenced" },
  "MD024": false,
  "MD025": { "front_matter_title": "" },
  "MD029": false,
  "MD012": false,
  "MD047": false,
  "MD032": false,
  "MD031": false,
  "MD001": false,
  "MD009": false,
  "MD026": false,
  "MD040": false,
  "MD007": false
}
```

### `.markdownlint-cli2.jsonc`

This file configures the CLI tool behavior:

```jsonc
{
  "config": {
    "extends": ".markdownlint.json",
    "MD013": false,
    "MD012": false,
    "MD047": false
  },
  "globs": ["**/*.md"],
  "ignores": ["node_modules/**", "**/node_modules/**", "README.md"],
  "fix": false,
  "noProgress": true,
  "customRules": [],
  "markdownItPlugins": []
}
```

Key rules include:

- **Code blocks**: Must use fenced style (\`\`\`) rather than indented style
- **HTML**: Inline HTML is allowed when necessary (`MD033: false`)
- **Headings**: Duplicate headings are allowed (`MD024: false`)
- **Line length**: No strict line length limit (`MD013: false`)
- **Multiple blank lines**: Allowed for better readability (`MD012: false`)
- **List indentation**: Flexible list indentation allowed (`MD007: false`)
- **Code block language**: Language specification is optional (`MD040: false`)

Many rules have been disabled to prioritize content readability over strict formatting rules. This allows for more flexibility in documentation while still maintaining basic markdown best practices.

## Usage

### Manual Linting

You can manually lint markdown files using the following npm scripts:

```bash
# Check markdown files for issues
pnpm lint:md

# Fix markdown issues automatically where possible
pnpm lint:md:fix
```

### Automated Checks

Markdown linting is integrated into our development workflow in two ways:

1. **Pre-commit hooks**: Using lint-staged, markdown files are automatically checked and fixed when you commit changes
2. **CI workflow**: All markdown files are checked during continuous integration to ensure quality

## Integration with Other Tools

Markdown linting complements our existing tooling:

- **Oxfmt**: Handles JavaScript, TypeScript, and Astro files
- **markdownlint-cli2**: Handles Markdown documentation files
- **Husky + lint-staged**: Runs appropriate linters based on file type

## Editor Integration

For VS Code users, we recommend installing the "markdownlint" extension for real-time linting feedback:

- [markdownlint for VS Code](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

The extension will automatically use our project's `.markdownlint.json` configuration.