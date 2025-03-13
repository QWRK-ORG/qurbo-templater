import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { AspectRatio } from "./AspectRatio.js"

describe("AspectRatio", () => {
  // Test case 1: Basic rendering
  it("renders the aspect ratio component correctly", () => {
    const { container } = render(
      <AspectRatio ratio={16 / 9}>
        <div data-testid="content">Content</div>
      </AspectRatio>
    )
    
    expect(container.querySelector("[data-slot='aspect-ratio']")).toBeInTheDocument()
    expect(container.querySelector("[data-testid='content']")).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it("applies custom className", () => {
    const { container } = render(
      <AspectRatio className="custom-aspect-ratio" ratio={4 / 3}>
        <div>Content</div>
      </AspectRatio>
    )
    
    const aspectRatio = container.querySelector("[data-slot='aspect-ratio']")
    expect(aspectRatio).toHaveClass("custom-aspect-ratio")
  })

  // Test case 3: Ratio testing
  it("applies the correct ratio", () => {
    const ratio = 16 / 9
    const { container } = render(
      <AspectRatio ratio={ratio}>
        <div>Content</div>
      </AspectRatio>
    )
    
    const aspectRatio = container.querySelector("[data-slot='aspect-ratio']")
    expect(aspectRatio).toHaveAttribute("style", expect.stringContaining(`--aspect-ratio: ${ratio}`))
  })
})
