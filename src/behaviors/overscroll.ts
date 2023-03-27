import { css } from '@emotion/react'
import { utility } from '../main'

export type OverscrollValue = 'auto' | 'none' | 'contain'

/** Utilities for controlling how the browser behaves when reaching the boundary of a scrolling area. */
export const overscroll = utility(
  (
    args?: OverscrollValue | { x?: OverscrollValue; y?: OverscrollValue },
    y?: OverscrollValue
  ) => {
    if (!args) return
    if (typeof args === 'object')
      return `
        overscroll-behavior-x: ${args.x};
        overscroll-behavior-y: ${args.y};
      `
    return `
      overscroll-behavior: ${args ?? ''} ${y ?? ''};
    `
  }
)

/** Utilities for controlling how the browser behaves when reaching the boundary of a scrolling area. */
export const overscrollX = utility(
  (value?: OverscrollValue) =>
    `
      overscroll-behavior-x: ${value};
    `
)

/** Utilities for controlling how the browser behaves when reaching the boundary of a scrolling area. */
export const overscrollY = utility(
  (value?: OverscrollValue) =>
    `
      overscroll-behavior-y: ${value};
    `
)
