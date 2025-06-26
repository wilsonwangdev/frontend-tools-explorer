# Continuous Integration (CI) Setup

## Overview

This project uses GitHub Actions for continuous integration to ensure code quality through automated linting and formatting checks. The CI workflow runs on every push to the main branch and on pull requests.

## Workflow Configuration

The CI workflow is defined in `.github/workflows/lint.yml` and performs the following steps:

1. **Checkout Code**: Fetches the repository code with full history for proper lockfile validation
2. **Setup pnpm**: Installs the pnpm package manager (version 8.15.4)
3. **Setup Node.js**: Configures Node.js environment (version 22.17.0 LTS) with pnpm caching
4. **Install Dependencies**: Installs project dependencies using pnpm
5. **Check Formatting**: Verifies code formatting using Biome with `pnpm biome format .`
6. **Run Linting**: Performs code linting using Biome with `pnpm biome check .`

## Important Notes on Dependency Management

### Lockfile Handling

The CI workflow is configured to handle the pnpm lockfile (`pnpm-lock.yaml`) properly by:

- Using `fetch-depth: 0` in the checkout step to ensure the complete repository history is available
- Using standard `pnpm install` instead of `--frozen-lockfile` to avoid issues with lockfile compatibility in CI environments

### Node.js Version

The project supports both Node.js v20 LTS and v22 LTS versions, which is specified in:

- `package.json` via the `engines` field (set to `>=20.0.0`)
- `.nvmrc` file for local development with nvm (set to `20.19.3` by default)

Both Node.js v20 LTS (Iron) and v22 LTS (Jod) are fully supported. For more information on Node.js version requirements and benefits of using LTS versions, see [NODE-VERSION.md](./NODE-VERSION.md).

## Troubleshooting CI Issues

### Common Problems

1. **Lockfile Compatibility Issues**:
   - Error: `WARN Ignoring not compatible lockfile` or `ERR_PNPM_NO_LOCKFILE`
   - Solution: Ensure the lockfile is properly committed and use `pnpm install` without the `--frozen-lockfile` flag in CI

2. **Node.js Version Mismatch**:
   - Error: Issues related to Node.js version compatibility
   - Solution: Ensure the Node.js version in CI matches the requirements in `package.json`

### Resolving Dependency Issues

If you encounter dependency-related issues in CI:

1. Update your local environment to match the CI configuration
2. Run `pnpm install` locally to generate a fresh lockfile
3. Commit the updated lockfile
4. Push the changes to trigger a new CI run

For more detailed guidance on lockfile management and troubleshooting, see [LOCKFILE-MANAGEMENT.md](./LOCKFILE-MANAGEMENT.md).

## Best Practices

1. Always commit the `pnpm-lock.yaml` file to ensure consistent dependencies
2. Use the same Node.js and pnpm versions locally as specified in the CI workflow
3. Avoid manually editing the lockfile
4. When adding new dependencies, update the lockfile by running `pnpm install` and commit the changes
5. Use `pnpm install --no-frozen-lockfile` in CI environments to prevent lockfile-related failures
6. If you're experiencing CI failures related to the lockfile, try removing the `--frozen-lockfile` flag in your local environment