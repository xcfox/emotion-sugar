import { css, SerializedStyles } from '@emotion/react'
import { Sugar } from '.'

export type CssLength =
  | number
  | CssLengthLiteral
  | { 'css-length-value': string }
export function isCssLength(value: any): value is CssLength {
  if (typeof value === 'number') return true
  if (
    typeof value === 'object' &&
    typeof value['css-length-value'] === 'string'
  )
    return true
  if (typeof value === 'string') {
    const n = parseFloat(value)
    const u: any = value.split(n.toString())[1]
    return cssLengthUnits.includes(u)
  }
  return false
}

const cssLengthUnits = [
  'cap',
  'ch',
  'em',
  'ex',
  'ic',
  'lh',
  'rem',
  'rlh',
  'vh',
  'vw',
  'vi',
  'vb',
  'vmin',
  'vmax',
  'px',
  'cm',
  'mm',
  'Q',
  'in',
  'pc',
  'pt',
  'mozmm',
  '%',
] as const

export type CssLengthUnits = typeof cssLengthUnits[number]

export type CssLengthLiteral = `${'' | '-' | '+'}${number}${CssLengthUnits}`

export function orPx(
  n?: CssLength | CssLengthLiteral,
  unit: CssLengthUnits = 'px'
): string | undefined {
  if (typeof n == 'number') {
    return n + unit
  } else if (typeof n == 'string') {
    return n
  } else if (typeof n == 'object' && n != null) {
    return n['css-length-value']
  }
  return undefined
}

export type Utility<Args extends Array<unknown>> = <This extends Sugar>(
  this: This | void,
  ...args: Args
) => This

export type OrFn<T = SerializedStyles | Sugar | string | false> = (() => T) | T

export function lengthSugar<L = CssLength>(
  ...keys: string[]
): (n?: L, unit?: CssLengthUnits) => SerializedStyles {
  return (n, unit) => {
    const nn = orPx(n as any, unit)
    const ss = keys.map((key) => `${key}: ${nn};`)
    return css(...ss)
  }
}

export function selectorSugar(key: string) {
  return (
    sugarFn: OrFn<SerializedStyles | Sugar | string | undefined | false>
  ): SerializedStyles | undefined => {
    const ss = sugarFn instanceof Function ? sugarFn() : sugarFn
    if (!ss) return
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
