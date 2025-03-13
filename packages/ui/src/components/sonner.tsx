"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

/**
 * A toast notification component using Sonner with theme integration.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {React.ComponentProps<typeof Sonner>} props... - All Sonner Toaster props
 * 
 * @example
 * ```tsx
 * // In your layout or root component
 * <Toaster />
 * 
 * // Then anywhere in your app
 * import { toast } from "sonner"
 * 
 * toast("Event has been created")
 * toast.success("Success!", {
 *   description: "Your action was completed successfully",
 * })
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/sonner | Shadcn Sonner Documentation}
 * @see {@link https://sonner.emilkowal.ski/ | Sonner Documentation}
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
