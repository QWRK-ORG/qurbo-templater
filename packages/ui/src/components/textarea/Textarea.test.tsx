import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Textarea } from './Textarea.js'

describe('Textarea', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <Textarea>
        <div data-testid="content">Content</div>
      </Textarea>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <Textarea className="custom-class">
        <div>Content</div>
      </Textarea>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <Textarea>
        <div data-testid={testId}>Test Child</div>
      </Textarea>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
