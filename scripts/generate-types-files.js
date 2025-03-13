#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all component directories
const componentsDir = path.join(__dirname, '../packages/ui/src/components');
const dirs = fs.readdirSync(componentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.') && dirent.name !== 'deprecated-with-types')
  .map(dirent => dirent.name)
  .sort(); // Sort alphabetically

console.log(`Found ${dirs.length} component directories`);

// For each component directory, create a types.ts file if it doesn't exist
for (const dir of dirs) {
  const typesPath = path.join(componentsDir, dir, 'types.ts');
  
  // Skip if types.ts already exists
  if (fs.existsSync(typesPath)) {
    console.log(`Skipping ${dir}, types.ts already exists`);
    continue;
  }
  
  // Convert component name to PascalCase
  const componentName = dir
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  // Create the types.ts content
  const typesContent = `/**
 * Type definitions for the ${componentName} component
 * 
 * @packageDocumentation
 */

import type * as React from "react"

/**
 * Props for the ${componentName} component
 * 
 * @public
 * @interface
 */
export interface ${componentName}Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Additional CSS class names
   */
  className?: string
  /**
   * The content of the component
   */
  children?: React.ReactNode
}
`;

  fs.writeFileSync(typesPath, typesContent);
  console.log(`Created types.ts for ${dir}`);
}

console.log('Done creating types.ts files');
