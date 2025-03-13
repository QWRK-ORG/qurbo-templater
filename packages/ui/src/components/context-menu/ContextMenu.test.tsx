import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ContextMenu } from './ContextMenu.js'

describe('ContextMenu', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <ContextMenu>
        <div data-testid="content">Content</div>
      </ContextMenu>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <ContextMenu>
        <div>Content</div>
      </ContextMenu>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <ContextMenu>
        <div data-testid={testId}>Test Child</div>
      </ContextMenu>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
