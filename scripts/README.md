# Scripts and Hooks

This directory contains utility scripts for the project.

## Lefthook Configuration

The project uses [Lefthook](https://github.com/evilmartians/lefthook) for git hooks to ensure code quality before commits.

### Pre-commit Hooks

The pre-commit hooks run:

1. **Linting** - Checks and fixes code style issues
2. **Formatting** - Ensures consistent code formatting
3. **Type Checking** - Verifies TypeScript types

These hooks are configured in `lefthook.yaml` in the root directory.

### Usage

The hooks run automatically when you commit code. You can also run them manually:

```bash
# Run all pre-commit hooks
pnpm test:hooks

# Run individual commands
pnpm lint:fix
pnpm format:fix
pnpm check-types
pnpm fix-all
```

## VS Code Integration

TypeScript errors will show up directly in VS Code thanks to the configuration in `.vscode/settings.json`. 