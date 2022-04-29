import { css, SerializedStyles } from '@emotion/react'
import { Sugar } from '.'

export type CssLength = number | CssLiteral | undefined
export type CssLengthUnits =
  | 'cap'
  | 'ch'
  | 'em'
  | 'ex'
  | 'ic'
  | 'lh'
  | 'rem'
  | 'rlh'
  | 'vh'
  | 'vw'
  | 'vi'
  | 'vb'
  | 'vmin'
  | 'vmax'
  | 'px'
  | 'cm'
  | 'mm'
  | 'Q'
  | 'in'
  | 'pc'
  | 'pt'
  | 'mozmm'
  | '%'

export type CssLiteral = `${number}${CssLengthUnits}`

export function pxTransform(
  n: CssLength | CssLiteral,
  unit: CssLengthUnits = 'px'
): string | undefined {
  if (typeof n == 'number') {
    return n + unit
  } else if (typeof n == 'string') {
    return n
  }
  return undefined
}

export type Utility<Args extends Array<unknown>> = <This extends Sugar>(
  this: This | void,
  ...args: Args
) => This

export type OrFn<T = SerializedStyles | Sugar | string | false> = (() => T) | T

export function lengthSugar(
  ...keys: string[]
): (n?: CssLength, unit?: CssLengthUnits) => SerializedStyles {
  return (n, unit) => {
    const nn = pxTransform(n, unit)
    const ss = keys.map((key) => `${key}: ${nn};`)
    return css(...ss)
  }
}

export function selectorSugar(key: string) {
  return (
    sugarFn: OrFn<SerializedStyles | Sugar | string>
  ): SerializedStyles => {
    const ss = sugarFn instanceof Function ? sugarFn() : sugarFn
    return css`
      ${key} {
        ${ss}
      }
    `
  }
}

export type OrArray<T> = T | T[]

export function asArray<T>(args: OrArray<T>): T[] {
  let isArray = args instanceof Array
  if (!isArray) return [args as T]
  return args instanceof Array ? args : [args]
}
