import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A component to maintain consistent aspect ratios for content.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {number} [props.ratio=16/9] - Aspect ratio (width/height)
 * @param {string} [props.className] - Additional custom classes
 * @param {React.HTMLAttributes<HTMLDivElement>} props... - All div element props
 * 
 * @example
 * <AspectRatio ratio={16/9}>
 *   <img src="/image.jpg" alt="Example" />
 * </AspectRatio>
 * 
 * @see {@link https://ui.shadcn.com/docs/components/aspect-ratio | Shadcn AspectRatio Documentation}
 */
const AspectRatio = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { ratio?: number }
>(({ className, ratio = 16 / 9, style, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      position: "relative",
      width: "100%",
      paddingTop: `${100 / ratio}%`,
      ...style,
    }}
    className={cn("overflow-hidden", className)}
    {...props}
  />
))
AspectRatio.displayName = "AspectRatio"

export { AspectRatio }
