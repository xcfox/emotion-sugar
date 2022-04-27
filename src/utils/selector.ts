import { css, SerializedStyles } from '@emotion/react'
import { makeSugar, OrFn, sugar, Sugar } from '..'

export const hover = makeSugar(selectorSugar('&:hover'))
export const active = makeSugar(selectorSugar('&:active'))
export const focus = makeSugar(selectorSugar('&:focus'))
export const disabled = makeSugar(selectorSugar('&:disabled'))

export const selector = makeSugar(
  (key: string, sugarFn: OrFn<SerializedStyles | Sugar | string>) =>
    selectorSugar(key)(sugarFn)
)

function selectorSugar(key: string) {
  return (
    sugarFn: OrFn<SerializedStyles | Sugar | string>
  ): SerializedStyles => {
    const ss = sugarFn instanceof Function ? sugarFn(sugar()) : sugarFn
    return css`
      ${key} {
        ${ss}
      }
    `
  }
}
