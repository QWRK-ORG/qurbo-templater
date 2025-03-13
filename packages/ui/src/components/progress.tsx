"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Displays an indicator showing the completion progress of a task.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {number} [props.value=0] - Current progress value (0-100)
 * @param {string} [props.className] - Additional custom classes
 * @param {React.HTMLAttributes<HTMLDivElement>} props... - All div element props
 * 
 * @example
 * <Progress value={65} className="h-2" />
 * 
 * @see {@link https://ui.shadcn.com/docs/components/progress | Shadcn Progress Documentation}
 */
const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: number }
>(({ className, value = 0, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}
  >
    <div
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </div>
))
Progress.displayName = "Progress"

export { Progress }
