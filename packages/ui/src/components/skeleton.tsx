import { cn } from "@/lib/utils"
import * as React from "react"

/**
 * A placeholder loading indicator that animates content loading states.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.HTMLAttributes<HTMLDivElement>} props... - All div element props
 * 
 * @example
 * <Skeleton className="h-4 w-[200px]" />
 * 
 * @see {@link https://ui.shadcn.com/docs/components/skeleton | Shadcn Skeleton Documentation}
 */
const Skeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("animate-pulse rounded-md bg-muted", className)}
    {...props}
  />
))
Skeleton.displayName = "Skeleton"

export { Skeleton }
