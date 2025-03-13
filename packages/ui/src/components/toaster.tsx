import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"

/**
 * A component that renders toast notifications from the toast context.
 * 
 * @component
 * @public
 * 
 * @example
 * ```tsx
 * // In your layout or root component
 * <Toaster />
 * 
 * // Then anywhere in your app
 * const { toast } = useToast()
 * 
 * toast({
 *   title: "Success",
 *   description: "Your action was completed successfully",
 * })
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/toast | Shadcn Toast Documentation}
 */
export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
