import { css } from '@emotion/react'
import { makeUtility, lengthSugar } from '..'

export const position = makeUtility(
  (value?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed') =>
    css`
      position: ${value};
    `
)

export const relative = makeUtility(
  () =>
    css`
      position: relative;
    `
)

export const absolute = makeUtility(
  () => css`
    position: absolute;
  `
)

export const fixed = makeUtility(
  () =>
    css`
      position: fixed;
    `
)

export const zIndex = makeUtility(
  (value?: number) =>
    css`
      z-index: ${value};
    `
)

export const left = makeUtility(lengthSugar('left'))
export const right = makeUtility(lengthSugar('right'))
export const top = makeUtility(lengthSugar('top'))
export const bottom = makeUtility(lengthSugar('bottom'))
