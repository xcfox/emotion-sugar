import { css, SerializedStyles } from '@emotion/react'
import { Sugar } from 'src'

export type CssLength = number | string | undefined
export type CssUnits =
  | 'cm'
  | 'mm'
  | 'Q'
  | 'in'
  | 'pc'
  | 'pt'
  | 'px'
  | 'em'
  | 'ex'
  | 'ch'
  | 'rem'
  | 'lh'
  | 'vw'
  | 'vh'
  | 'vmin'
  | 'vmax'
  | '%'

export function pxTransform(
  n: CssLength,
  unit: CssUnits = 'px'
): string | undefined {
  if (typeof n == 'number') {
    return n + unit
  } else if (typeof n == 'string') {
    return n
  }
  return undefined
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

export type OrFn<T> = ((sugar: Sugar) => T) | T
