import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Command } from './Command.js'

describe('Command', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <Command>
        <div data-testid="content">Content</div>
      </Command>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <Command className="custom-class">
        <div>Content</div>
      </Command>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <Command>
        <div data-testid={testId}>Test Child</div>
      </Command>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
