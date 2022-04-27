import { css } from '@emotion/react'
import { makeUtility, lengthSugar, CssLength, pxTransform } from '..'

export const color = makeUtility(
  (colorInput: string) =>
    css`
      color: ${colorInput};
    `
)

export const text = makeUtility(lengthSugar('font-size'))

export const fontSize = makeUtility(lengthSugar('font-size'))

export const fontWeight = makeUtility(
  (n: number | 'bold') =>
    css`
      font-weight: ${n};
    `
)

export const lineHeight = makeUtility(lengthSugar('line-height'))

export const fontSans = makeUtility(
  () => css`
    font-family: sans-serif;
  `
)

export const textShadow = makeUtility(
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
        text-shadow: ${pxTransform(x ?? 0)} ${pxTransform(y ?? 0)}
          ${pxTransform(blur ?? 2)} ${pxTransform(spread ?? 2)} ${color};
      `
    return css`
      text-shadow: ${color};
    `
  }
)
