import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Drawer } from './Drawer.js'

describe('Drawer', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <Drawer>
        <div data-testid="content">Content</div>
      </Drawer>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <Drawer>
        <div>Content</div>
      </Drawer>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <Drawer>
        <div data-testid={testId}>Test Child</div>
      </Drawer>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
