import { css } from '@emotion/react'
import { makeSugar } from '..'

export const fit = makeSugar(
  (fit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down') =>
    css`
      object-fit: ${fit};
    `
)
