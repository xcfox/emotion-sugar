import { css } from '@emotion/react'
import { utility } from '../main'

export const decoration = utility(
  (value: 'slice' | 'clone') => `
    box-decoration-break: ${value};
  `
)
