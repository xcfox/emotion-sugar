import { css } from '@emotion/react'
import { makeUtility } from '..'

export const bg = makeUtility(
  (s?: string) =>
    css`
      background: ${s};
    `
)

export const opacity = makeUtility(
  (n?: number) =>
    css`
      opacity: ${n ?? 0};
    `
)
