import { css } from '@emotion/react'
import { CssLength, pxTransform, makeSugar, lengthSugar } from '..'

export const m = makeSugar(lengthSugar('margin'))
export const mx = makeSugar(lengthSugar('margin-left', 'margin-right'))
export const my = makeSugar(lengthSugar('margin-top', 'margin-bottom'))
export const ml = makeSugar(lengthSugar('margin-left'))
export const mr = makeSugar(lengthSugar('margin-right'))
export const mt = makeSugar(lengthSugar('margin-top'))
export const mb = makeSugar(lengthSugar('margin-bottom'))

export const p = makeSugar(lengthSugar('padding'))
export const px = makeSugar(lengthSugar('padding-left', 'padding-right'))
export const py = makeSugar(lengthSugar('padding-top', 'padding-bottom'))
export const pl = makeSugar(lengthSugar('padding-left'))
export const pr = makeSugar(lengthSugar('padding-right'))
export const pt = makeSugar(lengthSugar('padding-top'))
export const pb = makeSugar(lengthSugar('padding-bottom'))

export const spaceX = makeSugar(
  (n: CssLength) => css`
    & :not(:last-child) {
      margin-right: ${pxTransform(n)};
    }
  `
)

export const spaceY = makeSugar(
  (n: CssLength) => css`
    & :not(:last-child) {
      margin-bottom: ${pxTransform(n)};
    }
  `
)
