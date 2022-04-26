import { css } from '@emotion/react'
import { makeSugar } from '..'

export const resize = makeSugar(
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

export const overflow = makeSugar(
  (value?: OverflowValue) =>
    css`
      overflow: ${value};
    `
)
export const overflowX = makeSugar(
  (value?: OverflowValue) =>
    css`
      overflow-x: ${value};
    `
)
export const overflowY = makeSugar(
  (value?: OverflowValue) =>
    css`
      overflow-y: ${value};
    `
)
