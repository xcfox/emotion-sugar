import { css } from '@emotion/react'
import { utility } from '..'

export const resize = utility(
  (
    value?:
      | 'none'
      | 'both'
      | 'horizontal'
      | 'vertical'
      | 'block'
      | 'inline'
      | 'inherit'
      | 'initial'
      | 'unset'
  ) => `
    resize: ${value};
  `
)
