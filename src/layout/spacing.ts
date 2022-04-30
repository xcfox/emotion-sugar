import { css } from '@emotion/react'
import { CssLength, CssLengthUnits, orPx } from '../helper'
import { utility } from '..'
import { lengthSugar } from '../helper'

export type CssLengthOrAuto = CssLength | 'auto'
export const m = utility(lengthSugar<CssLengthOrAuto>('margin'))
export const mx = utility(
  lengthSugar<CssLengthOrAuto>('margin-left', 'margin-right')
)
export const my = utility(
  lengthSugar<CssLengthOrAuto>('margin-top', 'margin-bottom')
)
export const ml = utility(lengthSugar<CssLengthOrAuto>('margin-left'))
export const mr = utility(lengthSugar<CssLengthOrAuto>('margin-right'))
export const mt = utility(lengthSugar<CssLengthOrAuto>('margin-top'))
export const mb = utility(lengthSugar<CssLengthOrAuto>('margin-bottom'))

export const p = utility(lengthSugar<CssLengthOrAuto>('padding'))
export const px = utility(
  lengthSugar<CssLengthOrAuto>('padding-left', 'padding-right')
)
export const py = utility(
  lengthSugar<CssLengthOrAuto>('padding-top', 'padding-bottom')
)
export const pl = utility(lengthSugar<CssLengthOrAuto>('padding-left'))
export const pr = utility(lengthSugar<CssLengthOrAuto>('padding-right'))
export const pt = utility(lengthSugar<CssLengthOrAuto>('padding-top'))
export const pb = utility(lengthSugar<CssLengthOrAuto>('padding-bottom'))

export const spaceX = utility(
  (n: CssLength, unit?: CssLengthUnits) => css`
    & :not(:last-child) {
      margin-right: ${orPx(n, unit)};
    }
  `
)

export const spaceY = utility(
  (n: CssLength, unit?: CssLengthUnits) => css`
    & :not(:last-child) {
      margin-bottom: ${orPx(n, unit)};
    }
  `
)

export const space = utility(
  (n: CssLength, unit?: CssLengthUnits) => css`
    & :not(:last-child) {
      margin-right: ${orPx(n, unit)};
      margin-bottom: ${orPx(n, unit)};
    }
  `
)
