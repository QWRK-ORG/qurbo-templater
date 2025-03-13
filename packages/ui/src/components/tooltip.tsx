"use client"

import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import * as React from "react"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

/**
 * A popup that displays information related to an element when focused or hovered.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {number} [props.delayDuration=300] - Delay in ms before showing the tooltip
 * @param {React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>} props... - All Radix TooltipRoot props
 * 
 * @example
 * <Tooltip>
 *   <TooltipTrigger>Hover me</TooltipTrigger>
 *   <TooltipContent>Additional information</TooltipContent>
 * </Tooltip>
 * 
 * @see {@link https://ui.shadcn.com/docs/components/tooltip | Shadcn Tooltip Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/tooltip | Radix Tooltip Primitive}
 */
const Tooltip = TooltipPrimitive.Root

/**
 * The element that triggers the Tooltip when hovered.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.asChild] - Whether to merge props with the child component
 * @param {React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>} props... - All Radix Trigger props
 */
const TooltipTrigger = TooltipPrimitive.Trigger

/**
 * The content shown when the Tooltip is open.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {number} [props.sideOffset=4] - Offset from the trigger element
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>} props... - All Radix Content props
 * 
 * @example
 * <TooltipContent className="bg-popover text-popover-foreground">
 *   Tooltip message
 * </TooltipContent>
 */
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }

