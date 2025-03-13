import * as SliderPrimitive from "@radix-ui/react-slider"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * An input where the user selects a value from within a given range.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {number[]} [props.defaultValue=[0]] - Initial value(s)
 * @param {number} [props.min=0] - Minimum allowed value
 * @param {number} [props.max=100] - Maximum allowed value
 * @param {number} [props.step=1] - Increment step size
 * @param {string} [props.className] - Additional custom classes
 * @param {React.HTMLAttributes<HTMLDivElement>} props... - All div element props
 * 
 * @example
 * <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
 * 
 * @see {@link https://ui.shadcn.com/docs/components/slider | Shadcn Slider Documentation}
 */
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
