import { css } from '@emotion/react'
import { utility } from '..'

export const resize = utility(
  (
    value?:
      | 'none'
      | 'both'
      | 'horizontal'
      | 'vertical'
      | 'block'
      | 'inline'
      | 'inherit'
      | 'initial'
      | 'unset'
  ) =>
    css`
      resize: ${value};
    `
)

export type OverflowValue = 'visible' | 'hidden' | 'scroll' | 'auto' | 'inherit'

export const overflow = utility(
  (value?: OverflowValue) =>
    css`
      overflow: ${value};
    `
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
