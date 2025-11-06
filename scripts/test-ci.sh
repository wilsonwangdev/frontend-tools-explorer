#!/bin/bash

# Script to test CI workflow locally
# Requires 'act' to be installed: brew install act

echo "=== Testing CI Workflow Locally ==="
echo "This script will run the same checks as the CI workflow."
echo ""

# Check if act is installed
if ! command -v act &> /dev/null; then
    echo "Error: 'act' is not installed. Please install it with 'brew install act'."
    exit 1
fi

echo "=== Running individual commands ==="
echo "1. Installing dependencies..."
pnpm install --no-frozen-lockfile

echo "\n2. Checking formatting..."
pnpm oxfmt

echo "\n3. Running JavaScript/TypeScript linting..."
pnpm lint:js

echo "\n4. Running Markdown linting..."
pnpm lint:md

echo "\n5. Running all linting checks at once..."
pnpm lint

echo "\n=== Running GitHub Actions workflow with act ==="
echo "This will execute the actual GitHub Actions workflow locally."
echo "Note: This may take some time and requires Docker to be running."
echo ""

read -p "Do you want to run the GitHub Actions workflow with act? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    act -j lint
fi

echo "\n=== CI Testing Complete ==="