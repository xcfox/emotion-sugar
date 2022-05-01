// This file is generated by ./script/discover.js
import { SerializedStyles } from '@emotion/react'
import { sugar } from './main'
import { animation, animate } from './animations/animation'
import { boxSizing, box } from './container/boxSizing'
import { fit } from './container/objectFit'
import { outlineNone } from './container/outline'
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
import { bg } from './effect/background'
import { rounded, border } from './effect/border'
import { mixBlendMode, mixBlend } from './effect/mixBlendMode'
import { opacity } from './effect/opacity'
import { shadow, boxShadow } from './effect/shadow'
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
  flexWrap,
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
  space,
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
import { sm, md, lg, xl, xxl, screen } from './utils/responsive'
import { hover, active, focus, disabled, selector } from './utils/selector'

export class Sugar extends Array<SerializedStyles> {
  /** Any SerializedStyles
   * @example
   * sugar(css`object-fit: cover;`)
   * sugar('object-fit: cover')*/
  sugar = sugar

  /** Utilities for animating elements with CSS animations. */
  animation = animation

  /** Utilities for animating elements with CSS animations. */
  animate = animate

  boxSizing = boxSizing

  box = box

  fit = fit

  get outlineNone() {
    return outlineNone.bind(this)()
  }

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

  w = w

  h = h

  maxW = maxW

  minW = minW

  maxH = maxH

  minH = minH

  /** set width full */
  get wFull() {
    return wFull.bind(this)()
  }

  /** set height full */
  get hFull() {
    return hFull.bind(this)()
  }

  /** set width and height full */
  get full() {
    return full.bind(this)()
  }

  /** set both width and height
   * ```css
   * {
   *   width: $n;
   *   height: $n;
   * }
   * ``` */
  square = square

  /** The `background` shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method. */
  bg = bg

  rounded = rounded

  /** The border shorthand CSS property sets an element's border. */
  border = border

  mixBlendMode = mixBlendMode

  /** Utilities for controlling how an element should blend with the background.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode)
   */
  mixBlend = mixBlend

  /**The opacity CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/opacity)
   */
  opacity = opacity

  shadow = shadow

  boxShadow = boxShadow

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

  flexWrap = flexWrap

  flexGrow = flexGrow

  grow = grow

  flexShrink = flexShrink

  shrink = shrink

  /** The CSS align-items property sets the align-self value on all direct children as a group. In Flex box, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
   */
  alignItems = alignItems

  /**
   * The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
   */
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

  space = space

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

  sm = sm

  md = md

  lg = lg

  xl = xl

  xxl = xxl

  screen = screen

  hover = hover

  active = active

  focus = focus

  disabled = disabled

  selector = selector
}

export {
  sugar,
  animation,
  animate,
  boxSizing,
  box,
  fit,
  outlineNone,
  position,
  relative,
  absolute,
  fixed,
  zIndex,
  left,
  right,
  top,
  bottom,
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
  bg,
  rounded,
  border,
  mixBlendMode,
  mixBlend,
  opacity,
  shadow,
  boxShadow,
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
  flexWrap,
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
  space,
  color,
  text,
  fontSize,
  fontWeight,
  lineHeight,
  fontSans,
  textShadow,
  textEllipsis,
  when,
  sm,
  md,
  lg,
  xl,
  xxl,
  screen,
  hover,
  active,
  focus,
  disabled,
  selector,
}

export * from './main'
