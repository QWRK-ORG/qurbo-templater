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

// For each component directory, create a test file if it doesn't exist
for (const dir of dirs) {
  // Convert component name to PascalCase
  const componentName = dir
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  const testPath = path.join(componentsDir, dir, `${componentName}.test.tsx`);
  
  // Skip if test file already exists
  if (fs.existsSync(testPath)) {
    console.log(`Skipping ${dir}, test file already exists`);
    continue;
  }
  
  // Create the test file content
  const testContent = `import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { ${componentName} } from "./${componentName}.js"

describe("${componentName}", () => {
  // Test case 1: Basic rendering
  it("renders the component correctly", () => {
    const { container } = render(
      <${componentName}>
        <div data-testid="content">Content</div>
      </${componentName}>
    )
    
    expect(container).toBeInTheDocument()
    expect(screen.getByTestId("content")).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it("applies custom className", () => {
    const { container } = render(
      <${componentName} className="custom-class">
        <div>Content</div>
      </${componentName}>
    )
    
    const element = container.firstChild
    expect(element).toHaveClass("custom-class")
  })

  // Test case 3: User interactions
  it("handles children correctly", () => {
    const testId = "test-child"
    render(
      <${componentName}>
        <div data-testid={testId}>Test Child</div>
      </${componentName}>
    )
    
    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent("Test Child")
  })
})
`;

  fs.writeFileSync(testPath, testContent);
  console.log(`Created test file for ${dir}`);
}

console.log('Done creating test files');
