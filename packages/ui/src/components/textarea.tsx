import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A multi-line text input field. Composes with native textarea element.
 * 
 * @component
 * @example
 * ```tsx
 * <Textarea
 *   placeholder="Type your message here."
 *   className="resize-none"
 * />
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/textarea | Shadcn Textarea Documentation}
 */
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
