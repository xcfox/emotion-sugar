/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import { color, mx, sugar, text, w } from '../../../../src'
import { css, keyframes } from '@emotion/css'
// Add react-live imports you need here

function Div({ css: outerCss, ...props }: any) {
  return <div className={css(outerCss)} {...props}></div>
}

function Span({ css: outerCss, ...props }: any) {
  return <span className={css(outerCss)} {...props}></span>
}

function H2({ css: outerCss, ...props }: any) {
  return <h2 className={css(outerCss)} {...props}></h2>
}

function H4({ css: outerCss, ...props }: any) {
  return <h4 className={css(outerCss)} {...props}></h4>
}

function P({ css: outerCss, ...props }: any) {
  return <p className={css(outerCss)} {...props}></p>
}

const ReactLiveScope = {
  React,
  ...React,
  keyframes,
  color,
  mx,
  sugar,
  text,
  w,
  Div,
  Span,
  H2,
  H4,
  P,
}
export default ReactLiveScope
