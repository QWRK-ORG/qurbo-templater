import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DatePicker } from './DatePicker.js'

describe('DatePicker', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <DatePicker setDate={() => {}} date={new Date()} />
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <DatePicker setDate={() => {}} date={new Date()} />
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(<DatePicker setDate={() => {}} date={new Date()} />)

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
