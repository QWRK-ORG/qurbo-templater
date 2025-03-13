import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ToggleGroup } from './ToggleGroup.js'

describe('ToggleGroup', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <ToggleGroup type="single">
        <div data-testid="content">Content</div>
      </ToggleGroup>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <ToggleGroup type="single" className="custom-class">
        <div>Content</div>
      </ToggleGroup>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <ToggleGroup type="single">
        <div data-testid={testId}>Test Child</div>
      </ToggleGroup>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
