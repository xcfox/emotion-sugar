import { css } from '@emotion/react'
import { makeUtility } from '..'

export const transition = makeUtility(
  (value: string | number = 233) =>
    css`
      transition: ${typeof value === 'number'
        ? value + 'ms cubic-bezier(0.42, 0, 0.24, 1)'
        : value};
    `
)
