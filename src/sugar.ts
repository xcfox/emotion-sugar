import { css, SerializedStyles } from '@emotion/react'
import { CssLength, CssUnits, pxTransform, Sugar } from '.'

export type OrFn<T> = ((sugar: Sugar) => T) | T

/** any SerializedStyles
 * @example
 * sugar(css`
    object-fit: cover;
`)*/
export const sugar = makeSugar(
  (style?: OrFn<SerializedStyles | Sugar | string | false>) => {
    if (typeof style === 'function') {
      style = style(sugar())
    }
    return style as SerializedStyles
  }
)

export function confirmSugar(self: Sugar | void): Sugar {
  if (self instanceof Sugar) return self
  return new Sugar()
}

export function makeSugar<Args extends Array<unknown>>(
  fn: (...args: Args) => SerializedStyles | undefined
): (this: void | Sugar, ...args: Args) => Sugar {
  return function (this, ...args) {
    const self = confirmSugar(this)
    const style = fn(...args)
    style && self.push(style)
    return self
  }
}

export function lengthSugar(
  ...keys: string[]
): (n?: CssLength, unit?: CssUnits) => SerializedStyles {
  return (n, unit) => {
    const nn = pxTransform(n, unit)
    const ss = keys.map((key) => `${key}: ${nn};`)
    return css(...ss)
  }
}
