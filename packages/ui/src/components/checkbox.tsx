import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A control that allows the user to toggle between checked and not checked states.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.checked] - Controlled checked state
 * @param {boolean} [props.disabled] - Whether the checkbox is disabled
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>} props... - All Radix Checkbox props
 * 
 * @example
 * ```tsx
 * <Checkbox checked={isChecked} onCheckedChange={setIsChecked} />
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/checkbox | Shadcn Checkbox Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/checkbox | Radix Checkbox Primitive}
 */
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
