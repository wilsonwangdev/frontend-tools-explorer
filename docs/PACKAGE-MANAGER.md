# Package Manager and Node.js Requirements

## Overview

This project enforces specific requirements for the development environment to ensure consistency across all contributors and deployments.

## Requirements

### Node.js Version

- **Minimum required version**: v20.0.0
- **Recommended versions**: 
  - v20.19.3 (LTS - Iron) - Default version in .nvmrc
  - v22.17.0 (LTS - Jod) - Also fully supported

This project supports both current LTS (Long Term Support) versions of Node.js for maximum stability and security:

- **Node.js v20 LTS (Iron)**: Active support until April 2025, maintenance until April 2026
- **Node.js v22 LTS (Jod)**: Active support until October 2025, maintenance until April 2027

Benefits of using the LTS version:
1. Longer support window with security updates
2. Greater stability for production environments
3. Compatibility with the latest dependencies
4. Performance improvements over previous versions

### Package Manager

- **Required package manager**: pnpm v8.0.0 or higher
- **Current version used**: pnpm v8.15.4

## Why pnpm?

We've chosen pnpm as the required package manager for this project for several reasons:

1. **Disk space efficiency**: pnpm uses a content-addressable store which saves disk space and speeds up installation.
2. **Strict dependency resolution**: pnpm creates a non-flat `node_modules` structure that prevents access to packages that aren't explicitly declared as dependencies.
3. **Performance**: pnpm is generally faster than npm and Yarn Classic for installation operations.
4. **Consistency**: Using a single package manager ensures consistent dependency resolution across all development environments.

## Configuration Files

The following files enforce these requirements:

- `.nvmrc`: Specifies the Node.js version for tools like nvm
- `.npmrc`: Contains npm-related configurations
- `.pnpmrc`: Contains pnpm-specific configurations
- `package.json`: Contains the `engines` and `packageManager` fields

## Enforcement

These requirements are enforced through:

1. The `engines` field in `package.json`
2. The `packageManager` field in `package.json`
3. A simple preinstall script that prevents npm/yarn usage
4. Configuration in `.npmrc` and `.pnpmrc`

## Installation

Since we require Node.js 20.3.0 or higher, we recommend using Corepack to manage pnpm. Corepack is included with Node.js 20+ and provides native package manager version management.

### Using Corepack (Recommended)

```bash
# Enable Corepack (only needed once)
corepack enable

# Use the latest pnpm version
corepack prepare pnpm@latest --activate
```

This approach has several advantages:

1. No need to install pnpm globally
2. Automatically uses the correct version specified in package.json
3. Built into Node.js 20+
4. Ensures consistent package manager versions across all developers

### Alternative Installation

If you prefer not to use Corepack, you can install pnpm globally:

```bash
npm install -g pnpm
```

## Troubleshooting

### Common Issues

If you encounter issues related to Node.js version or package manager:

1. Check your Node.js version with `node -v`
2. Install the required Node.js version
3. Enable Corepack with `corepack enable`
4. Prepare pnpm with `corepack prepare pnpm@latest --activate`
5. Use `pnpm install` to install dependencies

### Network Issues with Corepack

If you encounter network errors when Corepack tries to download pnpm (especially during git commits with Husky):

```text
Corepack is about to download https://registry.npmjs.org/pnpm/-/pnpm-8.15.4.tgz.
Internal Error: Error when performing the request...
```

Try these solutions:

1. **Install pnpm globally** as a fallback:

   ```bash
   npm install -g pnpm@8.15.4
   ```

   This is the simplest solution and recommended for most users.

2. **Configure npm registry** if you're behind a proxy or firewall:

   ```bash
   npm config set registry https://registry.npmjs.org/
   ```

3. **Disable Husky temporarily** if needed for commits:

   ```bash
   git commit --no-verify -m "Your commit message"
   ```

4. **Check network connectivity** to registry.npmjs.org

For more information on pnpm, visit [the official pnpm documentation](https://pnpm.io/).

For more information on Corepack, visit [the Node.js Corepack documentation](https://nodejs.org/api/corepack.html) and [Corepack Troubleshooting](https://github.com/nodejs/corepack#troubleshooting).