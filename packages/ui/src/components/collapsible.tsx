"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * An interactive component that can show/hide content.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.open - Controlled open state
 * @param {React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>} props... - All Radix CollapsibleRoot props
 * 
 * @example
 * <Collapsible open={isOpen} onOpenChange={setIsOpen}>
 *   <CollapsibleTrigger>Toggle</CollapsibleTrigger>
 *   <CollapsibleContent>Content</CollapsibleContent>
 * </Collapsible>
 * 
 * @see {@link https://ui.shadcn.com/docs/components/collapsible | Shadcn Collapsible Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/collapsible | Radix Collapsible Primitive}
 */
const Collapsible = CollapsiblePrimitive.Root

/**
 * The button that toggles the collapsible content.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.asChild] - Whether to merge props with the child component
 * @param {React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>} props... - All Radix Trigger props
 */
const CollapsibleTrigger = CollapsiblePrimitive.Trigger

/**
 * The collapsible content area.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>} props... - All Radix Content props
 */
const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
      className
    )}
    {...props}
  />
))
CollapsibleContent.displayName = CollapsiblePrimitive.Content.displayName

export { Collapsible, CollapsibleContent, CollapsibleTrigger }
