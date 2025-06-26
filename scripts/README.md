# Development Scripts

This directory contains utility scripts for development and CI workflows.

## Available Scripts

### `test-ci.sh`

A utility script to test the CI workflow locally before pushing changes.

#### Usage

```bash
# Make the script executable (if needed)
chmod +x scripts/test-ci.sh

# Run the test script
./scripts/test-ci.sh
```

#### Features

- Runs all the individual commands from the CI workflow:
  - Installing dependencies
  - Checking formatting with Biome
  - Running JavaScript/TypeScript linting
  - Running Markdown linting
  - Running all linting checks at once
- Optionally runs the entire GitHub Actions workflow locally using `act`

#### Requirements

- For the full workflow test, [act](https://github.com/nektos/act) must be installed:
  ```bash
  # On macOS
  brew install act
  ```

#### See Also

For more details on testing CI locally, see [CI.md](../docs/CI.md#testing-ci-locally).