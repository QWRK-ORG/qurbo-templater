import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"

import { ButtonProps, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * A navigation component for paginated content.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentProps<"nav">} props... - All nav element props
 * 
 * @example
 * ```tsx
 * <Pagination>
 *   <PaginationContent>
 *     <PaginationItem>
 *       <PaginationPrevious href="#" />
 *     </PaginationItem>
 *     <PaginationItem>
 *       <PaginationLink href="#">1</PaginationLink>
 *     </PaginationItem>
 *     <PaginationItem>
 *       <PaginationLink href="#" isActive>2</PaginationLink>
 *     </PaginationItem>
 *     <PaginationItem>
 *       <PaginationNext href="#" />
 *     </PaginationItem>
 *   </PaginationContent>
 * </Pagination>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/pagination | Shadcn Pagination Documentation}
 */
const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

/**
 * Container for pagination items.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentProps<"ul">} props... - All ul element props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/pagination | Shadcn Pagination Documentation}
 */
const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

/**
 * Individual item in the pagination list.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentProps<"li">} props... - All li element props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/pagination | Shadcn Pagination Documentation}
 */
const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

/**
 * Link component for pagination items.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.isActive] - Whether this link is the current page
 * @param {string} [props.size='icon'] - Size of the link button
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentProps<"a">} props... - All anchor element props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/pagination | Shadcn Pagination Documentation}
 */
const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

/**
 * Previous page navigation link.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentProps<typeof PaginationLink>} props... - All PaginationLink props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/pagination | Shadcn Pagination Documentation}
 */
const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

/**
 * Next page navigation link.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentProps<typeof PaginationLink>} props... - All PaginationLink props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/pagination | Shadcn Pagination Documentation}
 */
const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

/**
 * Ellipsis component indicating skipped pages.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ComponentProps<"span">} props... - All span element props
 * 
 * @see {@link https://ui.shadcn.com/docs/components/pagination | Shadcn Pagination Documentation}
 */
const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious
}

