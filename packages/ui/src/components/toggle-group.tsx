import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"
import * as React from "react"

import { toggleVariants } from "@/components/ui/toggle"
import { cn } from "@/lib/utils"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

/**
 * A set of two-state buttons that can be toggled on or off, where only one can be active at a time.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.variant='default'] - Visual style variant
 * @param {string} [props.size='default'] - Size of the toggle group
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>} props... - All Radix ToggleGroup props
 * 
 * @example
 * ```tsx
 * <ToggleGroup type="single" defaultValue="center">
 *   <ToggleGroupItem value="left">Left</ToggleGroupItem>
 *   <ToggleGroupItem value="center">Center</ToggleGroupItem>
 *   <ToggleGroupItem value="right">Right</ToggleGroupItem>
 * </ToggleGroup>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/toggle-group | Shadcn ToggleGroup Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/toggle-group | Radix ToggleGroup Primitive}
 */
const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

/**
 * An individual item within a ToggleGroup.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} props.value - The value of this toggle item
 * @param {string} [props.variant] - Visual style variant (overrides parent ToggleGroup)
 * @param {string} [props.size] - Size of the toggle item (overrides parent ToggleGroup)
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>} props... - All Radix ToggleGroupItem props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/toggle-group | Shadcn ToggleGroupItem Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/toggle-group#item | Radix ToggleGroupItem Primitive}
 */
const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
