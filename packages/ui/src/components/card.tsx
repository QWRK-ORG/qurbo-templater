import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Flexible container for displaying content with a card-style layout.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.HTMLAttributes<HTMLDivElement>} props... - All standard div attributes
 * 
 * @example
 * ```tsx
 * <Card className="w-[350px]">
 *   <CardHeader>
 *     <CardTitle>Create Project</CardTitle>
 *     <CardDescription>Deploy your new project in minutes</CardDescription>
 *   </CardHeader>
 *   <CardContent>...</CardContent>
 *   <CardFooter className="flex justify-between">
 *     <Button variant="outline">Cancel</Button>
 *     <Button>Deploy</Button>
 *   </CardFooter>
 * </Card>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/card | Shadcn Card Documentation}
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

/**
 * Container for card header content. Typically holds CardTitle and CardDescription.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.HTMLAttributes<HTMLDivElement>} props... - All standard div attributes
 * @param {React.ReactNode} props.children - Should contain CardTitle and CardDescription
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

/**
 * Title element for card components. Use for primary header text.
 * 
 * @component
 * @public
 */
const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

/**
 * Supplementary text for card headers. Use for descriptions or subheadings.
 * 
 * @component
 * @public
 */
const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

/**
 * Main content area of the card. Use for primary card content.
 * 
 * @component
 * @public
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

/**
 * Container for card footer content. Typically holds action buttons.
 * 
 * @component
 * @public
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }

