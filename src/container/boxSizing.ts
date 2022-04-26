import { css } from '@emotion/react'
import { makeSugar } from '..'

export const box = makeSugar(
  (value: 'border-box' | 'content-box' = 'border-box') =>
    css`
      box-sizing: ${value};
    `
)
