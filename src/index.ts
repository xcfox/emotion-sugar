// This file is generated by ./script/discover.js
import { SerializedStyles } from '@emotion/react'
import { sugar } from './sugar'
import { bg, opacity } from './container/background'
import { rounded, border, outlineNone } from './container/border'
import { box } from './container/boxSizing'
import { fit } from './container/objectFit'
import {
  position,
  relative,
  absolute,
  fixed,
  zIndex,
  left,
  right,
  top,
  bottom,
} from './container/position'
import { shadow } from './container/shadow'
import {
  w,
  h,
  maxW,
  minW,
  maxH,
  minH,
  wFull,
  hFull,
  full,
  square,
} from './container/sizing'
import { animation } from './interactivity/animation'
import { cursor, pointerEvents } from './interactivity/cursor'
import {
  resize,
  overflow,
  overflowX,
  overflowY,
} from './interactivity/overflow'
import {
  transform,
  translate,
  translateX,
  translateY,
} from './interactivity/transform'
import { transition } from './interactivity/transition'
import { select, userSelect } from './interactivity/userSelect'
import {
  row,
  column,
  center,
  flex,
  flexGrow,
  grow,
  flexShrink,
  shrink,
  alignItems,
  alignSelf,
} from './layout'
import {
  m,
  mx,
  my,
  ml,
  mr,
  mt,
  mb,
  p,
  px,
  py,
  pl,
  pr,
  pt,
  pb,
  spaceX,
  spaceY,
} from './layout/spacing'
import {
  color,
  text,
  fontSize,
  fontWeight,
  lineHeight,
  fontSans,
  textShadow,
} from './typography'
import { textEllipsis } from './typography/textEllipsis'
import { when } from './utils'
import { hover, active, focus, disabled, selector } from './utils/selector'

export class Sugar extends Array<SerializedStyles> {
  /** Any SerializedStyles
   * @example
   * sugar(css`object-fit: cover;`)
   * sugar('object-fit: cover')*/
  sugar = sugar

  bg = bg

  opacity = opacity

  rounded = rounded

  border = border

  get outlineNone() {
    return outlineNone.bind(this)()
  }

  box = box

  fit = fit

  position = position

  get relative() {
    return relative.bind(this)()
  }

  get absolute() {
    return absolute.bind(this)()
  }

  get fixed() {
    return fixed.bind(this)()
  }

  zIndex = zIndex

  left = left

  right = right

  top = top

  bottom = bottom

  shadow = shadow

  w = w

  h = h

  maxW = maxW

  minW = minW

  maxH = maxH

  minH = minH

  /** 宽度拉满 */
  get wFull() {
    return wFull.bind(this)()
  }

  /** 高度拉满 */
  get hFull() {
    return hFull.bind(this)()
  }

  /** 宽高都拉满 */
  get full() {
    return full.bind(this)()
  }

  /** 正方形
   * ```css
   * {
   *   width: $n;
   *   height: $n;
   * }
   * ``` */
  square = square

  animation = animation

  cursor = cursor

  pointerEvents = pointerEvents

  resize = resize

  overflow = overflow

  overflowX = overflowX

  overflowY = overflowY

  transform = transform

  translate = translate

  translateX = translateX

  translateY = translateY

  transition = transition

  select = select

  userSelect = userSelect

  row = row

  column = column

  get center() {
    return center.bind(this)()
  }

  get flex() {
    return flex.bind(this)()
  }

  flexGrow = flexGrow

  grow = grow

  flexShrink = flexShrink

  shrink = shrink

  /** CSS align-items属性将所有直接子节点上的align-self值设置为一个组。 align-self属性设置项目在其包含块中在交叉轴方向上的对齐方式。 */
  alignItems = alignItems

  alignSelf = alignSelf

  m = m

  mx = mx

  my = my

  ml = ml

  mr = mr

  mt = mt

  mb = mb

  p = p

  px = px

  py = py

  pl = pl

  pr = pr

  pt = pt

  pb = pb

  spaceX = spaceX

  spaceY = spaceY

  color = color

  text = text

  fontSize = fontSize

  fontWeight = fontWeight

  lineHeight = lineHeight

  get fontSans() {
    return fontSans.bind(this)()
  }

  textShadow = textShadow

  /** 文本溢出省略 */
  textEllipsis = textEllipsis

  when = when

  hover = hover

  active = active

  focus = focus

  disabled = disabled

  selector = selector
}

export {
  sugar,
  bg,
  opacity,
  rounded,
  border,
  outlineNone,
  box,
  fit,
  position,
  relative,
  absolute,
  fixed,
  zIndex,
  left,
  right,
  top,
  bottom,
  shadow,
  w,
  h,
  maxW,
  minW,
  maxH,
  minH,
  wFull,
  hFull,
  full,
  square,
  animation,
  cursor,
  pointerEvents,
  resize,
  overflow,
  overflowX,
  overflowY,
  transform,
  translate,
  translateX,
  translateY,
  transition,
  select,
  userSelect,
  row,
  column,
  center,
  flex,
  flexGrow,
  grow,
  flexShrink,
  shrink,
  alignItems,
  alignSelf,
  m,
  mx,
  my,
  ml,
  mr,
  mt,
  mb,
  p,
  px,
  py,
  pl,
  pr,
  pt,
  pb,
  spaceX,
  spaceY,
  color,
  text,
  fontSize,
  fontWeight,
  lineHeight,
  fontSans,
  textShadow,
  textEllipsis,
  when,
  hover,
  active,
  focus,
  disabled,
  selector,
}

export * from './helper'

export * from './sugar'
