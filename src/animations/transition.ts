import { css } from '@emotion/react'
import { utility } from '..'
import { asArray } from '../helper'
import { CssTime, orMs } from './animation'

export interface TransformArgs {
  property: string | string[]
  duration: CssTime
  timingFunction: string
  delay: CssTime
}

/** Utilities for controlling the duration of CSS transitions. */
export const transition = utility(
  (value: string | number | Partial<TransformArgs> = 233) => {
    if (typeof value === 'string')
      return css`
        transition: ${value};
      `
    if (typeof value === 'number')
      return css`
        transition: ${value}ms cubic-bezier(0.42, 0, 0.24, 1);
      `
    const {
      property,
      duration,
      timingFunction = 'cubic-bezier(0.42, 0, 0.24, 1)',
      delay,
    } = value
    return css`
      transition-property: ${property && asArray(property).join(', ')};
      transition-duration: ${orMs(duration)};
      transition-timing-function: ${timingFunction};
      transition-delay: ${orMs(delay)};
    `
  }
)
