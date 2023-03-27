import { css } from '@emotion/react'
import { utility } from '..'

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
  return `
    user-select: ${select};
  `
}

export const select = utility(_select)
export const userSelect = utility(_select)
