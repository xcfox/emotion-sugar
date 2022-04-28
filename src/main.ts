import { SerializedStyles } from '@emotion/react'
import { Sugar, OrFn, Utility } from '.'

export const utility = sugarMaker(() => new Sugar())

/** Any SerializedStyles
 * @example
 * sugar(css`object-fit: cover;`)
 * sugar('object-fit: cover')*/
export const sugar = utility(
  (style?: OrFn<SerializedStyles | Sugar | string | false>) => {
    if (typeof style === 'function') {
      style = style(sugar())
    }
    return style as SerializedStyles
  }
)

export function sugarMaker<SS extends Array<SerializedStyles>>(
  init: () => SS
): MakeSugar {
  return (fn) => {
    return function (this, ...args) {
      const self = this ?? init()
      const style = fn(...args)
      style && self.push(style)
      return self as any
    }
  }
}

export type MakeSugar = <Args extends Array<unknown>>(
  fn: (...args: Args) => SerializedStyles | undefined | false
) => Utility<Args>
