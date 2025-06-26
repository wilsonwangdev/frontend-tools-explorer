# Lockfile Management

## Overview

This document provides guidance on managing the pnpm lockfile (`pnpm-lock.yaml`) in this project, particularly in CI environments where lockfile compatibility issues can occur.

## Understanding Lockfile Behavior

### What is the Lockfile?

The `pnpm-lock.yaml` file is a crucial part of dependency management that:

- Records exact versions of all dependencies
- Ensures consistent installations across different environments
- Speeds up installation by providing a pre-computed dependency tree

### Frozen vs. Non-Frozen Lockfile

pnpm offers two main approaches to handling lockfiles during installation:

1. **Frozen Lockfile** (`--frozen-lockfile` flag):
   - Ensures the lockfile isn't modified during installation
   - Fails if the lockfile is out of sync with package.json
   - Default behavior in CI environments

2. **Non-Frozen Lockfile** (`--no-frozen-lockfile` flag):
   - Updates the lockfile if it's out of sync with package.json
   - More flexible but less strict about dependency consistency
   - Recommended for development environments

## Common Lockfile Issues

### ERR_PNPM_OUTDATED_LOCKFILE

This error occurs when the lockfile doesn't match the dependencies specified in package.json. The error message looks like:

```
ERR_PNPM_OUTDATED_LOCKFILE  Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date with package.json
```

Common causes:
1. Adding/removing dependencies without updating the lockfile
2. Different pnpm versions generating incompatible lockfiles
3. Merge conflicts in the lockfile that weren't properly resolved

### ERR_PNPM_UNSUPPORTED_ENGINE

This error occurs when there's a mismatch between your Node.js version and what a dependency requires. The error message looks like:

```
ERR_PNPM_UNSUPPORTED_ENGINE  Unsupported environment (bad pnpm and/or Node.js version)

Your Node version is incompatible with "<package-name>".

Expected version: <expected-version-range>
Got: <your-version>
```

Common causes:
1. Using a Node.js version that's incompatible with a dependency's requirements
2. Dependencies requiring newer Node.js versions than specified in your project
3. Outdated dependencies with strict Node.js version requirements

#### Example: nopt Package Requirements

A common example is the `nopt` package (used by many development tools) which requires:
```
^18.17.0 || >=20.5.0
```

If your project uses Node.js v20.3.0 but has dependencies that use `nopt@8.1.0` (directly or indirectly), you'll encounter this error. The solution is to update your Node.js version to v20.5.0 or higher.

### Using LTS Versions

This project now uses Node.js v22 LTS (codename 'Jod'), which provides several benefits for dependency management:

1. **Longer support window**: LTS versions receive security updates and bug fixes for a longer period (30 months total)
2. **Wider compatibility**: Most npm packages are tested against LTS versions first
3. **Fewer dependency conflicts**: LTS versions have more stable APIs, reducing the likelihood of compatibility issues
4. **Predictable upgrade path**: Clear timeline for when to plan the next major version upgrade

## Best Practices

### For Local Development

1. **Always commit the lockfile**: The `pnpm-lock.yaml` file should always be committed to version control
2. **Use the same pnpm version**: Ensure you're using the version specified in `packageManager` field in package.json
3. **Update the lockfile when changing dependencies**:
   ```bash
   pnpm install
   ```
4. **Avoid manual edits**: Never edit the lockfile manually

### For CI Environments

1. **Use `--no-frozen-lockfile` in CI**:
   ```yaml
   # In GitHub Actions workflow
   - name: Install dependencies
     run: pnpm install --no-frozen-lockfile
   ```

2. **Ensure complete repository history**:
   ```yaml
   # In GitHub Actions workflow
   - name: Checkout code
     uses: actions/checkout@v4
     with:
       fetch-depth: 0  # Fetch all history for proper lockfile validation
   ```

## Troubleshooting

### Lockfile Issues

If you encounter lockfile issues:

1. **Update your local environment**:
   ```bash
   # Enable Corepack (if using Node.js 20+)
   corepack enable
   
   # Prepare the correct pnpm version
   corepack prepare pnpm@8.15.4 --activate
   ```

2. **Regenerate the lockfile**:
   ```bash
   # Remove node_modules and lockfile
   rm -rf node_modules pnpm-lock.yaml
   
   # Reinstall dependencies
   pnpm install
   ```

3. **Commit the updated lockfile**:
   ```bash
   git add pnpm-lock.yaml
   git commit -m "Update lockfile"
   ```

### Node.js Version Issues

If you encounter `ERR_PNPM_UNSUPPORTED_ENGINE` errors:

1. **Check your Node.js version**:
   ```bash
   node -v
   ```

2. **Update Node.js to the required LTS version**:
   - If using nvm:
     ```bash
     # Install the required LTS version
     nvm install 22.17.0  # Current LTS version
     
     # Use the installed version
     nvm use 22.17.0
     ```
   - If using Corepack (recommended):
     ```bash
     # Enable Corepack if not already enabled
     corepack enable
     
     # Update Node.js using your system's package manager or from nodejs.org
     ```
   - If using other Node.js installation methods, download and install the LTS version from [nodejs.org](https://nodejs.org/)

3. **Update project configuration** (if necessary):
   - Update `.nvmrc` to specify the LTS Node.js version (currently 22.17.0)
   - Update `engines` field in `package.json` to require Node.js >=22.0.0
   - Consider adding a note in your README about using the LTS version

4. **Reinstall dependencies with the correct Node.js version**:
   ```bash
   rm -rf node_modules
   pnpm install
   ```

## Additional Resources

- [pnpm Documentation on Lockfile](https://pnpm.io/lockfile)
- [CI Setup Documentation](./CI.md)
- [Package Manager Documentation](./PACKAGE-MANAGER.md)