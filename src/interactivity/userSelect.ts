import { css } from '@emotion/react'
import { makeUtility } from '..'

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

export const select = makeUtility(_select)
export const userSelect = makeUtility(_select)
