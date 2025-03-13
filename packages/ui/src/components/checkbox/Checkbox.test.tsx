import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Checkbox } from './Checkbox.js'

describe('Checkbox', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <Checkbox>
        <div data-testid="content">Content</div>
      </Checkbox>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <Checkbox className="custom-class">
        <div>Content</div>
      </Checkbox>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <Checkbox>
        <div data-testid={testId}>Test Child</div>
      </Checkbox>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
