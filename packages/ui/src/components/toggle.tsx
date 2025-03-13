"use client"

import { cva } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * A two-state button that can be either on or off.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.pressed=false] - Controlled pressed state
 * @param {string} [props.variant='default'] - Visual style variant
 * @param {string} [props.className] - Additional custom classes
 * @param {React.HTMLAttributes<HTMLButtonElement>} props... - All button element props
 * 
 * @example
 * <Toggle pressed={isToggled} onPressedChange={setIsToggled}>
 *   Toggle State
 * </Toggle>
 * 
 * @see {@link https://ui.shadcn.com/docs/components/toggle | Shadcn Toggle Documentation}
 */
const Toggle = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & {
    pressed?: boolean
    variant?: 'default' | 'outline'
  }
>(({ className, variant = 'default', pressed = false, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      variant === 'default' && "bg-transparent hover:bg-muted",
      variant === 'outline' && "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      pressed && "bg-muted",
      className
    )}
    {...props}
  />
))
Toggle.displayName = "Toggle"

export { Toggle, toggleVariants }
