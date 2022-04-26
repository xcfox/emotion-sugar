import { css } from '@emotion/react'
import { makeSugar } from '..'

export const bg = makeSugar(
  (s?: string) =>
    css`
      background: ${s};
    `
)

export const opacity = makeSugar(
  (n?: number) =>
    css`
      opacity: ${n ?? 0};
    `
)
