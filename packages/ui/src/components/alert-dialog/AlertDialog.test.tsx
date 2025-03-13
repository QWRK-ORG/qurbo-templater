import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "./AlertDialog.js"

describe("AlertDialog", () => {
  // Test case 1: Basic rendering
  it("renders the alert dialog trigger correctly", () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Alert Title</AlertDialogTitle>
            <AlertDialogDescription>Alert Description</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )

    expect(screen.getByText("Open Dialog")).toBeInTheDocument()
    // Content is not visible until triggered
    expect(screen.queryByText("Alert Title")).not.toBeInTheDocument()
  })

  // Test case 2: Props validation
  it("applies custom className to components", () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger className="custom-trigger">Open Dialog</AlertDialogTrigger>
        <AlertDialogContent className="custom-content">
          <AlertDialogHeader className="custom-header">
            <AlertDialogTitle className="custom-title">Alert Title</AlertDialogTitle>
            <AlertDialogDescription className="custom-description">Alert Description</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="custom-footer">
            <AlertDialogCancel className="custom-cancel">Cancel</AlertDialogCancel>
            <AlertDialogAction className="custom-action">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )

    const trigger = screen.getByText("Open Dialog")
    expect(trigger).toHaveClass("custom-trigger")
    
    // Other elements are not in the document until the dialog is opened
    fireEvent.click(trigger)
    
    // Now we can check for the other elements
    expect(document.querySelector(".custom-content")).toBeInTheDocument()
    expect(document.querySelector(".custom-header")).toBeInTheDocument()
    expect(document.querySelector(".custom-title")).toBeInTheDocument()
    expect(document.querySelector(".custom-description")).toBeInTheDocument()
    expect(document.querySelector(".custom-footer")).toBeInTheDocument()
    expect(document.querySelector(".custom-cancel")).toBeInTheDocument()
    expect(document.querySelector(".custom-action")).toBeInTheDocument()
  })

  // Test case 3: User interactions
  it("opens and closes the dialog when triggered", () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Alert Title</AlertDialogTitle>
            <AlertDialogDescription>Alert Description</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )

    // Initially the dialog content is not in the document
    expect(screen.queryByText("Alert Title")).not.toBeInTheDocument()
    
    // Click to open the dialog
    fireEvent.click(screen.getByText("Open Dialog"))
    
    // Now the dialog content should be in the document
    expect(screen.getByText("Alert Title")).toBeInTheDocument()
    expect(screen.getByText("Alert Description")).toBeInTheDocument()
    expect(screen.getByText("Cancel")).toBeInTheDocument()
    expect(screen.getByText("Continue")).toBeInTheDocument()
    
    // Click the cancel button to close the dialog
    fireEvent.click(screen.getByText("Cancel"))
    
    // Dialog content should no longer be in the document
    expect(screen.queryByText("Alert Title")).not.toBeInTheDocument()
  })
})
