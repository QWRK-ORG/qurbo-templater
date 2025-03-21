/**
 * Type definitions for the Input component
 *
 * @packageDocumentation
 */

import type * as React from 'react'

/**
 * Props for the Input component
 *
 * @public
 * @interface
 */
export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Additional CSS class names
   */
  className?: string
  /**
   * The content of the component
   */
  children?: React.ReactNode
}
