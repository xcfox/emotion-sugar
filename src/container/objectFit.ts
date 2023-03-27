import { css } from '@emotion/react'
import { utility } from '..'

export const fit = utility(
  (fit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down') =>
    `
      object-fit: ${fit};
    `
)
