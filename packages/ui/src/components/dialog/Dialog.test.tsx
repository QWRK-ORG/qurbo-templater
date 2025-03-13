import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Dialog } from './Dialog.js'

describe('Dialog', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <Dialog>
        <div data-testid="content">Content</div>
      </Dialog>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <Dialog>
        <div>Content</div>
      </Dialog>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <Dialog>
        <div data-testid={testId}>Test Child</div>
      </Dialog>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
