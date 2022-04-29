import { css } from '@emotion/react'
import { asArray, CssLength, OrArray, orPx } from '../helper'
import { utility } from '..'

export const rounded = utility(
  (n: CssLength = 2333) =>
    css`
      border-radius: ${orPx(n)};
    `
)

export type BorderStyle =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'

export interface BorderProps {
  style: OrArray<BorderStyle>
  width: OrArray<CssLength>
  color: OrArray<string>
}

/** The border shorthand CSS property sets an element's border. */
export const border = utility(
  (props: string | Partial<BorderProps>, w: CssLength = 1) => {
    if (typeof props === 'string') {
      return css`
        border-style: solid;
        border-color: ${props};
        border-width: ${orPx(w)};
      `
    }
    const { style = 'solid', width, color } = props
    return css`
      border-style: ${asArray(style).join(' ')};
      border-color: ${asArray(color).join(' ')};
      border-width: ${asArray(width)
        .map((n) => orPx(n))
        .join(' ')};
    `
  }
)
