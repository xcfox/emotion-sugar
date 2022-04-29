import { css } from '@emotion/react'
import { CssLength, CssLengthUnits, orPx } from '../helper'
import { utility } from '..'

export const transform = utility(
  (value?: string) =>
    css`
      transform: ${value};
    `
)

export const translate = utility(
  (valueX: CssLength, valueY?: CssLength) =>
    css`
      transform: translate(${orPx(valueX)}, ${orPx(valueY ?? valueX)}); ;
    `
)

export const translateX = utility(
  (n: CssLength, unit?: CssLengthUnits) =>
    css`
      transform: translateX(${orPx(n, unit)}); ;
    `
)
export const translateY = utility(
  (n: CssLength, unit?: CssLengthUnits) =>
    css`
      transform: translateY(${orPx(n, unit)}); ;
    `
)
