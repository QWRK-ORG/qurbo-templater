import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import * as React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
      loading: {
        true: 'cursor-wait',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * Interactive button element with multiple variants and loading states.
 * 
 * @component
 * @public
 * 
 * @param {Object} props - Component props
 * @param {'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'} [props.variant='default'] - Visual style variant
 * @param {'default' | 'sm' | 'lg' | 'icon'} [props.size='default'] - Size of the button
 * @param {boolean} [props.asChild=false] - Whether to render as a child component using Radix Slot
 * @param {boolean} [props.isLoading=false] - Shows loading spinner when true
 * @param {string} [props.loadingText='Loading...'] - Text to display when loading
 * @param {React.ReactNode} [props.leftIcon] - Icon to display before the button text
 * @param {React.ReactNode} [props.rightIcon] - Icon to display after the button text
 * @param {string} [props.className] - Additional custom classes
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props... - All standard button attributes
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Button>Click me</Button>
 * 
 * // With variant and size
 * <Button 
 *   variant="destructive" 
 *   size="sm" 
 *   isLoading={isDeleting}
 * >
 *   Delete Item
 * </Button>
 * 
 * // With icons
 * <Button
 *   variant="outline"
 *   leftIcon={<PlusIcon />}
 * >
 *   Add New
 * </Button>
 * ```
 * 
 * @see {@link https://ui.shadcn.com/docs/components/button | Shadcn Button Documentation}
 * @see {@link https://www.radix-ui.com/primitives/docs/utilities/slot | Radix Slot Primitive}
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      loadingText = 'Loading...',
      children,
      leftIcon,
      rightIcon,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className, loading: isLoading }),
        )}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="animate-spin w-4 h-4" />
            {loadingText}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {leftIcon && (
              <span className="[&>svg]:w-4 [&>svg]:h-4">{leftIcon}</span>
            )}
            {children}
            {rightIcon && (
              <span className="[&>svg]:w-4 [&>svg]:h-4">{rightIcon}</span>
            )}
          </div>
        )}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
