import { css } from '@emotion/react'
import { CssLength, CssUnits, pxTransform, utility } from '..'

export type BackgroundRepeat = 'no-repeat' | 'repeat' | 'space ' | 'round'

export interface backgroundProps {
  attachment: 'fixed' | 'local' | 'scroll'
  clip: 'border-box' | 'content-box' | 'padding-box' | 'text'
  color: string
  image: string
  origin: 'border-box' | 'content-box' | 'padding-box'
  position: string
  repeat: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y'
  size: 'auto' | 'cover' | 'contain' | [CssLength, CssUnits?]
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
      background-repeat: ${repeat};
      background-size: ${size instanceof Array ? pxTransform(...size) : size};
    `
  }
})

export const opacity = utility(
  (n?: number) =>
    css`
      opacity: ${n};
    `
)
