import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A vertically stacked set of interactive headings that each reveal associated content.
 * Composes with Radix UI's Accordion primitives.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {'single' | 'multiple'} props.type - Whether single or multiple items can be open
 * @param {boolean} [props.collapsible] - Whether an open item can be collapsed
 * @param {React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>} props... - All Radix AccordionRoot props
 * 
 * @example
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Is it accessible?</AccordionTrigger>
 *     <AccordionContent>Yes. Adheres to WAI-ARIA patterns.</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * 
 * @see {@link https://ui.shadcn.com/docs/components/accordion | Shadcn Accordion Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/accordion | Radix Accordion Primitive}
 */
const Accordion = AccordionPrimitive.Root

/**
 * An individual accordion item that contains the trigger and content.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} props.value - Unique value to identify the item
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>} props... - All Radix Item props
 * 
 * @example
 * <AccordionItem value="item-1" className="border-b">
 *   <AccordionTrigger>Section 1</AccordionTrigger>
 *   <AccordionContent>Content</AccordionContent>
 * </AccordionItem>
 */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

/**
 * The interactive button that toggles the accordion content visibility.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.disabled] - Whether the trigger is disabled
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>} props... - All Radix Trigger props
 * 
 * @example
 * <AccordionTrigger className="flex w-full items-center py-4">
 *   <span>Section Title</span>
 *   <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
 * </AccordionTrigger>
 */
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

/**
 * The collapsible content section of the accordion item.
 * 
 * @component
 * @public
 * @example
 * <AccordionContent className="pb-4 pt-0">
 *   Collapsible content section
 * </AccordionContent>
 */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
