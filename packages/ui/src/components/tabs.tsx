import { cn } from "@/lib/utils"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as React from "react"

/**
 * Interactive tab navigation component with keyboard support.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} props.defaultValue - Default active tab value
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>} props... - All Radix TabsRoot props
 * 
 * @example
 * ```tsx
 * <Tabs defaultValue="account" className="w-[400px]">
 *   <TabsList>
 *     <TabsTrigger value="account">Account</TabsTrigger>
 *     <TabsTrigger value="password">Password</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="account">Account settings</TabsContent>
 *   <TabsContent value="password">Password settings</TabsContent>
 * </Tabs>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/tabs | Shadcn Tabs Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/tabs | Radix Tabs Primitive}
 */
const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={cn("", className)}
    {...props}
  />
))
Tabs.displayName = "Tabs"

/**
 * Container for tab triggers. Maintains active state styling.
 * 
 * @component
 * @public
 */
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = "TabsList"

/**
 * Individual tab trigger button. Manages active/inactive states.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} props.value - Unique value to associate with corresponding content
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>} props... - All Radix Trigger props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/tabs | Shadcn TabsTrigger Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/tabs#trigger | Radix TabsTrigger Primitive}
 */
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = "TabsTrigger"

/**
 * Content container for individual tab panels.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} props.value - Must match corresponding trigger's value
 * @param {string} [props.className] - Additional custom classes
 * 
 * @see {@link https://ui.shadcn.com/docs/components/tabs | Shadcn TabsContent Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/tabs#content | Radix TabsContent Primitive}
 */
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = "TabsContent"

export { Tabs, TabsContent, TabsList, TabsTrigger }

