import { css } from '@emotion/react'
import { makeSugar, lengthSugar } from '..'

export const w = makeSugar(lengthSugar('width'))

export const h = makeSugar(lengthSugar('height'))
export const maxW = makeSugar(lengthSugar('max-width'))
export const minW = makeSugar(lengthSugar('min-width'))
export const maxH = makeSugar(lengthSugar('max-height'))
export const minH = makeSugar(lengthSugar('min-height'))

/** 宽度拉满 */
export const wFull = makeSugar(
  () => css`
    width: 100%;
  `
)

/** 高度拉满 */
export const hFull = makeSugar(
  () => css`
    height: 100%;
  `
)

/** 宽高都拉满 */
export const full = makeSugar(
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
export const square = makeSugar(lengthSugar('width', 'height'))
