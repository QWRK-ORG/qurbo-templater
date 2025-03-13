import * as PopoverPrimitive from "@radix-ui/react-popover"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A non-modal dialog that floats around its trigger element.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root>} props... - All Radix PopoverRoot props
 * 
 * @example
 * <Popover>
 *   <PopoverTrigger>Open</PopoverTrigger>
 *   <PopoverContent>Settings</PopoverContent>
 * </Popover>
 * 
 * @see {@link https://ui.shadcn.com/docs/components/popover | Shadcn Popover Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/popover | Radix Popover Primitive}
 */
const Popover = PopoverPrimitive.Root

/**
 * @component
 * @public
 * @example
 * <PopoverTrigger asChild>
 *   <Button variant="outline">Open</Button>
 * </PopoverTrigger>
 */
const PopoverTrigger = PopoverPrimitive.Trigger

/**
 * The content shown when the Popover is open.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {'start' | 'center' | 'end'} [props.align='center'] - Alignment relative to trigger
 * @param {number} [props.sideOffset=4] - Offset from the trigger element
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>} props... - All Radix Content props
 * 
 * @example
 * <PopoverContent className="w-80" align="end" sideOffset={6}>
 *   <div className="grid gap-4">...</div>
 * </PopoverContent>
 */
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-full rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverContent, PopoverTrigger }
