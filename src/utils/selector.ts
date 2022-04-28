import { css, SerializedStyles } from '@emotion/react'
import { utility, OrFn, sugar, Sugar } from '..'

export const hover = utility(selectorSugar('&:hover'))
export const active = utility(selectorSugar('&:active'))
export const focus = utility(selectorSugar('&:focus'))
export const disabled = utility(selectorSugar('&:disabled'))

export const selector = utility(
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
