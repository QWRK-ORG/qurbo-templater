import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A scrollable area with custom scrollbars.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ReactNode} props.children - The content to be scrollable
 * @param {React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>} props... - All Radix ScrollArea props
 * 
 * @example
 * ```tsx
 * <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
 *   <div>Long content here</div>
 * </ScrollArea>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/scroll-area | Shadcn ScrollArea Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/scroll-area | Radix ScrollArea Primitive}
 */
const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

/**
 * Custom scrollbar component for ScrollArea.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {'vertical' | 'horizontal'} [props.orientation='vertical'] - The orientation of the scrollbar
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>} props... - All Radix ScrollAreaScrollbar props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/scroll-area | Shadcn ScrollArea Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/scroll-area#scrollbar | Radix ScrollAreaScrollbar Primitive}
 */
const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
