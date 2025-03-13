import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Context menu component with submenus, checkboxes, radio groups and keyboard navigation.
 * Composes Radix UI's DropdownMenu primitives with shadcn styling.
 * 
 * @component
 * @public
 * 
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>} props - Accepts all Radix DropdownMenuRoot props
 * 
 * @example
 * ```tsx
 * <DropdownMenu>
 *   <DropdownMenuTrigger>Open</DropdownMenuTrigger>
 *   <DropdownMenuContent>
 *     <DropdownMenuItem>Item 1</DropdownMenuItem>
 *     <DropdownMenuSub>
 *       <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
 *       <DropdownMenuSubContent>...</DropdownMenuSubContent>
 *     </DropdownMenuSub>
 *   </DropdownMenuContent>
 * </DropdownMenu>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/dropdown-menu | Shadcn DropdownMenu Docs}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/dropdown-menu | Radix DropdownMenu Primitive}
 */
const DropdownMenu = DropdownMenuPrimitive.Root

/**
 * The button that toggles the dropdown menu.
 * 
 * @component
 * @public
 * 
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>} props - Accepts all Radix Trigger props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/dropdown-menu | Shadcn DropdownMenuTrigger Docs}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/dropdown-menu#trigger | Radix Trigger Primitive}
 */
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

/**
 * Used to group multiple dropdown menu items.
 * 
 * @component
 * @public
 * 
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group>} props - Accepts all Radix Group props
 */
const DropdownMenuGroup = DropdownMenuPrimitive.Group

/**
 * Portal wrapper for dropdown content when needing to break out of container boundaries.
 * 
 * @component
 * @public
 * 
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Portal>} props - Accepts all Radix Portal props
 */
const DropdownMenuPortal = DropdownMenuPrimitive.Portal

/**
 * Container for dropdown submenu components.
 * 
 * @component
 * @public
 * 
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Sub>} props - Accepts all Radix Sub props
 */
const DropdownMenuSub = DropdownMenuPrimitive.Sub

/**
 * Radio group component for mutually exclusive dropdown menu items.
 * 
 * @component
 * @public
 * 
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioGroup>} props - Accepts all Radix RadioGroup props
 */
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

/**
 * Interactive dropdown menu item with nested submenu support.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.inset] - Whether to indent the item for visual hierarchy
 * @param {string} [props.className] - Additional class names for custom styling
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>} props... - All Radix SubTrigger props
 * 
 * @example
 * ```tsx
 * <DropdownMenuSubTrigger inset className="text-danger">
 *   Dangerous Action
 * </DropdownMenuSubTrigger>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/dropdown-menu | Shadcn DropdownMenuSubTrigger Docs}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/dropdown-menu#subtrigger | Radix SubTrigger Primitive}
 */
const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

/**
 * Container for submenu content that appears when hovering over a SubTrigger.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>} props... - All Radix SubContent props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/dropdown-menu | Shadcn DropdownMenuSubContent Docs}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/dropdown-menu#subcontent | Radix SubContent Primitive}
 */
const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

/**
 * The content container for the dropdown menu.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {number} [props.sideOffset=4] - Offset from the trigger element
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>} props... - All Radix Content props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/dropdown-menu | Shadcn DropdownMenuContent Docs}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/dropdown-menu#content | Radix Content Primitive}
 */
const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

/**
 * Individual interactive item within the dropdown menu.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.inset] - Whether to indent the item
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>} props... - All Radix Item props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/dropdown-menu | Shadcn DropdownMenuItem Docs}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item | Radix Item Primitive}
 */
const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

/**
 * Checkbox item for dropdown menus with state management.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {boolean} props.checked - Controlled checked state
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>} props... - All Radix CheckboxItem props
 * 
 * @example
 * ```tsx
 * <DropdownMenuCheckboxItem 
 *   checked={isChecked}
 *   onCheckedChange={setIsChecked}
 * >
 *   Show Hidden Files
 * </DropdownMenuCheckboxItem>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/dropdown-menu | Shadcn CheckboxItem Docs}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/dropdown-menu#checkbox-item | Radix CheckboxItem Primitive}
 */
const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

/**
 * Radio item for mutually exclusive selection in dropdown menus.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>} props... - All Radix RadioItem props
 * 
 * @example
 * ```tsx
 * <DropdownMenuRadioGroup value={selected} onValueChange={setSelected}>
 *   <DropdownMenuRadioItem value="option1">
 *     Option 1
 *   </DropdownMenuRadioItem>
 * </DropdownMenuRadioGroup>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/dropdown-menu | Shadcn RadioItem Docs}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/dropdown-menu#radio-item | Radix RadioItem Primitive}
 */
const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

/**
 * Label for grouping related menu items.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.inset] - Whether to indent the label
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>} props... - All Radix Label props
 * 
 * @example
 * ```tsx
 * <DropdownMenuLabel inset>File Options</DropdownMenuLabel>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/dropdown-menu | Shadcn Label Docs}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/dropdown-menu#label | Radix Label Primitive}
 */
const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

/**
 * Visual separator between menu items.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>} props... - All Radix Separator props
 * 
 * @example
 * ```tsx
 * <DropdownMenuSeparator className="my-1" />
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/dropdown-menu | Shadcn Separator Docs}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/dropdown-menu#separator | Radix Separator Primitive}
 */
const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

/**
 * Displays keyboard shortcuts for menu items.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.HTMLAttributes<HTMLSpanElement>} props... - All span element props
 * 
 * @example
 * ```tsx
 * <DropdownMenuItem>
 *   Save
 *   <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
 * </DropdownMenuItem>
 * ```
 */
const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator,
  DropdownMenuShortcut, DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger, DropdownMenuTrigger
}

