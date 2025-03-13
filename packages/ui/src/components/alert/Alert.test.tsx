import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Alert, AlertDescription, AlertTitle } from "./Alert.js"

describe("Alert", () => {
  // Test case 1: Basic rendering
  it("renders the alert component correctly", () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert Description</AlertDescription>
      </Alert>
    )

    expect(screen.getByText("Alert Title")).toBeInTheDocument()
    expect(screen.getByText("Alert Description")).toBeInTheDocument()
  })

  // Test case 2: Props validation
  it("applies custom className to components", () => {
    render(
      <Alert className="custom-alert">
        <AlertTitle className="custom-title">Alert Title</AlertTitle>
        <AlertDescription className="custom-description">Alert Description</AlertDescription>
      </Alert>
    )

    const alert = screen.getByRole("alert")
    expect(alert).toHaveClass("custom-alert")
    
    const title = screen.getByText("Alert Title")
    expect(title).toHaveClass("custom-title")
    
    const description = screen.getByText("Alert Description")
    expect(description).toHaveClass("custom-description")
  })

  // Test case 3: Variant testing
  it("applies the correct variant styles", () => {
    render(
      <Alert variant="destructive" data-testid="destructive-alert">
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>This is a destructive alert</AlertDescription>
      </Alert>
    )

    const alert = screen.getByTestId("destructive-alert")
    expect(alert).toHaveClass("text-destructive")
  })
})
