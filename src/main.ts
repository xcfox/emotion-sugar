import { Interpolation, Theme } from '@emotion/react'
import { OrFn, Utility } from './helper'
import { Sugar } from '.'

export const utility = sugarMaker(() => new Sugar())

/** Any InterpolationPrimitive
 * @example
 * sugar(css`object-fit: cover;`)
 * sugar('object-fit: cover')*/
export const sugar = utility((style?: Interpolation<Theme> | false) => {
  return style
})

export function sugarMaker<SS extends Array<Interpolation<Theme>>>(
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
  fn: (...args: Args) => Interpolation<Theme> | undefined | false
) => Utility<Args>
