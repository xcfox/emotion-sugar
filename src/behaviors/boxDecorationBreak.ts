import { css } from '@emotion/react'
import { utility } from '../main'

export const decoration = utility(
  (value: 'slice' | 'clone') => css`
    box-decoration-break: ${value};
  `
)
