import { css } from '@emotion/react'
import { makeSugar, lengthSugar, CssLength, pxTransform } from '..'

export const color = makeSugar(
  (colorInput: string) =>
    css`
      color: ${colorInput};
    `
)

export const text = makeSugar(lengthSugar('font-size'))

export const fontSize = makeSugar(lengthSugar('font-size'))

export const fontWeight = makeSugar(
  (n: number | 'bold') =>
    css`
      font-weight: ${n};
    `
)

export const lineHeight = makeSugar(lengthSugar('line-height'))

export const fontSans = makeSugar(
  () => css`
    font-family: sans-serif;
  `
)

export const textShadow = makeSugar(
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
