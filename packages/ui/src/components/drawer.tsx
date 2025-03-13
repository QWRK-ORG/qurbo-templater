"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"

/**
 * The button that opens the drawer when clicked.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.asChild] - Whether to merge props with the child component
 * @param {React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger>} props... - All Vaul Trigger props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/drawer | Shadcn Drawer Documentation}
 * @see {@link https://vaul.emilkowal.ski/ | Vaul Documentation}
 */
const DrawerTrigger = DrawerPrimitive.Trigger

/**
 * Portal for rendering drawer content outside the DOM hierarchy.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to render in the portal
 * @param {React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Portal>} props... - All Vaul Portal props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/drawer | Shadcn Drawer Documentation}
 * @see {@link https://vaul.emilkowal.ski/ | Vaul Documentation}
 */
const DrawerPortal = DrawerPrimitive.Portal

/**
 * A button that closes the drawer when clicked.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.asChild] - Whether to merge props with the child component
 * @param {React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>} props... - All Vaul Close props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/drawer | Shadcn Drawer Documentation}
 * @see {@link https://vaul.emilkowal.ski/ | Vaul Documentation}
 */
const DrawerClose = DrawerPrimitive.Close

/**
 * A translucent overlay that covers the inert portion of the view when the drawer is open.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>} props... - All Vaul Overlay props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/drawer | Shadcn Drawer Documentation}
 * @see {@link https://vaul.emilkowal.ski/ | Vaul Documentation}
 */
const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
    Drawer, DrawerClose,
    DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger
}

