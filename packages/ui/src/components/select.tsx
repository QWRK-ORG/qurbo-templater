"use client"

import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the Select component, extending Radix UI's select primitive props.
 * 
 * @public
 */
export interface SelectProps extends SelectPrimitive.SelectProps {
  /**
   * Additional CSS class to apply to the select container.
   * 
   * @default undefined
   */
  className?: string
}

/**
 * A dropdown select component for choosing options from a list.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Select options
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>} props... - All Radix SelectRoot props
 * 
 * @example
 * <Select>
 *   <SelectTrigger className="w-[180px]">
 *     <SelectValue placeholder="Select a theme" />
 *   </SelectTrigger>
 *   <SelectContent>
 *     <SelectItem value="light">Light</SelectItem>
 *   </SelectContent>
 * </Select>
 * 
 * @see {@link https://ui.shadcn.com/docs/components/select | Shadcn Select Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/select | Radix Select Primitive}
 */
const Select = SelectPrimitive.Root

/**
 * Grouping component for Select items, allowing for logical grouping within the dropdown.
 * 
 * @component
 * @public
 */
const SelectGroup = SelectPrimitive.Group

/**
 * Value display component within the Select trigger.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - The component props
 */
const SelectValue = SelectPrimitive.Value

/**
 * The button that toggles the select dropdown.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>} props... - All Radix Trigger props
 */
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

/**
 * Scroll up button for navigating the Select dropdown content.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS class for styling the scroll up button
 */
const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

/**
 * Scroll down button for navigating the Select dropdown content.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS class for styling the scroll down button
 */
const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

/**
 * Content container for Select items, appearing as a dropdown.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS class for styling the content container
 * @param {React.ReactNode} props.children - Elements to display within the content container
 * @param {string} [props.position="popper"] - Positioning strategy for the dropdown content
 */
const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = "SelectContent"

/**
 * Label for grouping Select items, providing context within the dropdown.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS class for styling the label
 */
const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

/**
 * Individual selectable item within the Select dropdown.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS class for styling the item
 * @param {React.ReactNode} props.children - Elements to display within the item
 */
const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = "SelectItem"

/**
 * Visual separator for grouping Select items within the dropdown.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS class for styling the separator
 */
const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue
}

