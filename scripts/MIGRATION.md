# UI Component Migration Process

This document outlines the process for migrating UI components from flat files to a folder-based structure with improved TypeScript typings, TSDoc, and Vitest tests.

## Migration Phases

The migration is divided into three phases:

### Phase 1: Structure Setup

- Create folders for each component
- Add index.ts files that re-export the components
- Move and rename component files using git mv to preserve history
- Update the main index.ts file with new import paths

### Phase 2: Types and Documentation

- Create types.ts files with TypeScript interfaces and proper TSDoc
- Extract type definitions from existing components and enhance them
- Reference patterns in the deprecated-with-types directory but improve upon them
- Ensure backward compatibility through proper exports
- Type definitions must include TSDoc comments for all public interfaces

### Phase 3: Testing

- Create ComponentName.test.tsx files with Vitest tests
- Test files require minimum 3 test cases: rendering, props validation, user interactions
- Tests should cover basic rendering and key functionality

## Scripts

The following scripts have been created to automate the migration process:

### generate-index-files.js

Creates index.ts files for all component directories. Each index.ts file exports the component from its corresponding ComponentName.tsx file.

```bash
node scripts/generate-index-files.js
```

### move-component-files.js

Moves component files from the root directory to their respective folders and renames them to follow the PascalCase convention. Uses git mv to preserve history.

```bash
node scripts/move-component-files.js
```

### update-main-index.js

Updates the main index.ts file to import components from their new locations.

```bash
node scripts/update-main-index.js
```

### generate-types-files.js

Creates types.ts files for all component directories with basic TypeScript interfaces and TSDoc comments.

```bash
node scripts/generate-types-files.js
```

### generate-test-files.js

Creates test files for all components with basic test cases for rendering, props validation, and user interactions.

```bash
node scripts/generate-test-files.js
```

## Component Structure

Each component follows this folder structure:

```
component-name/
├── index.ts            # Exports component and types
├── ComponentName.tsx   # Component implementation
├── types.ts            # TypeScript interfaces and types
└── ComponentName.test.tsx  # Component tests
```

## Progress Tracking

Progress is tracked in the `qat.yml` file, which includes:

- Phase status (Not Started, In Progress, Completed)
- Task status within each phase
- Component status (Completed, In Progress, Pending)

## Constraints

- Process components in bulk by phase rather than individually
- Track progress by phase completion rather than by individual components
- Preserve existing component functionality
- Component migration must preserve git history using git mv commands
- Follow component structure patterns defined in this document
- Use scripts for bulk operations where possible
