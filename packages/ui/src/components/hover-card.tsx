"use client"

import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A popup that appears when hovering over an element.
 * Composes Radix UI's HoverCard primitives with shadcn styling.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {number} [props.openDelay=700] - Delay in ms before opening the card
 * @param {number} [props.closeDelay=300] - Delay in ms before closing the card
 * @param {React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root>} props... - All Radix HoverCardRoot props
 * 
 * @example
 * <HoverCard openDelay={200} closeDelay={100}>
 *   <HoverCardTrigger>Hover me</HoverCardTrigger>
 *   <HoverCardContent>Preview content</HoverCardContent>
 * </HoverCard>
 * 
 * @see {@link https://ui.shadcn.com/docs/components/hover-card | Shadcn HoverCard Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/hover-card | Radix HoverCard Primitive}
 */
const HoverCard = HoverCardPrimitive.Root

/**
 * The element that triggers the HoverCard when hovered.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.asChild] - Whether to merge props with the child component
 * @param {React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger>} props... - All Radix Trigger props
 * 
 * @example
 * <HoverCardTrigger asChild>
 *   <Button variant="link">Profile</Button>
 * </HoverCardTrigger>
 */
const HoverCardTrigger = HoverCardPrimitive.Trigger

/**
 * The content shown when the HoverCard is open.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {'start' | 'center' | 'end'} [props.align='center'] - Alignment relative to trigger
 * @param {number} [props.sideOffset=4] - Offset from the trigger element
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>} props... - All Radix Content props
 * 
 * @example
 * <HoverCardContent className="w-80" align="start" sideOffset={10}>
 *   <div className="p-4">Profile Details</div>
 * </HoverCardContent>
 */
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-full rounded-md border bg-popover p-4 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-0 data-[state=open]:fade-in data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardContent, HoverCardTrigger }

