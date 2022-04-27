import { css } from '@emotion/react'
import { CssLength, CssUnits, makeUtility, pxTransform } from '..'

export const transform = makeUtility(
  (value?: string) =>
    css`
      transform: ${value};
    `
)

export const translate = makeUtility(
  (valueX: CssLength, valueY?: CssLength) =>
    css`
      transform: translate(
        ${pxTransform(valueX)},
        ${pxTransform(valueY ?? valueX)}
      ); ;
    `
)

export const translateX = makeUtility(
  (n: CssLength, unit?: CssUnits) =>
    css`
      transform: translateX(${pxTransform(n, unit)}); ;
    `
)
export const translateY = makeUtility(
  (n: CssLength, unit?: CssUnits) =>
    css`
      transform: translateY(${pxTransform(n, unit)}); ;
    `
)
