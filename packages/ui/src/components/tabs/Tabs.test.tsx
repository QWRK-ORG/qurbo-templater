import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Tabs } from './Tabs.js'

describe('Tabs', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <Tabs>
        <div data-testid="content">Content</div>
      </Tabs>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <Tabs className="custom-class">
        <div>Content</div>
      </Tabs>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <Tabs>
        <div data-testid={testId}>Test Child</div>
      </Tabs>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
