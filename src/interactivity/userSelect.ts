import { css } from '@emotion/react'
import { makeSugar } from '..'

function _select(
  select:
    | 'none'
    | 'auto'
    | 'text'
    | 'contain'
    | 'all'
    | 'inherit'
    | 'initial'
    | 'unset'
) {
  return css`
    user-select: ${select};
  `
}

export const select = makeSugar(_select)
export const userSelect = makeSugar(_select)
