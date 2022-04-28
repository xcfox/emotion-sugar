import { css } from '@emotion/react'
import { CssLength, pxTransform, utility, lengthSugar } from '..'

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
  (n: CssLength) => css`
    & :not(:last-child) {
      margin-right: ${pxTransform(n)};
    }
  `
)

export const spaceY = utility(
  (n: CssLength) => css`
    & :not(:last-child) {
      margin-bottom: ${pxTransform(n)};
    }
  `
)
