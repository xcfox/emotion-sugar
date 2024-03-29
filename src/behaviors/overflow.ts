import { css } from '@emotion/react'
import { utility } from '..'

export type OverflowValue = 'visible' | 'hidden' | 'scroll' | 'auto'

/** Utilities for controlling how an element handles content that is too large for the container. */
export const overflow = utility(
  (
    args?: OverflowValue | { x?: OverflowValue; y?: OverflowValue },
    y?: OverflowValue
  ) => {
    if (!args) return
    if (typeof args === 'object')
      return `
        overflow-x: ${args.x};
        overflow-y: ${args.y};
      `
    return `
      overflow: ${args ?? ''} ${y ?? ''};
    `
  }
)

/** Utilities for controlling how an element handles content that is too large for the container. */
export const overflowX = utility(
  (value?: OverflowValue) =>
    `
      overflow-x: ${value};
    `
)

/** Utilities for controlling how an element handles content that is too large for the container. */
export const overflowY = utility(
  (value?: OverflowValue) =>
    `
      overflow-y: ${value};
    `
)
