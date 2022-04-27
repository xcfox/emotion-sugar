import { css } from '@emotion/react'
import { CssLength, pxTransform, makeUtility, lengthSugar } from '..'

export const m = makeUtility(lengthSugar('margin'))
export const mx = makeUtility(lengthSugar('margin-left', 'margin-right'))
export const my = makeUtility(lengthSugar('margin-top', 'margin-bottom'))
export const ml = makeUtility(lengthSugar('margin-left'))
export const mr = makeUtility(lengthSugar('margin-right'))
export const mt = makeUtility(lengthSugar('margin-top'))
export const mb = makeUtility(lengthSugar('margin-bottom'))

export const p = makeUtility(lengthSugar('padding'))
export const px = makeUtility(lengthSugar('padding-left', 'padding-right'))
export const py = makeUtility(lengthSugar('padding-top', 'padding-bottom'))
export const pl = makeUtility(lengthSugar('padding-left'))
export const pr = makeUtility(lengthSugar('padding-right'))
export const pt = makeUtility(lengthSugar('padding-top'))
export const pb = makeUtility(lengthSugar('padding-bottom'))

export const spaceX = makeUtility(
  (n: CssLength) => css`
    & :not(:last-child) {
      margin-right: ${pxTransform(n)};
    }
  `
)

export const spaceY = makeUtility(
  (n: CssLength) => css`
    & :not(:last-child) {
      margin-bottom: ${pxTransform(n)};
    }
  `
)
