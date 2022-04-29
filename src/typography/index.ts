import { css } from '@emotion/react'
import { utility } from '..'
import { lengthSugar, CssLength, orPx } from '../helper'

export const color = utility(
  (colorInput: string) =>
    css`
      color: ${colorInput};
    `
)

export const text = utility(lengthSugar('font-size'))

export const fontSize = utility(lengthSugar('font-size'))

export const fontWeight = utility(
  (n: number | 'bold') =>
    css`
      font-weight: ${n};
    `
)

export const lineHeight = utility(lengthSugar('line-height'))

export const fontSans = utility(
  () => css`
    font-family: sans-serif;
  `
)

export const textShadow = utility(
  (
    color: string,
    {
      x,
      y,
      blur,
      spread,
    }: {
      x?: CssLength
      y?: CssLength
      blur?: CssLength
      spread?: CssLength
    } = {}
  ) => {
    if (color.startsWith('#'))
      return css`
        text-shadow: ${orPx(x ?? 0)} ${orPx(y ?? 0)} ${orPx(blur ?? 2)}
          ${orPx(spread ?? 2)} ${color};
      `
    return css`
      text-shadow: ${color};
    `
  }
)
