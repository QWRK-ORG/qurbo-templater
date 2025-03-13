import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
import * as React from "react"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

/**
` * A command menu component that provides a searchable list of commands.
 * 
 * @component
 * @param {object} props - The component props derived from CommandPrimitive
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.value] - The controlled value of the command menu
 * @param {function} [props.onValueChange] - Handler called when the value changes
 * @param {boolean} [props.filter] - Custom filter function
 * 
 * @example
 * ```tsx
 * <Command>
 *   <CommandInput placeholder="Search..." />
 *   <CommandList>
 *     <CommandItem>Item 1</CommandItem>
 *     <CommandItem>Item 2</CommandItem>
 *   </CommandList>
 * </Command>
 * ```
 */
const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

/**
 * A dialog wrapper for the Command component, providing a modal interface.
 * 
 * @component
 * @param {object} props - The component props
 * @param {ReactNode} props.children - The dialog content
 * @param {boolean} [props.open] - Controls the open state of the dialog
 * @param {function} [props.onOpenChange] - Handler called when the open state changes
 * 
 * @example
 * ```tsx
 * <CommandDialog>
 *   <CommandInput />
 *   <CommandList>
 *     <CommandItem>Dialog Item</CommandItem>
 *   </CommandList>
 * </CommandDialog>
 * ```
 */
const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

/**
 * The input component for the command menu with an integrated search icon.
 * 
 * @component
 * @param {object} props - The component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.placeholder] - Input placeholder text
 * @param {string} [props.value] - Controlled input value
 * @param {function} [props.onValueChange] - Handler called when the value changes
 * 
 * @example
 * ```tsx
 * <CommandInput placeholder="Search commands..." />
 * ```
 */
const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

/**
 * A container for command items with scrolling support.
 * 
 * @component
 * @param {object} props - The component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {ReactNode} props.children - The list content
 * 
 * @example
 * ```tsx
 * <CommandList>
 *   <CommandItem>List Item 1</CommandItem>
 *   <CommandItem>List Item 2</CommandItem>
 * </CommandList>
 * ```
 */
const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

/**
 * Displays when no results are found in the command menu.
 * 
 * @component
 * @param {object} props - The component props
 * @param {ReactNode} props.children - The content to display when no results are found
 * @param {string} [props.className] - Additional CSS classes
 * 
 * @example
 * ```tsx
 * <CommandEmpty>No results found.</CommandEmpty>
 * ```
 */
const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

/**
 * Groups related command items together with an optional heading.
 * 
 * @component
 * @param {object} props - The component props
 * @param {string} [props.heading] - The group heading text
 * @param {string} [props.className] - Additional CSS classes
 * @param {ReactNode} props.children - The group content
 * 
 * @example
 * ```tsx
 * <CommandGroup heading="Suggestions">
 *   <CommandItem>Suggestion 1</CommandItem>
 *   <CommandItem>Suggestion 2</CommandItem>
 * </CommandGroup>
 * ```
 */
const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

/**
 * A visual separator between command items or groups.
 * 
 * @component
 * @param {object} props - The component props
 * @param {string} [props.className] - Additional CSS classes
 * 
 * @example
 * ```tsx
 * <CommandGroup>
 *   <CommandItem>Item 1</CommandItem>
 *   <CommandSeparator />
 *   <CommandItem>Item 2</CommandItem>
 * </CommandGroup>
 * ```
 */
const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

/**
 * An individual item in the command menu.
 * 
 * @component
 * @param {object} props - The component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.disabled] - Whether the item is disabled
 * @param {function} [props.onSelect] - Handler called when the item is selected
 * @param {ReactNode} props.children - The item content
 * 
 * @example
 * ```tsx
 * <CommandItem onSelect={() => console.log('Selected')}>
 *   <CalendarIcon className="mr-2 h-4 w-4" />
 *   Calendar
 *   <CommandShortcut>⌘C</CommandShortcut>
 * </CommandItem>
 * ```
 */
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

/**
 * Displays keyboard shortcuts for command items.
 * 
 * @component
 * @param {object} props - The component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {ReactNode} props.children - The shortcut text to display
 * 
 * @example
 * ```tsx
 * <CommandItem>
 *   Settings
 *   <CommandShortcut>⌘S</CommandShortcut>
 * </CommandItem>
 * ```
 */
const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog, CommandEmpty,
  CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut
}

