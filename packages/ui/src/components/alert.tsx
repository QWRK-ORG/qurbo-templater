import { cva } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/**
 * A contextual notification component for important messages.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {'default' | 'destructive'} [props.variant='default'] - Visual style variant
 * @param {string} [props.className] - Additional custom classes
 * @param {React.HTMLAttributes<HTMLDivElement>} props... - All div element props
 * 
 * @example
 * ```tsx
 * <Alert variant="destructive" className="mb-4">
 *   <AlertTitle>Error</AlertTitle>
 *   <AlertDescription>Something went wrong</AlertDescription>
 * </Alert>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/alert | Shadcn Alert Documentation}
 */
const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'default' | 'destructive'
  }
>(({ className, variant = 'default', ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(
      "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4",
      variant === 'destructive' && "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      className
    )}
    {...props}
  />
))
Alert.displayName = "Alert"

/**
 * Title element for Alert components.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.HTMLAttributes<HTMLHeadingElement>} props... - All heading element props
 * 
 * @example
 * ```tsx
 * <AlertTitle>Success</AlertTitle>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/alert | Shadcn AlertTitle Documentation}
 */
const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

/**
 * Description text for Alert components.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props... - All paragraph element props
 * 
 * @example
 * ```tsx
 * <AlertDescription>
 *   Your action was completed successfully.
 * </AlertDescription>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/alert | Shadcn AlertDescription Documentation}
 */
const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertDescription, AlertTitle }

