import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sheet } from './Sheet.js'

describe('Sheet', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <Sheet>
        <div data-testid="content">Content</div>
      </Sheet>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <Sheet>
        <div>Content</div>
      </Sheet>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <Sheet>
        <div data-testid={testId}>Test Child</div>
      </Sheet>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
