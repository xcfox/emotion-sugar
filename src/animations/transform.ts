import { css } from '@emotion/react'
import { CssLength, CssLengthUnits, orPx } from '../helper'
import { utility } from '..'

const originX = ['left', 'center', 'right'] as const
const originY = ['top', 'center', 'bottom'] as const

export interface TransformArgs {
  matrix: Tuple<number, 6>
  matrix3d: Tuple<number, 16>
  perspective: CssLength
  rotate: CssAngle
  rotate3d: [...Tuple<number, 3>, CssAngle]
  rotateX: CssAngle
  rotateY: CssAngle
  rotateZ: CssAngle
  scale: [CssLength, CssLength] | CssLength
  scale3d: Tuple<number, 3>
  scaleX: CssLength
  scaleY: CssLength
  scaleZ: CssLength
  skew: [CssAngle, CssAngle] | CssAngle
  skewX: CssAngle
  skewY: CssAngle
  translate: [CssLength, CssLength] | CssLength
  translate3d: [CssLength, CssLength, CssLength]
  translateX: CssLength
  translateY: CssLength
  translateZ: CssLength
  origin:
    | [
        CssLength | typeof originX[number],
        CssLength | typeof originY[number],
        CssLength?
      ]
    | CssLength
    | typeof originX[number]
    | typeof originY[number]
}

export function transformByArgs({
  matrix,
  matrix3d,
  perspective,
  rotate,
  rotate3d,
  rotateX,
  rotateY,
  rotateZ,
  scale,
  scale3d,
  scaleX,
  scaleY,
  scaleZ,
  skew,
  skewX,
  skewY,
  translate,
  translate3d,
  translateX,
  translateY,
  translateZ,
  origin,
}: Partial<TransformArgs>) {
  const transformFunctions: string[] = []
  if (matrix) {
    transformFunctions.push(`matrix(${matrix.join(',')})`)
  }
  if (matrix3d) {
    transformFunctions.push(`matrix3d(${matrix3d.join(',')})`)
  }
  if (perspective) {
    transformFunctions.push(`perspective(${orPx(perspective)})`)
  }
  if (rotate) {
    transformFunctions.push(`rotate(${orDeg(rotate)})`)
  }
  if (rotate3d) {
    const [x, y, z, a] = rotate3d
    transformFunctions.push(`rotate3d(${[x, y, z].join(',')}, ${orDeg(a)})`)
  }
  if (rotateX) {
    transformFunctions.push(`rotateX(${orDeg(rotateX)})`)
  }
  if (rotateY) {
    transformFunctions.push(`rotateY(${orDeg(rotateY)})`)
  }
  if (rotateZ) {
    transformFunctions.push(`rotateZ(${orDeg(rotateZ)})`)
  }
  if (scale) {
    transformFunctions.push(
      `scale(${scale instanceof Array ? scale.join(', ') : scale})`
    )
  }
  if (scale3d) {
    transformFunctions.push(`scale3d(${scale3d.join(',')})`)
  }
  if (scaleX) {
    transformFunctions.push(`scaleX(${scaleX})`)
  }
  if (scaleY) {
    transformFunctions.push(`scaleY(${scaleY})`)
  }
  if (scaleZ) {
    transformFunctions.push(`scaleZ(${scaleZ})`)
  }
  if (skew) {
    transformFunctions.push(
      `skew(${
        skew instanceof Array ? skew.map(orDeg).join(', ') : orDeg(skew)
      })`
    )
  }
  if (skewX) {
    transformFunctions.push(`skewX(${orDeg(skewX)})`)
  }
  if (skewY) {
    transformFunctions.push(`skewY(${orDeg(skewY)})`)
  }
  if (translate) {
    transformFunctions.push(
      `translate(${
        translate instanceof Array ? translate.join(', ') : translate
      })`
    )
  }
  if (translate3d) {
    transformFunctions.push(
      `translate3d(${translate3d.map((n) => orPx(n)).join(',')})`
    )
  }
  if (translateX) {
    transformFunctions.push(`translateX(${orPx(translateX)})`)
  }
  if (translateY) {
    transformFunctions.push(`translateY(${orPx(translateY)})`)
  }
  if (translateZ) {
    transformFunctions.push(`translateZ(${orPx(translateZ)})`)
  }
  return `
    transform: ${transformFunctions.join(' ')};
    ${
      origin
        ? `transform-origin: ${
            origin instanceof Array
              ? origin.map(originTransform).join(' ')
              : originTransform(origin)
          }`
        : ''
    }
  `
}

function originTransform(
  value: CssLength | undefined | typeof originX[number] | typeof originY[number]
): string {
  if (typeof value === 'string') return value
  return orPx(value) || ''
}

/** Utilities for controlling transform behavior. */
export const transform = utility((value?: string | Partial<TransformArgs>) => {
  if (typeof value === 'string')
    return `
      transform: ${value};
    `
  if (typeof value === 'object') {
    return transformByArgs(value)
  }
})

export const translate = utility(
  (valueX: CssLength, valueY?: CssLength) =>
    `
      transform: translate(${orPx(valueX)}, ${orPx(valueY ?? valueX)}); ;
    `
)

export const translateX = utility(
  (n: CssLength, unit?: CssLengthUnits) =>
    `
      transform: translateX(${orPx(n, unit)}); ;
    `
)
export const translateY = utility(
  (n: CssLength, unit?: CssLengthUnits) =>
    `
      transform: translateY(${orPx(n, unit)}); ;
    `
)

type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never
type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>

export type CssAngle =
  | number
  | `${'' | '-' | '+'}${number}${'deg' | 'grad' | 'turn' | 'rad'}`

export function orDeg(n: CssAngle): string {
  return typeof n === 'number' ? `${n}deg` : n
}
