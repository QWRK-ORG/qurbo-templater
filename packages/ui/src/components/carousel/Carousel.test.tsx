import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Carousel } from './Carousel.js'

describe('Carousel', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <Carousel>
        <div data-testid="content">Content</div>
      </Carousel>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <Carousel className="custom-class">
        <div>Content</div>
      </Carousel>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <Carousel>
        <div data-testid={testId}>Test Child</div>
      </Carousel>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
