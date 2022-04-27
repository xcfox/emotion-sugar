import { css, Keyframes } from '@emotion/react'
import { makeUtility } from '..'

export interface AnimationProps {
  duration?: number | string
  timingFunction?: string
  delay?: number | string
  iterationCount?: number | string
  direction?: string
  fillMode?: string
  playState?: string
}

export const animation = makeUtility(
  (
    keyframes: Keyframes,
    {
      duration = 2333,
      timingFunction = 'cubic-bezier(0.42, 0, 0.24, 1)',
      delay = 0,
      iterationCount = 'infinite',
      direction = 'normal',
      fillMode = 'none',
      playState = 'running',
    }: AnimationProps = {}
  ) =>
    css`
      animation: ${ms(duration)} ${timingFunction} ${ms(delay)}
        ${iterationCount} ${direction} ${fillMode} ${playState} ${keyframes};
    `
)

function ms(n: string | number): string {
  return typeof n === 'number' ? `${n}ms` : n
}
