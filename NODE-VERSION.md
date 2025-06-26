# Node.js Version Requirements

This project supports both Node.js v20 LTS (codename 'Iron') and Node.js v22 LTS (codename 'Jod') to ensure stability, security, and access to modern features. This document explains our Node.js version requirements and how to set up your environment.

### What is LTS?

LTS stands for "Long Term Support." The Node.js project maintains multiple release lines simultaneously:

- **Current**: The latest features but may have breaking changes (odd-numbered versions like v23)
- **Active LTS**: Stable release recommended for most users (even-numbered versions like v20 and v22)
- **Maintenance LTS**: Older LTS versions receiving critical fixes only

Our supported LTS versions have the following support schedules:

- **Node.js v20 (Iron)**: Entered LTS on October 24, 2023, with active support until April 2025, followed by maintenance support until April 2026.
- **Node.js v22 (Jod)**: Entered LTS on October 29, 2024, with active support until October 2025, followed by maintenance support until April 2027.

### Benefits of Using LTS

1. **Stability**: LTS versions prioritize stability over new features, making them ideal for production applications
2. **Security**: LTS versions receive security updates for a longer period (30 months total)
3. **Compatibility**: Most npm packages are tested against LTS versions first
4. **Performance**: Each LTS version includes performance improvements over previous versions
5. **Predictable upgrade path**: Clear timeline for when to plan the next major version upgrade

### Supported LTS Features

#### Node.js v20 LTS (Iron) Features

1. **Permission Model**: Enhanced security with the experimental permission model
2. **Single Executable Applications**: Improved support for creating standalone executables
3. **Stable Test Runner**: Built-in test runner for easier testing
4. **Stable WebStreams**: Improved streaming capabilities
5. **V8 JavaScript Engine**: Includes V8 11.3 with performance improvements

#### Node.js v22 LTS (Jod) Features

1. **Built-in WebSocket Client**: Now enabled by default for browser compatibility
2. **Stable Watch Mode**: The `--watch` flag is now stable, eliminating the need for tools like nodemon
3. **ESM Graphs in require()**: Simplified module interoperability
4. **Simplified Script Execution**: The experimental `--run` flag provides faster script execution
5. **V8 Engine Upgrade**: Improved performance and new JavaScript features

## Version Requirements

- **Minimum required version**: v20.0.0
- **Recommended versions**: 
  - v20.19.3 (LTS - Iron) - Default version in .nvmrc
  - v22.17.0 (LTS - Jod) - Also fully supported

## Setting Up the Correct Version

### Using nvm (Node Version Manager)

```bash
# Install the default LTS version (v20 LTS - Iron)
nvm install 20.19.3

# Use the installed version
nvm use 20.19.3

# Or install and use Node.js v22 LTS (Jod)
nvm install 22.17.0
nvm use 22.17.0
```

### Using Corepack (Recommended)

```bash
# Enable Corepack if not already enabled
corepack enable

# Update Node.js using your system's package manager or from nodejs.org
```

### Direct Installation

Download and install the LTS version from [nodejs.org](https://nodejs.org/).

## Troubleshooting

If you encounter version-related issues:

1. Check your current Node.js version:
   ```bash
   node -v
   ```

2. If using nvm, ensure you're using one of the supported LTS versions:
   ```bash
   # For Node.js v20 LTS (default)
   nvm use 20
   
   # Or for Node.js v22 LTS
   nvm use 22
   ```

3. If you cannot upgrade to a supported version immediately, you can try using the `--no-engine-strict` flag with pnpm:
   ```bash
   pnpm install --no-engine-strict
   ```
   Note: This is not recommended for long-term use.

## Additional Resources

- [Node.js Release Schedule](https://github.com/nodejs/Release)
- [Node.js LTS Documentation](https://nodejs.org/en/about/previous-releases)
- [Package Manager Documentation](./PACKAGE-MANAGER.md)
- [Lockfile Management](./LOCKFILE-MANAGEMENT.md)