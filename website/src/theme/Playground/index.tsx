/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import BrowserOnly from '@docusaurus/BrowserOnly'
import styles from './styles.module.css'
import useIsBrowser from '@docusaurus/useIsBrowser'
import { sugar } from '../../../../src'
import theme from 'prism-react-renderer/themes/nightOwl'
import { css, cx } from '@emotion/css'

function LivePreviewLoader() {
  // Is it worth improving/translating?
  return <div>Loading...</div>
}
export default function Playground({ children, transformCode, ...props }) {
  const isBrowser = useIsBrowser()
  return (
    <div className={styles.playgroundContainer}>
      <LiveProvider
        code={children.replace(/\n$/, '')}
        transformCode={transformCode ?? transformEmotionCode}
        theme={theme}
        {...props}
      >
        <div
          className={css(sugar().screen(996, sugar().row().minH(160)).wFull)}
        >
          <div
            className={css(sugar().screen(996, sugar().w(60, '%').relative))}
          >
            <LiveEditor
              key={String(isBrowser)}
              className={cx(
                styles.playgroundEditor,
                css(sugar().minH(100, '%').overflowY('auto'))
              )}
            />
            <div
              className={css(
                sugar()
                  .text(14)
                  .fontWeight(666)
                  .right('1em')
                  .bottom('0.3em')
                  .pointerEvents('none')
                  .opacity(0.7)
                  .color('var(--ifm-color-primary)')
                  .zIndex(1).absolute
              )}
            >
              Live Demo
            </div>
          </div>
          <div
            className={cx(
              styles.playgroundPreview,
              css(sugar().screen(996, sugar().w(40, '%')))
            )}
          >
            <BrowserOnly fallback={<LivePreviewLoader />}>
              {() => (
                <>
                  <LivePreview />
                  <LiveError />
                </>
              )}
            </BrowserOnly>
          </div>
        </div>
      </LiveProvider>
    </div>
  )
}

export function transformEmotionCode(code: string): string {
  return code
    .replace(/div/g, 'Div')
    .replace(/span/g, 'Span')
    .replace(/h2/g, 'H2')
}
