#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all component directories
const componentsDir = path.join(__dirname, '../packages/ui/src/components');
const dirs = fs.readdirSync(componentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.') && dirent.name !== 'deprecated-with-types')
  .map(dirent => dirent.name);

console.log(`Found ${dirs.length} component directories`);

// Create index.ts files for each component
dirs.forEach(dir => {
  const componentName = dir.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
  const indexPath = path.join(componentsDir, dir, 'index.ts');
  
  // Skip if index.ts already exists
  if (fs.existsSync(indexPath)) {
    console.log(`Skipping ${dir}, index.ts already exists`);
    return;
  }
  
  const indexContent = `/**
 * ${componentName} component module
 * 
 * @packageDocumentation
 */

export * from "./${componentName}.js";
`;

  fs.writeFileSync(indexPath, indexContent);
  console.log(`Created index.ts for ${dir}`);
});

console.log('Done creating index.ts files');
