import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HoverCard } from './HoverCard.js'

describe('HoverCard', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <HoverCard>
        <div data-testid="content">Content</div>
      </HoverCard>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <HoverCard>
        <div>Content</div>
      </HoverCard>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <HoverCard>
        <div data-testid={testId}>Test Child</div>
      </HoverCard>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
