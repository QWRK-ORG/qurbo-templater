import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Combobox } from './Combobox.js'

describe('Combobox', () => {
  // Test case 1: Basic rendering
  it('renders the component correctly', () => {
    const { container } = render(
      <Combobox options={[]} value={''} onChange={() => {}}>
        {/* <div data-testid="content">Content</div> */}
      </Combobox>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    const { container } = render(
      <Combobox options={[]} value={''} onChange={() => {}}>
        {/* <div>Content</div> */}
      </Combobox>
    )

    const element = container.firstChild
    expect(element).toHaveClass('custom-class')
  })

  // Test case 3: User interactions
  it('handles children correctly', () => {
    const testId = 'test-child'
    render(
      <Combobox options={[]} value={''} onChange={() => {}}>
        {/* <div data-testid={testId}>Test Child</div> */}
      </Combobox>
    )

    const child = screen.getByTestId(testId)
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
