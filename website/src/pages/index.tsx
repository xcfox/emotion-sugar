import React, { useContext } from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { color, mx, sugar, text, w } from '../../../src'
import Layout from '@theme/Layout'
import { css as cn, cx } from '@emotion/css'
import { css } from '@emotion/react'
import {
  LiveProvider,
  LiveContext,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live'
import theme from 'prism-react-renderer/themes/nightOwl'
import scope from '../theme/ReactLiveScope'
import { transformEmotionCode } from '../theme/Playground'
const { Div, Span } = scope

const titleButton = cn(
  sugar()
    .bg('var(--ifm-color-primary-dark)')
    .rounded()
    .w(150)
    .h('3em')
    .center.color('white')
    .transition()
    .shadow({ color: 'var(--ifm-color-primary-dark)', blur: 7 })
    .hover(
      sugar(css`
        text-decoration: none;
        color: white;
      `).bg('var(--ifm-color-primary-darker)')
    )
)
const SugarCode = () => (
  <Div css={w(350).bg('white').p(12).rounded().row('centerY')}>
    <Div css={text('3em')}>🍭</Div>
    <Div css={mx(18).column('left')}>
      <Span css={color('#2b1f26').fontWeight('bold').text(20)}>
        Emotion Sugar
      </Span>
      <Span css={color('#777')}>A set of pleasant utilities</Span>
    </Div>
  </Div>
)
const sugarCode = `
<div css={w(350).bg('white').p(12).rounded().row('centerY')}>
  <div css={text('3em')}>🍭</div>
  <div css={mx(18).column('left')}>
    <span css={color('#2b1f26').fontWeight('bold').text(20)}>
      Emotion Sugar
    </span>
    <span css={color('#777')}>A set of pleasant utilities</span>
  </div>
</div>`.trim()

function Title() {
  return (
    <div
      className={cn(
        sugar()
          .column('centerY')
          .m(30)
          .screen(996, sugar().maxW('35%'))
          .py('2em')
      )}
    >
      <h1 className={cn(sugar().text('3em'))}>
        A set of pleasant utilities for emotion
      </h1>
      <p>Both the flexibility of CSS-in-JS and the rapidity of Utility-First</p>
      <div className={cn(sugar().row().mt('1em').spaceX('2em'))}>
        <Link className={titleButton} to="/docs/tutorial/introduction">
          Getting Started
        </Link>
        <Link
          className={titleButton}
          to="https://github.com/xcfox/emotion-sugar"
        >
          Source Code
        </Link>
      </div>
    </div>
  )
}

function FirstGlance() {
  const { error } = useContext(LiveContext)
  return (
    <div className={cn(sugar().m(30).screen(996, sugar().w('36%')))}>
      <Div css={sugar().h(200).relative.center}>
        {error ? <LiveError /> : <LivePreview />}
      </Div>
      <LiveEditor className={cn(sugar().rounded(6))} />
      <Div css={sugar().h('2em')} />
    </div>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <LiveProvider
      code={sugarCode}
      transformCode={transformEmotionCode}
      scope={scope}
      theme={theme}
    >
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <div
          className={cx(
            cn(sugar().screen(996, sugar().row('evenly'))),
            'home-glance'
          )}
        >
          <Title />
          <FirstGlance />
        </div>
      </Layout>
    </LiveProvider>
  )
}
