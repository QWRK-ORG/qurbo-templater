#!/usr/bin/env node

import chalk from 'chalk'

const command = process.argv[2]
const files = process.argv.slice(3)

// Format the command name for display
const formatCommand = (cmd) => {
  switch (cmd) {
    case 'lint:fix':
      return chalk.blue.bold('LINTING')
    case 'format:fix':
      return chalk.magenta.bold('FORMATTING')
    case 'check-types':
      return chalk.yellow.bold('TYPE CHECKING')
    case 'fix-all':
      return chalk.green.bold('FIXING ALL ISSUES')
    default:
      return chalk.white.bold(cmd.toUpperCase())
  }
}

// Display a header for the command
console.log(
  `\n${chalk.gray('╔═════════════════════════════════════════════════════════════════════════════╗')}`
)
console.log(
  `${chalk.gray('║ ')}${chalk.white.bold(`LEFTHOOK: ${formatCommand(command)}`)}${chalk.gray(' ║')}`
)
console.log(
  `${chalk.gray('╚═════════════════════════════════════════════════════════════════════════════╝\n')}`
)

// If we have files, display them
if (files.length > 0) {
  console.log(chalk.gray('Files being processed:'))
  for (const file of files) {
    console.log(chalk.cyan(`  → ${file}`))
  }
  console.log('')
}

// Execute the original command
const { execSync } = await import('node:child_process')
try {
  // Construct the command based on what was passed
  let fullCommand
  if (files.length > 0 && command !== 'check-types') {
    // For commands that support specific files
    fullCommand = `pnpm ${command} ${files.join(' ')}`
  } else {
    // For commands that run on the whole project
    fullCommand = `pnpm ${command}`
  }

  // Execute the command
  execSync(fullCommand, { stdio: 'inherit' })

  // Show success message
  console.log(
    `\n${chalk.green.bold('✓ SUCCESS')}${chalk.green(` ${formatCommand(command)} completed successfully`)}`
  )
} catch (error) {
  // Show error message
  console.log(
    `\n${chalk.red.bold('✗ ERROR')}${chalk.red(` ${formatCommand(command)} failed`)}`
  )
  process.exit(1)
}
