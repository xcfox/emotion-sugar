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
          <div className={css(sugar().screen(996, sugar().w(60, '%')))}>
            <LiveEditor
              key={String(isBrowser)}
              className={cx(
                styles.playgroundEditor,
                css(sugar().minH(100, '%').overflowY('auto'))
              )}
            />
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

function transformEmotionCode(code: string): string {
  return code.replace(/div/g, 'Div').replace(/span/g, 'Span')
}
