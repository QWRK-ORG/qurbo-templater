import { OTPInput, OTPInputContext } from "input-otp"
import { Minus } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * One-time password input component for verification codes.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes for the input
 * @param {string} [props.containerClassName] - Additional custom classes for the container
 * @param {React.ComponentPropsWithoutRef<typeof OTPInput>} props... - All OTPInput props
 * 
 * @example
 * ```tsx
 * <InputOTP maxLength={6}>
 *   <InputOTPGroup>
 *     <InputOTPSlot index={0} />
 *     <InputOTPSlot index={1} />
 *     <InputOTPSlot index={2} />
 *   </InputOTPGroup>
 *   <InputOTPSeparator />
 *   <InputOTPGroup>
 *     <InputOTPSlot index={3} />
 *     <InputOTPSlot index={4} />
 *     <InputOTPSlot index={5} />
 *   </InputOTPGroup>
 * </InputOTP>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/input-otp | Shadcn InputOTP Documentation}
 */
const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

/**
 * Container for a group of OTP input slots.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<"div">} props... - All div element props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/input-otp | Shadcn InputOTPGroup Documentation}
 */
const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

/**
 * Individual slot for a single OTP character input.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {number} props.index - The index of this slot in the OTP sequence
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentPropsWithoutRef<"div">} props... - All div element props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/input-otp | Shadcn InputOTPSlot Documentation}
 */
const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-1 ring-ring",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

/**
 * Separator component between OTP input groups.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {React.ComponentPropsWithoutRef<"div">} props... - All div element props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/input-otp | Shadcn InputOTPSeparator Documentation}
 */
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Minus />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot }

