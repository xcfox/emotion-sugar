import { SerializedStyles } from '@emotion/react'
import { Sugar, OrFn } from '.'

/** Any SerializedStyles
 * @example
 * sugar(css`object-fit: cover;`)
 * sugar('object-fit: cover')*/
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
