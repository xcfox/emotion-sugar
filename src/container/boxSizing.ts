import { css } from '@emotion/react'
import { makeUtility } from '..'

export const box = makeUtility(
  (value: 'border-box' | 'content-box' = 'border-box') =>
    css`
      box-sizing: ${value};
    `
)
