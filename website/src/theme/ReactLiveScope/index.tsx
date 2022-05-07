/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import { sugar } from '../../../../src'
import { css, keyframes } from '@emotion/css'
// Add react-live imports you need here

function Div({ css: outerCss, ...props }) {
  return <div className={css(outerCss)} {...props}></div>
}

function Span({ css: outerCss, ...props }) {
  return <span className={css(outerCss)} {...props}></span>
}

const ReactLiveScope = {
  React,
  ...React,
  keyframes,
  sugar,
  Div,
  Span,
}
export default ReactLiveScope
