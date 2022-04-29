import { css } from '@emotion/react'
import { utility } from '..'
import { CssLength, CssLengthUnits, orPx } from '../helper'

export type BackgroundRepeat = 'no-repeat' | 'repeat' | 'space ' | 'round'

export interface backgroundProps {
  attachment: 'fixed' | 'local' | 'scroll'
  clip: 'border-box' | 'content-box' | 'padding-box' | 'text'
  color: string
  image: string
  origin: 'border-box' | 'content-box' | 'padding-box'
  position: string
  repeat:
    | BackgroundRepeat
    | 'repeat-x'
    | 'repeat-y'
    | [BackgroundRepeat, BackgroundRepeat]
  size: 'auto' | 'cover' | 'contain' | CssLength
}

/** The `background` shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method. */
export const bg = utility((s?: string | Partial<backgroundProps>) => {
  if (typeof s === 'string')
    return css`
      background: ${s};
    `
  if (typeof s === 'object') {
    const { attachment, clip, color, image, origin, position, repeat, size } = s
    return css`
      background-attachment: ${attachment};
      background-clip: ${clip};
      background-color: ${color};
      background-image: ${image};
      background-origin: ${origin};
      background-position: ${position};
      background-repeat: ${repeat instanceof Array ? repeat.join(' ') : repeat};
      background-size: ${typeof size === 'number' ? orPx(size) : size};
    `
  }
})
