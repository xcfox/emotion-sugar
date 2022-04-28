import { css } from '@emotion/react'
import { CssLength, utility, pxTransform } from '..'

export const shadow = utility(
  (
    color: string,
    {
      x,
      y,
      blur,
      spread,
      inset,
    }: {
      x?: CssLength
      y?: CssLength
      blur?: CssLength
      spread?: CssLength
      inset?: boolean
    } = {}
  ) => {
    if (color.startsWith('#'))
      return css`
        box-shadow: ${inset ? 'inset ' : ''}${pxTransform(x ?? 0)} ${pxTransform(
            y ?? 0
          )} ${pxTransform(blur ?? 2)} ${pxTransform(spread ?? 2)} ${color};
      `
    return css`
      box-shadow: ${color};
    `
  }
)
