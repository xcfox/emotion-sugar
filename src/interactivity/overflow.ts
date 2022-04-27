import { css } from '@emotion/react'
import { makeUtility } from '..'

export const resize = makeUtility(
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

export const overflow = makeUtility(
  (value?: OverflowValue) =>
    css`
      overflow: ${value};
    `
)
export const overflowX = makeUtility(
  (value?: OverflowValue) =>
    css`
      overflow-x: ${value};
    `
)
export const overflowY = makeUtility(
  (value?: OverflowValue) =>
    css`
      overflow-y: ${value};
    `
)
