import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Popover } from './Popover.js'

describe('Popover', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <Popover>
        <div data-testid="content">Content</div>
      </Popover>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <Popover>
        <div>Content</div>
      </Popover>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <Popover>
        <div data-testid={testId}>Test Child</div>
      </Popover>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
