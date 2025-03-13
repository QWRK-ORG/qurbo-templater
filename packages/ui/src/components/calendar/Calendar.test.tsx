import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Calendar } from './Calendar.js'

describe('Calendar', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(<Calendar />)

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(<Calendar className="custom-class" />)

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(<Calendar />)

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
