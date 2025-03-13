import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Avatar, AvatarFallback, AvatarImage } from './Avatar.js'

describe('Avatar', () => {
  // Test case 1: Basic rendering
  it('renders the avatar component correctly', () => {
    render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.jpg" alt="User avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    )

    const avatar = screen.getByRole('img', { hidden: true })
    expect(avatar).toBeInTheDocument()

    const fallback = screen.getByText('JD')
    expect(fallback).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it('applies custom className', () => {
    render(
      <Avatar className="custom-avatar">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    )

    const avatar = screen.getByText('JD').closest('[data-slot="avatar"]')
    expect(avatar).toHaveClass('custom-avatar')
  })

  // Test case 3: Fallback rendering
  it('renders fallback when image fails to load', () => {
    render(
      <Avatar>
        <AvatarImage src="invalid-url.jpg" alt="Invalid avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    )

    // Trigger onError on the image
    const image = screen.getByRole('img', { hidden: true })
    fireEvent.error(image)

    const fallback = screen.getByText('JD')
    expect(fallback).toBeVisible()
  })
})
