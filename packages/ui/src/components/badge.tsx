import { cn } from "@/lib/utils"
import * as React from "react"

/**
 * Small status descriptor component for tagging and labeling.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {'default' | 'secondary' | 'destructive' | 'outline'} [props.variant='default'] - Visual style variant
 * @param {string} [props.className] - Additional custom classes
 * @param {React.HTMLAttributes<HTMLDivElement>} props... - All div element props
 * 
 * @example
 * ```tsx
 * <Badge variant="secondary" className="px-3 py-1">
 *   New Feature
 * </Badge>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/badge | Shadcn Badge Documentation}
 */
const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  }
>(({ className, variant = 'default', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      {
        'border-transparent bg-primary text-primary-foreground hover:bg-primary/80': variant === 'default',
        'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
        'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80': variant === 'destructive',
        'text-foreground': variant === 'outline',
      },
      className
    )}
    {...props}
  />
))
Badge.displayName = "Badge"

export { Badge }
