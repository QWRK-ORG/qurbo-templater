import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DropdownMenu } from './DropdownMenu.js'

describe('DropdownMenu', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <DropdownMenu>
        <div data-testid="content">Content</div>
      </DropdownMenu>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <DropdownMenu>
        <div>Content</div>
      </DropdownMenu>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <DropdownMenu>
        <div data-testid={testId}>Test Child</div>
      </DropdownMenu>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
