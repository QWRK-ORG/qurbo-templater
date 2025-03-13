import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Menubar } from './Menubar.js'

describe('Menubar', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <Menubar>
        <div data-testid="content">Content</div>
      </Menubar>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <Menubar className="custom-class">
        <div>Content</div>
      </Menubar>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <Menubar>
        <div data-testid={testId}>Test Child</div>
      </Menubar>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
