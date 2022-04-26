import { css } from '@emotion/react'
import { CssLength, CssUnits, makeSugar, pxTransform } from '..'

export const transform = makeSugar(
  (value?: string) =>
    css`
      transform: ${value};
    `
)

export const translate = makeSugar(
  (valueX: CssLength, valueY?: CssLength) =>
    css`
      transform: translate(
        ${pxTransform(valueX)},
        ${pxTransform(valueY ?? valueX)}
      ); ;
    `
)

export const translateX = makeSugar(
  (n: CssLength, unit?: CssUnits) =>
    css`
      transform: translateX(${pxTransform(n, unit)}); ;
    `
)
export const translateY = makeSugar(
  (n: CssLength, unit?: CssUnits) =>
    css`
      transform: translateY(${pxTransform(n, unit)}); ;
    `
)
