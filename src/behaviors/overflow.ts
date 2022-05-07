import { css } from '@emotion/react'
import { utility } from '..'

export type OverflowValue = 'visible' | 'hidden' | 'scroll' | 'auto'

export const overflow = utility(
  (
    args?: OverflowValue | { x?: OverflowValue; y?: OverflowValue },
    y?: OverflowValue
  ) => {
    if (!args) return undefined
    if (typeof args === 'object')
      return css`
        overflow-x: ${args.x};
        overflow-y: ${args.y};
      `
    return css`
      overflow: ${args ?? ''} ${y ?? ''};
    `
  }
)

export const overflowX = utility(
  (value?: OverflowValue) =>
    css`
      overflow-x: ${value};
    `
)
export const overflowY = utility(
  (value?: OverflowValue) =>
    css`
      overflow-y: ${value};
    `
)
