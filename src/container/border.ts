import { css } from '@emotion/react'
import { CssLength, pxTransform, makeUtility } from '..'

export const rounded = makeUtility(
  (n: CssLength = 2333) =>
    css`
      border-radius: ${pxTransform(n)};
    `
)
export const border = makeUtility(
  (color: string | null, width: CssLength = 1) =>
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

export const outlineNone = makeUtility(
  () =>
    css`
      outline: none;
    `
)
