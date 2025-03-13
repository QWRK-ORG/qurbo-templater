import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A menu that appears upon right-click/tap-hold interaction.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {number} [props.sideOffset=4] - Offset from the trigger element
 * @param {React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Root>} props... - All Radix ContextMenuRoot props
 * 
 * @example
 * <ContextMenu>
 *   <ContextMenuTrigger>Right-click here</ContextMenuTrigger>
 *   <ContextMenuContent>...</ContextMenuContent>
 * </ContextMenu>
 * 
 * @see {@link https://ui.shadcn.com/docs/components/context-menu | Shadcn ContextMenu Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/context-menu | Radix ContextMenu Primitive}
 */
const ContextMenu = ContextMenuPrimitive.Root

/**
 * The component that triggers the context menu on interaction.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.asChild] - Whether to merge props with the child component
 * @param {React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Trigger>} props... - All Radix Trigger props
 */
const ContextMenuTrigger = ContextMenuPrimitive.Trigger

/**
 * Groups related menu items together.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The grouped menu items
 * @param {React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Group>} props... - All Radix Group props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/context-menu | Shadcn ContextMenu Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/context-menu#group | Radix ContextMenu Group Primitive}
 */
const ContextMenuGroup = ContextMenuPrimitive.Group

/**
 * Portal for rendering context menu content outside the DOM hierarchy.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to render in the portal
 * @param {React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Portal>} props... - All Radix Portal props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/context-menu | Shadcn ContextMenu Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/context-menu#portal | Radix ContextMenu Portal Primitive}
 */
const ContextMenuPortal = ContextMenuPrimitive.Portal

/**
 * Creates a submenu within the context menu.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The submenu trigger and content
 * @param {React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Sub>} props... - All Radix Sub props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/context-menu | Shadcn ContextMenu Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/context-menu#sub | Radix ContextMenu Sub Primitive}
 */
const ContextMenuSub = ContextMenuPrimitive.Sub

/**
 * A group of radio items where only one can be checked.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} props.value - The value of the currently checked item
 * @param {function} props.onValueChange - Handler called when the value changes
 * @param {React.ReactNode} props.children - The radio items
 * @param {React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioGroup>} props... - All Radix RadioGroup props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/context-menu | Shadcn ContextMenu Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/context-menu#radiogroup | Radix ContextMenu RadioGroup Primitive}
 */
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

/**
 * The content shown when the ContextMenu is open.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>} props... - All Radix Content props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/context-menu | Shadcn ContextMenu Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/context-menu#content | Radix ContextMenu Content Primitive}
 */
const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-4 w-4 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
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
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
    ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator,
    ContextMenuShortcut, ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger, ContextMenuTrigger
}

