import { css } from '@emotion/react'
import { makeUtility, lengthSugar } from '..'

export const w = makeUtility(lengthSugar('width'))

export const h = makeUtility(lengthSugar('height'))
export const maxW = makeUtility(lengthSugar('max-width'))
export const minW = makeUtility(lengthSugar('min-width'))
export const maxH = makeUtility(lengthSugar('max-height'))
export const minH = makeUtility(lengthSugar('min-height'))

/** 宽度拉满 */
export const wFull = makeUtility(
  () => css`
    width: 100%;
  `
)

/** 高度拉满 */
export const hFull = makeUtility(
  () => css`
    height: 100%;
  `
)

/** 宽高都拉满 */
export const full = makeUtility(
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
export const square = makeUtility(lengthSugar('width', 'height'))
