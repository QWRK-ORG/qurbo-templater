"use client"

import * as AvatarPrimitive from "@radix-ui/react-avatar"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Displays a user's avatar with fallback support.
 * Composes Radix UI's Avatar primitives with shadcn styling.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>} props... - All other Radix AvatarRoot props
 * 
 * @example
 * ```tsx
 * <Avatar>
 *   <AvatarImage src="/user.png" alt="@username" />
 *   <AvatarFallback>CN</AvatarFallback>
 * </Avatar>
 * 
 * // With custom size
 * <Avatar className="h-12 w-12">
 *   <AvatarImage src="/user.png" />
 *   <AvatarFallback>UR</AvatarFallback>
 * </Avatar>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/avatar | Shadcn Avatar Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/avatar | Radix Avatar Primitive}
 */
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = "Avatar"

/**
 * The image element of the avatar. Should be used inside an Avatar component.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Source URL for the avatar image
 * @param {string} props.alt - Accessible alt text description
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>} props... - All other Radix Image props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/avatar | Shadcn AvatarImage Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/avatar#image | Radix AvatarImage Primitive}
 */
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = "AvatarImage"

/**
 * Fallback component that shows when AvatarImage fails to load.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>} props... - All other Radix Fallback props
 * @param {React.ReactNode} props.children - Fallback content to display
 * 
 * @example
 * ```tsx
 * <AvatarFallback className="bg-muted text-primary">
 *   JD
 * </AvatarFallback>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/avatar | Shadcn AvatarFallback Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/components/avatar#fallback | Radix AvatarFallback Primitive}
 */
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarFallback, AvatarImage }

