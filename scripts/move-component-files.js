#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all component files in the components directory
const componentsDir = path.join(__dirname, '../packages/ui/src/components');
const files = fs.readdirSync(componentsDir)
  .filter(file => 
    file.endsWith('.tsx') && 
    !file.includes('.test.tsx') && 
    file !== 'index.tsx' &&
    !file.startsWith('.')
  );

console.log(`Found ${files.length} component files to move`);

// Move each component file to its folder
for (const file of files) {
  const componentName = file.replace('.tsx', '');
  const folderName = componentName;
  const folderPath = path.join(componentsDir, folderName);
  
  // Skip if the component file doesn't exist in the root directory
  if (!fs.existsSync(path.join(componentsDir, file))) {
    console.log(`Skipping ${file}, file doesn't exist in root directory`);
    continue;
  }
  
  // Skip if the component folder doesn't exist
  if (!fs.existsSync(folderPath)) {
    console.log(`Skipping ${file}, folder ${folderName} doesn't exist`);
    continue;
  }
  
  // Convert component name to PascalCase
  const pascalCaseName = componentName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  // Use git mv to preserve history
  const sourceFile = path.join(componentsDir, file);
  const destFile = path.join(folderPath, `${pascalCaseName}.tsx`);
  
  try {
    execSync(`git mv "${sourceFile}" "${destFile}"`, { stdio: 'inherit' });
    console.log(`Moved ${file} to ${folderName}/${pascalCaseName}.tsx`);
  } catch (error) {
    console.error(`Error moving ${file}: ${error.message}`);
  }
}

console.log('Done moving component files');
