import { css, SerializedStyles } from '@emotion/react'
import { makeUtility, OrFn, sugar, Sugar } from '..'

export const hover = makeUtility(selectorSugar('&:hover'))
export const active = makeUtility(selectorSugar('&:active'))
export const focus = makeUtility(selectorSugar('&:focus'))
export const disabled = makeUtility(selectorSugar('&:disabled'))

export const selector = makeUtility(
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
