import { css } from '@emotion/react'
import { makeSugar, sugar, Sugar } from '..'

export const hover = makeSugar(pseudoClassSugar('&:hover'))
export const active = makeSugar(pseudoClassSugar('&:active'))
export const focus = makeSugar(pseudoClassSugar('&:focus'))
export const disabled = makeSugar(pseudoClassSugar('&:disabled'))

export const pseudo = makeSugar(
  (key: string, sugarFn: (sugar: Sugar) => Sugar) =>
    css`
      ${key} {
        ${sugarFn(sugar())}
      }
    `
)

function pseudoClassSugar(key: string) {
  return (sugarFn: (sugar: Sugar) => Sugar) =>
    css`
      ${key} {
        ${sugarFn(sugar())}
      }
    `
}
