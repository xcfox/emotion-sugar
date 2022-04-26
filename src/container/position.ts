import { css } from '@emotion/react'
import { makeSugar, lengthSugar } from '..'

export const position = makeSugar(
  (value?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed') =>
    css`
      position: ${value};
    `
)

export const relative = makeSugar(
  () =>
    css`
      position: relative;
    `
)

export const absolute = makeSugar(
  () => css`
    position: absolute;
  `
)

export const fixed = makeSugar(
  () =>
    css`
      position: fixed;
    `
)

export const zIndex = makeSugar(
  (value?: number) =>
    css`
      z-index: ${value};
    `
)

export const left = makeSugar(lengthSugar('left'))
export const right = makeSugar(lengthSugar('right'))
export const top = makeSugar(lengthSugar('top'))
export const bottom = makeSugar(lengthSugar('bottom'))
