import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Slider } from './Slider.js'

describe('Slider', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <Slider>
        <div data-testid="content">Content</div>
      </Slider>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <Slider className="custom-class">
        <div>Content</div>
      </Slider>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <Slider>
        <div data-testid={testId}>Test Child</div>
      </Slider>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
