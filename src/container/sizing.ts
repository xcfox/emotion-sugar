import { css } from '@emotion/react'
import { utility } from '..'
import { CssLength, lengthSugar } from '../helper'

export type CssContent = 'max-content' | 'min-content' | 'fit-content' | 'auto'
export type CssLengthOrContent = CssLength | CssContent

export const w = utility(lengthSugar<CssLengthOrContent>('width'))
export const h = utility(lengthSugar<CssLengthOrContent>('height'))
export const maxW = utility(lengthSugar<CssLengthOrContent>('max-width'))
export const minW = utility(lengthSugar<CssLengthOrContent>('min-width'))
export const maxH = utility(lengthSugar<CssLengthOrContent>('max-height'))
export const minH = utility(lengthSugar<CssLengthOrContent>('min-height'))

/** set width full */
export const wFull = utility(
  () => `
    width: 100%;
  `
)

/** set height full */
export const hFull = utility(
  () => `
    height: 100%;
  `
)

/** set width and height full */
export const full = utility(
  () => `
    width: 100%;
    height: 100%;
  `
)

/** set both width and height
 * ```css
 * {
 *   width: $n;
 *   height: $n;
 * }
 * ``` */
export const square = utility(
  lengthSugar<CssLengthOrContent>('width', 'height')
)
