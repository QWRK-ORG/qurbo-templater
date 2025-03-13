import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Switch } from './Switch.js'

describe('Switch', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <Switch>
        <div data-testid="content">Content</div>
      </Switch>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <Switch className="custom-class">
        <div>Content</div>
      </Switch>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <Switch>
        <div data-testid={testId}>Test Child</div>
      </Switch>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
