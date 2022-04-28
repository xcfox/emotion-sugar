import { css } from '@emotion/react'
import { utility, lengthSugar } from '..'

export const w = utility(lengthSugar('width'))
export const h = utility(lengthSugar('height'))
export const maxW = utility(lengthSugar('max-width'))
export const minW = utility(lengthSugar('min-width'))
export const maxH = utility(lengthSugar('max-height'))
export const minH = utility(lengthSugar('min-height'))

/** set width full */
export const wFull = utility(
  () => css`
    width: 100%;
  `
)

/** set height full */
export const hFull = utility(
  () => css`
    height: 100%;
  `
)

/** set width and height full */
export const full = utility(
  () => css`
    width: 100%;
    height: 100%;
  `
)

/** 正方形
 * ```css
 * {
 *   width: $n;
 *   height: $n;
 * }
 * ``` */
export const square = utility(lengthSugar('width', 'height'))
