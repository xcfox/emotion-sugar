import { css } from '@emotion/react'
import { makeUtility } from '..'

export const fit = makeUtility(
  (fit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down') =>
    css`
      object-fit: ${fit};
    `
)
