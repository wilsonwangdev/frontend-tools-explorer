# Continuous Integration (CI) Setup

## Overview

This project uses GitHub Actions for continuous integration to ensure code quality through automated linting and formatting checks. The CI workflow runs on every push to the main branch and on pull requests.

## Workflow Configuration

The CI workflow is defined in `.github/workflows/lint.yml` and performs the following steps:

1. **Checkout Code**: Fetches the repository code with full history for proper lockfile validation
2. **Setup pnpm**: Installs the pnpm package manager (version 8.15.4)
3. **Setup Node.js**: Configures Node.js environment with both Node.js v20 LTS and v22 LTS using a matrix strategy
4. **Install Dependencies**: Installs project dependencies using pnpm
5. **Check Formatting**: Verifies code formatting using Biome with `pnpm biome format .`
6. **Run JavaScript/TypeScript Linting**: Performs code linting using Biome with `pnpm biome check .`
7. **Run Markdown Linting**: Checks markdown files with `pnpm lint:md`
8. **Run Combined Linting**: Executes all linting checks with `pnpm lint`

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

## Testing CI Locally

Before pushing changes to CI configuration or code that might affect CI, it's recommended to test the workflow locally:

### Using the Test Script

We provide a convenient script to test the CI workflow locally:

```bash
# Make the script executable (if needed)
chmod +x scripts/test-ci.sh

# Run the test script
./scripts/test-ci.sh
```

This script will:
1. Run all the individual commands from the CI workflow
2. Optionally run the entire GitHub Actions workflow locally using `act`

### Manual Testing

If you prefer to test manually, follow these steps:

1. **Run the same commands locally** that are executed in the CI workflow:
   ```bash
   # Install dependencies (same as CI)
   pnpm install --no-frozen-lockfile
   
   # Check formatting
   pnpm biome format .
   
   # Run JavaScript/TypeScript linting
   pnpm lint:js
   
   # Lint Markdown files
   pnpm lint:md
   
   # Run all linting checks at once
   pnpm lint
   ```

2. **Test with multiple Node.js versions** if possible:
   - Use a version manager like nvm to switch between Node.js versions
   - Test with both Node.js v20 LTS and v22 LTS as specified in the CI matrix

3. **Use GitHub Actions local runners** for more comprehensive testing:
   - [act](https://github.com/nektos/act) allows running GitHub Actions workflows locally
   - Install with: `brew install act` (on macOS)
   - Run with: `act -j lint` to execute the lint job

4. **Validate workflow files** for syntax errors:
   - Use the [GitHub Actions Workflow Validator](https://github.com/marketplace/actions/workflow-validator) or online tools

## Best Practices

1. Always commit the `pnpm-lock.yaml` file to ensure consistent dependencies
2. Use the same Node.js and pnpm versions locally as specified in the CI workflow
3. Avoid manually editing the lockfile
4. When adding new dependencies, update the lockfile by running `pnpm install` and commit the changes
5. Use `pnpm install --no-frozen-lockfile` in CI environments to prevent lockfile-related failures
6. If you're experiencing CI failures related to the lockfile, try removing the `--frozen-lockfile` flag in your local environment
7. Always test CI workflow changes locally before pushing to the repository