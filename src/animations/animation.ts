import { css, Keyframes } from '@emotion/react'
import { utility } from '../main'

export type CssTime = number | `${number}${'s' | 'ms'}`

export interface AnimationArgs {
  name: Keyframes
  duration?: CssTime
  timingFunction?: string
  delay?: CssTime
  iterationCount?: number | 'infinite'
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
  fillMode?: 'none' | 'forwards' | 'backwards' | 'both'
  playState?: 'running' | 'paused'
}

/** Utilities for animating elements with CSS animations. */
export const animation = utility(
  (arg: string | AnimationArgs, ...args: AnimationArgs[]) => {
    if (typeof arg === 'string') {
      return `
        animation: ${arg};
      `
    }
    const texts = [arg, ...args].map(
      ({
        name,
        duration = 2333,
        timingFunction = 'cubic-bezier(0.42, 0, 0.24, 1)',
        delay = 0,
        iterationCount = 'infinite',
        direction = 'normal',
        fillMode = 'none',
        playState = 'running',
      }) => {
        return `${orMs(duration)} ${timingFunction} ${orMs(
          delay
        )} ${iterationCount} ${direction} ${fillMode} ${playState} ${name}`
      }
    )
    return `
      animation: ${texts.join(', ')};
    `
  }
)

/** Utilities for animating elements with CSS animations. */
export const animate = animation

export function orMs(n: CssTime | undefined): string {
  if (!n) return ''
  return typeof n === 'number' ? `${n}ms` : n
}
