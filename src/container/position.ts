import { css } from '@emotion/react'
import { lengthSugar } from '../helper'
import { utility } from '../'

export const position = utility(
  (value?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed') =>
    css`
      position: ${value};
    `
)

export const relative = utility(
  () =>
    css`
      position: relative;
    `
)

export const absolute = utility(
  () => css`
    position: absolute;
  `
)

export const fixed = utility(
  () =>
    css`
      position: fixed;
    `
)

export const zIndex = utility(
  (value?: number) =>
    css`
      z-index: ${value};
    `
)

export const left = utility(lengthSugar('left'))
export const right = utility(lengthSugar('right'))
export const top = utility(lengthSugar('top'))
export const bottom = utility(lengthSugar('bottom'))
