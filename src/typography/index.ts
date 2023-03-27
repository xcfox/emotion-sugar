import { css } from '@emotion/react'
import { utility } from '..'
import { lengthSugar, CssLength, orPx, OrArray, asArray } from '../helper'

export const color = utility(
  (colorInput: string) =>
    `
      color: ${colorInput};
    `
)

export interface FontArgs {
  style: 'normal' | 'italic' | 'oblique' | `${number}deg`
  variant: string
  weight: 'normal' | 'bold' | 'lighter' | 'bolder' | number
  size: CssLength | 'larger' | 'smaller'
  lineHeight: 'normal' | CssLength
  color: string
  family: OrArray<string>
}

/** */
export const font = utility((args: string | Partial<FontArgs>) => {
  if (typeof args === 'string')
    return `
      font: ${args};
    `
  const { style, variant, weight, size, lineHeight, family, color } = args
  return `
    font-style: ${style};
    font-variant: ${variant};
    font-weight: ${weight};
    font-size: ${orPx(size as CssLength)};
    line-height: ${lineHeight};
    font-family: ${asArray(family)?.join(', ')};
    color: ${color};
  `
})

export const text = utility(lengthSugar('font-size'))

export const fontSize = utility(lengthSugar('font-size'))

export const fontWeight = utility(
  (n: number | 'bold') =>
    `
      font-weight: ${n};
    `
)

export const lineHeight = utility(lengthSugar('line-height'))

export const fontSans = utility(
  () => `
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
      return `
        text-shadow: ${orPx(x ?? 0)} ${orPx(y ?? 0)} ${orPx(blur ?? 2)}
          ${orPx(spread ?? 2)} ${color};
      `
    return `
      text-shadow: ${color};
    `
  }
)
