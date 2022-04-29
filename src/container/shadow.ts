import { css } from '@emotion/react'
import { utility } from '..'
import { CssLength, pxTransform } from '../helper'

export const shadow = utility(
  (
    props:
      | {
          x?: CssLength
          y?: CssLength
          blur?: CssLength
          spread?: CssLength
          inset?: boolean
          color: string
        }
      | string
  ) => {
    if (typeof props === 'string')
      return css`
        box-shadow: ${props};
      `
    const { x, y, blur, spread, inset, color } = props
    return css`
      box-shadow: ${inset ? 'inset ' : ''}${pxTransform(x ?? 0)} ${pxTransform(
          y ?? 0
        )} ${pxTransform(blur ?? 2)} ${pxTransform(spread ?? 2)} ${color};
    `
  }
)

export const boxShadow = shadow
