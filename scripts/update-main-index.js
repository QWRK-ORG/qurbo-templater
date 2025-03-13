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

// Read the current index.ts file
const indexPath = path.join(componentsDir, 'index.ts');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// For each component directory, update the export statement
for (const dir of dirs) {
  // Create the old and new export patterns
  const oldExport = `export * from './${dir}';`;
  const newExport = `export * from './${dir}/index.js';`;
  
  // Check if the old export exists and hasn't been updated yet
  if (indexContent.includes(oldExport) && !indexContent.includes(newExport)) {
    // Replace the old export with the new one
    indexContent = indexContent.replace(oldExport, newExport);
    console.log(`Updated export for ${dir}`);
  } else if (!indexContent.includes(newExport)) {
    console.log(`Export for ${dir} not found or already updated`);
  }
}

// Write the updated content back to the file
fs.writeFileSync(indexPath, indexContent);
console.log('Updated main index.ts file');
