import { css } from '@emotion/react'
import { utility } from '..'

export const box = utility(
  (value: 'border-box' | 'content-box' = 'border-box') =>
    css`
      box-sizing: ${value};
    `
)
