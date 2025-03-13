import { cn } from "@/lib/utils"
import * as React from "react"

/**
 * Input field component with built-in focus states and accessibility.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {string} [props.type] - Input type (text, password, email, etc.)
 * @param {boolean} [props.disabled] - Disabled state
 * @param {string} [props.placeholder] - Placeholder text
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props... - All standard input attributes
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Input placeholder="Enter your email" />
 * 
 * // With type and disabled state
 * <Input 
 *   type="password" 
 *   disabled 
 *   placeholder="Enter password" 
 *   className="w-64"
 * />
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/input | Shadcn Input Documentation}
 */
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
