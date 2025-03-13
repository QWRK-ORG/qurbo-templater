import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion.js"

describe("Accordion", () => {
  // Test case 1: Basic rendering
  it("renders the accordion component correctly", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger Text</AccordionTrigger>
          <AccordionContent>Content Text</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByText("Trigger Text")).toBeInTheDocument()
    // Content is initially hidden in a collapsible accordion
    expect(screen.queryByText("Content Text")).not.toBeVisible()
  })

  // Test case 2: Props validation
  it("applies custom className to components", () => {
    render(
      <Accordion type="single" collapsible className="custom-accordion">
        <AccordionItem value="item-1" className="custom-item">
          <AccordionTrigger className="custom-trigger">Trigger Text</AccordionTrigger>
          <AccordionContent className="custom-content">Content Text</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(document.querySelector(".custom-accordion")).toBeInTheDocument()
    expect(document.querySelector(".custom-item")).toBeInTheDocument()
    expect(document.querySelector(".custom-trigger")).toBeInTheDocument()
    expect(document.querySelector(".custom-content")).toBeInTheDocument()
  })

  // Test case 3: User interactions
  it("expands/collapses content when trigger is clicked", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger Text</AccordionTrigger>
          <AccordionContent>Content Text</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const trigger = screen.getByText("Trigger Text")
    
    // Initially content should be hidden
    expect(screen.queryByText("Content Text")).not.toBeVisible()
    
    // Click to expand
    fireEvent.click(trigger)
    expect(screen.getByText("Content Text")).toBeVisible()
    
    // Click again to collapse
    fireEvent.click(trigger)
    expect(screen.queryByText("Content Text")).not.toBeVisible()
  })
})
