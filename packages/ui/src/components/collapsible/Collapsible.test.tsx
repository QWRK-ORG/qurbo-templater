import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Collapsible } from './Collapsible.js'

describe('Collapsible', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <Collapsible>
        <div data-testid="content">Content</div>
      </Collapsible>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <Collapsible className="custom-class">
        <div>Content</div>
      </Collapsible>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <Collapsible>
        <div data-testid={testId}>Test Child</div>
      </Collapsible>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
