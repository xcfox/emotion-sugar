import { css } from '@emotion/react'
import { CssLength, pxTransform, makeSugar } from '..'

export const rounded = makeSugar(
  (n: CssLength = 2333) =>
    css`
      border-radius: ${pxTransform(n)};
    `
)
export const border = makeSugar((color: string | null, width: CssLength = 1) =>
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

export const outlineNone = makeSugar(
  () =>
    css`
      outline: none;
    `
)
