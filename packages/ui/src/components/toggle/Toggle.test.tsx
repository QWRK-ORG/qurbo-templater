import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Toggle } from './Toggle.js'

describe('Toggle', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <Toggle>
        <div data-testid="content">Content</div>
      </Toggle>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <Toggle className="custom-class">
        <div>Content</div>
      </Toggle>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <Toggle>
        <div data-testid={testId}>Test Child</div>
      </Toggle>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
