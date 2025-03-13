#!/usr/bin/env node

/**
 * Component Structure Setup Script
 *
 * This script creates the proper folder structure for each component in the migration list
 * following the React component conventions.
 */

const fs = require('node:fs')
const path = require('node:path')

// Base directory for components
const BASE_DIR = path.join(process.cwd(), 'apps/deploy-fe/src/components')

// Component mappings from migration list
const componentMappings = [
  // Core Components
  { name: 'Dropdown', targetDir: 'core/dropdown' },
  { name: 'FormatMilliSecond', targetDir: 'core/format-milli-second' },
  { name: 'Logo', targetDir: 'core/logo' },
  { name: 'SearchBar', targetDir: 'core/search-bar' },
  { name: 'Stepper', targetDir: 'core/stepper' },
  { name: 'StopWatch', targetDir: 'core/stop-watch' },
  { name: 'VerticalStepper', targetDir: 'core/vertical-stepper' },

  // Layout Components - Navigation
  {
    name: 'GitHubSessionButton',
    targetDir: 'layout/navigation/github-session-button'
  },
  { name: 'LaconicIcon', targetDir: 'layout/navigation/laconic-icon' },
  {
    name: 'NavigationActions',
    targetDir: 'layout/navigation/navigation-actions'
  },
  { name: 'WalletSessionId', targetDir: 'layout/navigation/wallet-session-id' },

  // Layout Components - Screen Header
  { name: 'ActionButton', targetDir: 'layout/screen-header/action-button' },
  { name: 'Header', targetDir: 'layout/screen-header/header' },

  // Layout Components - Screen Wrapper
  { name: 'TabWrapper', targetDir: 'layout/screen-wrapper/tab-wrapper' },

  // Layout Components - Search
  { name: 'ProjectSearchBar', targetDir: 'layout/search/project-search-bar' }
]

/**
 * Create index.ts barrel file content
 */
function createIndexFileContent(componentName) {
  return `export * from './${componentName}';\nexport * from './types';\n`
}

/**
 * Create types.ts file content
 */
function createTypesFileContent(componentName) {
  return `export interface ${componentName}Props {\n  // Define component props here\n}\n`
}

/**
 * Create README.md file content
 */
function createReadmeContent(componentName) {
  return `# ${componentName} Component\n\n## Overview\nThis component was migrated from the original Laconic repository.\n\n## Usage\n\`\`\`tsx\nimport { ${componentName} } from '@/components/${componentName.toLowerCase()}';\n\n// Example usage\n<${componentName} />\n\`\`\`\n`
}

/**
 * Create placeholder component file content
 */
function createComponentFileContent(componentName) {
  return `import { FC } from 'react';\nimport { ${componentName}Props } from './types';\n\n/**\n * ${componentName} component\n */\nexport const ${componentName}: FC<${componentName}Props> = (props) => {\n  return (\n    <div>\n      {/* Component implementation will be migrated here */}\n    </div>\n  );\n};\n`
}

/**
 * Create the folder structure for a component
 */
function setupComponentStructure(mapping) {
  const { name, targetDir } = mapping
  const componentDir = path.join(BASE_DIR, targetDir)

  // Create component directory
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true })
    console.log(`Created directory: ${componentDir}`)
  }

  // Create index.ts barrel file
  const indexPath = path.join(componentDir, 'index.ts')
  if (!fs.existsSync(indexPath)) {
    fs.writeFileSync(indexPath, createIndexFileContent(name))
    console.log(`Created file: ${indexPath}`)
  }

  // Create types.ts file
  const typesPath = path.join(componentDir, 'types.ts')
  if (!fs.existsSync(typesPath)) {
    fs.writeFileSync(typesPath, createTypesFileContent(name))
    console.log(`Created file: ${typesPath}`)
  }

  // Create README.md file
  const readmePath = path.join(componentDir, 'README.md')
  if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, createReadmeContent(name))
    console.log(`Created file: ${readmePath}`)
  }

  // Create placeholder component file
  const componentPath = path.join(componentDir, `${name}.tsx`)
  if (!fs.existsSync(componentPath)) {
    fs.writeFileSync(componentPath, createComponentFileContent(name))
    console.log(`Created file: ${componentPath}`)
  }
}

/**
 * Main function
 */
function main() {
  console.log('Setting up component structure...')

  for (const mapping of componentMappings) {
    setupComponentStructure(mapping)
  }

  console.log('\nComponent structure setup complete!')
}

// Run the script
main()
