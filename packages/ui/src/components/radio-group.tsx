import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A set of checkable buttons where only one can be checked at a time.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {string} props.defaultValue - The value of the radio item that should be checked by default
 * @param {string} [props.value] - The controlled value of the radio item that should be checked
 * @param {function} [props.onValueChange] - Event handler called when the value changes
 * @param {React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>} props... - All Radix RadioGroup props
 * 
 * @example
 * ```tsx
 * <RadioGroup defaultValue="option-one">
 *   <div className="flex items-center space-x-2">
 *     <RadioGroupItem value="option-one" id="option-one" />
 *     <Label htmlFor="option-one">Option One</Label>
 *   </div>
 *   <div className="flex items-center space-x-2">
 *     <RadioGroupItem value="option-two" id="option-two" />
 *     <Label htmlFor="option-two">Option Two</Label>
 *   </div>
 * </RadioGroup>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/radio-group | Shadcn RadioGroup Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/radio-group | Radix RadioGroup Primitive}
 */
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

/**
 * An item in the radio group that can be checked.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} props.value - The unique value of the radio item
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>} props... - All Radix RadioGroupItem props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/radio-group | Shadcn RadioGroupItem Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/radio-group#item | Radix RadioGroupItem Primitive}
 */
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
