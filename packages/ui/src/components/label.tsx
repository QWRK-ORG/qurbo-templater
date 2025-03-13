import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

/**
 * A form label component with styling and accessibility features.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.htmlFor] - The ID of the form control this label is associated with
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>} props... - All Radix Label props
 * 
 * @example
 * ```tsx
 * <div className="grid gap-2">
 *   <Label htmlFor="email">Email</Label>
 *   <Input id="email" type="email" />
 * </div>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/label | Shadcn Label Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/label | Radix Label Primitive}
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
