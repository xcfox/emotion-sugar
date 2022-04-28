import { css } from '@emotion/react'
import { CssLength, pxTransform, utility } from '..'

export const rounded = utility(
  (n: CssLength = 2333) =>
    css`
      border-radius: ${pxTransform(n)};
    `
)
export const border = utility((color: string | null, width: CssLength = 1) =>
  color === null
    ? css`
        border: none;
      `
    : css`
        border-style: solid;
        border-color: ${color};
        border-width: ${pxTransform(width)};
      `
)

export const outlineNone = utility(
  () =>
    css`
      outline: none;
    `
)
