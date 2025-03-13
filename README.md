# Template Monorepo

This repository is a template monorepo designed to bootstrap a project to a usable state.

## Template Structure and Basic Code Format

This template is structured as a monorepo with the following main directories:

- `apps/web`: Contains the main web application.
- `packages/ui`: Contains the UI components.
- `packages/typescript-config`: Contains shared TypeScript configurations.

The basic code format follows the conventions of the Next.js framework and TypeScript.

## Shadcn Components, Typing, and Stories

The `packages/ui` directory contains shadcn components that have been rewritten with proper typing and stories. Each component is placed in its own directory with the following structure:

```
component-name/
├── index.ts            # Exports component and types
├── ComponentName.tsx   # Component implementation
├── types.ts            # TypeScript interfaces and types
└── ComponentName.test.tsx  # Component tests
```

## Web Application Consuming the `ui` Package

The web application in the `apps/web` directory consumes the `ui` package. The components from the `ui` package are imported and used in the web application as shown in the example below:

```tsx
import { Button } from "@workspace/ui/components/button"

export default function HomePage() {
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  )
}
```

## Biome Linting Setup

The project uses Biome for linting and formatting. The configuration for Biome is located in the `biome.json` file. The linting scripts are defined in the `package.json` files of the respective packages. Biome replaces ESLint and Prettier, providing faster linting and formatting with more strict rules enforcement. It is recommended to use the Biome VSCode extension for the best experience.

## Created Scripts

The following scripts have been created for the project:

- `build`: Builds the project.
- `dev`: Starts the development server.
- `lint`: Runs the linter.
- `lint:fix`: Fixes linting issues.
- `format`: Formats the code.
- `format:fix`: Fixes formatting issues.
- `check-types`: Checks TypeScript types.
- `fix-types`: Fixes TypeScript type issues.
- `validate`: Runs linting, type checking, and formatting.
- `fix-all`: Fixes all issues.
- `test`: Runs tests.
- `test:hooks`: Runs pre-commit hooks.
- `clean`: Cleans up the project by removing `node_modules`, `.next`, and `dist` directories.

## Additional Information

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Biome](https://biomejs.dev/)
- [Vitest](https://vitest.dev/)
