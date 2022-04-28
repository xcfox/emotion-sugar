import { css } from '@emotion/react'
import { utility } from '..'

export const bg = utility(
  (s?: string) =>
    css`
      background: ${s};
    `
)

export const opacity = utility(
  (n?: number) =>
    css`
      opacity: ${n ?? 0};
    `
)
