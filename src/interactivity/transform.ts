import { css } from '@emotion/react'
import { CssLength, CssLengthUnits, pxTransform } from '../helper'
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
      transform: translate(
        ${pxTransform(valueX)},
        ${pxTransform(valueY ?? valueX)}
      ); ;
    `
)

export const translateX = utility(
  (n: CssLength, unit?: CssLengthUnits) =>
    css`
      transform: translateX(${pxTransform(n, unit)}); ;
    `
)
export const translateY = utility(
  (n: CssLength, unit?: CssLengthUnits) =>
    css`
      transform: translateY(${pxTransform(n, unit)}); ;
    `
)
