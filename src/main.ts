import { Interpolation, SerializedStyles, Theme } from '@emotion/react'
import { InterpolationPrimitive } from '@emotion/serialize'
import { OrFn, Utility } from './helper'
import { Sugar } from '.'

export const utility = sugarMaker(() => new Sugar())

/** Any InterpolationPrimitive
 * @example
 * sugar(css`object-fit: cover;`)
 * sugar('object-fit: cover')*/
export const sugar = utility((style?: InterpolationPrimitive | false) => {
  return style as InterpolationPrimitive
})

export function sugarMaker<SS extends Array<InterpolationPrimitive>>(
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
  fn: (...args: Args) => InterpolationPrimitive | undefined | false
) => Utility<Args>
