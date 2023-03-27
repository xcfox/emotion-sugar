import { css } from '@emotion/react'
import { utility } from '..'

export const boxSizing = utility(
  (value: 'border-box' | 'content-box' = 'border-box') =>
    `
      box-sizing: ${value};
    `
)

export const box = boxSizing
