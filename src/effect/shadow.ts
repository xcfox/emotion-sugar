import { css } from '@emotion/react'
import { utility } from '..'
import { CssLength, OrArray, orPx } from '../helper'

export interface ShadowProps {
  x?: CssLength
  y?: CssLength
  blur?: CssLength
  spread?: CssLength
  inset?: boolean
  color: string
}

export const shadow = utility(
  (first: ShadowProps | string, ...rest: ShadowProps[]) => {
    if (typeof first === 'string')
      return css`
        box-shadow: ${first};
      `

    const shadows = [first, ...rest]
    const shadowExpressions = shadows.map(
      ({ x, y, blur, spread, inset, color }) =>
        `${inset ? 'inset ' : ''}${orPx(x ?? 0)} ${orPx(y ?? 0)} ${orPx(
          blur ?? 0
        )} ${orPx(spread ?? 0)} ${color}`
    )
    return css`
      box-shadow: ${shadowExpressions.join(', ')};
    `
  }
)

export const boxShadow = shadow
