import * as SeparatorPrimitive from "@radix-ui/react-separator"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A visual divider between content areas.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {'horizontal' | 'vertical'} [props.orientation='horizontal'] - The orientation of the separator
 * @param {boolean} [props.decorative=true] - Whether the separator is purely decorative (affects accessibility)
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>} props... - All Radix Separator props
 * 
 * @example
 * ```tsx
 * // Horizontal separator
 * <Separator />
 * 
 * // Vertical separator
 * <Separator orientation="vertical" className="h-6" />
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/separator | Shadcn Separator Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/separator | Radix Separator Primitive}
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
