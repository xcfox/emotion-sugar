import { css } from '@emotion/react'
import { utility } from '..'

export type MixBlendMode =
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity'

export const mixBlendMode = utility(
  (value?: MixBlendMode) => css`
    mix-blend-mode: ${value};
  `
)

/** Utilities for controlling how an element should blend with the background.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode)
 */
export const mixBlend = mixBlendMode
