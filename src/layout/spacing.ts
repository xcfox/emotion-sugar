import { css } from '@emotion/react'
import { CssLength, CssLengthUnits, pxTransform } from '../helper'
import { utility } from '..'
import { lengthSugar } from '../helper'

export const m = utility(lengthSugar('margin'))
export const mx = utility(lengthSugar('margin-left', 'margin-right'))
export const my = utility(lengthSugar('margin-top', 'margin-bottom'))
export const ml = utility(lengthSugar('margin-left'))
export const mr = utility(lengthSugar('margin-right'))
export const mt = utility(lengthSugar('margin-top'))
export const mb = utility(lengthSugar('margin-bottom'))

export const p = utility(lengthSugar('padding'))
export const px = utility(lengthSugar('padding-left', 'padding-right'))
export const py = utility(lengthSugar('padding-top', 'padding-bottom'))
export const pl = utility(lengthSugar('padding-left'))
export const pr = utility(lengthSugar('padding-right'))
export const pt = utility(lengthSugar('padding-top'))
export const pb = utility(lengthSugar('padding-bottom'))

export const spaceX = utility(
  (n: CssLength, unit?: CssLengthUnits) => css`
    & :not(:last-child) {
      margin-right: ${pxTransform(n, unit)};
    }
  `
)

export const spaceY = utility(
  (n: CssLength, unit?: CssLengthUnits) => css`
    & :not(:last-child) {
      margin-bottom: ${pxTransform(n, unit)};
    }
  `
)

export const space = utility(
  (n: CssLength, unit?: CssLengthUnits) => css`
    & :not(:last-child) {
      margin-right: ${pxTransform(n, unit)};
      margin-bottom: ${pxTransform(n, unit)};
    }
  `
)
