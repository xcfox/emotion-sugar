import {
  CssLength,
  CssLengthUnits,
  OrFn,
  pxTransform,
  selectorSugar,
  Utility,
} from '../helper'
import { utility } from '..'
import { css } from '@emotion/react'

export const sm = utility(selectorSugar('@media (min-width: 640px)'))
export const md = utility(selectorSugar('@media (min-width: 768px)'))
export const lg = utility(selectorSugar('@media (min-width: 1024px)'))
export const xl = utility(selectorSugar('@media (min-width: 1280px)'))
export const xxl = utility(selectorSugar('@media (min-width: 1536)'))

export const screen: Utility<
  [value: CssLength | [CssLength, CssLengthUnits], style: OrFn]
> = utility((value: CssLength | [CssLength, CssLengthUnits], style: OrFn) => {
  const ss = style instanceof Function ? style() : style
  return css`
    @media (min-width: ${pxTransform(value)}) {
      ${ss}
    }
  `
})
