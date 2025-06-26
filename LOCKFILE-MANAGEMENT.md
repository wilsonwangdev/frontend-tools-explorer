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

## Additional Resources

- [pnpm Documentation on Lockfile](https://pnpm.io/lockfile)
- [CI Setup Documentation](./CI.md)
- [Package Manager Documentation](./PACKAGE-MANAGER.md)