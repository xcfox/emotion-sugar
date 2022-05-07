import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps } from 'prism-react-renderer'
import styled from '@emotion/styled'
import theme from 'prism-react-renderer/themes/nightOwl'
import { LiveContext } from 'react-live'

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`

const Line = styled.div`
  display: table-row;
`

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

const LineContent = styled.span`
  display: table-cell;
`

class CodeEditor extends Component {
  static propTypes = {
    code: PropTypes.string,
    disabled: PropTypes.boolean,
    language: PropTypes.string,
    onChange: PropTypes.func,
    style: PropTypes.object,
    theme: PropTypes.object,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.code !== state.prevCodeProp) {
      return { code: props.code, prevCodeProp: props.code }
    }

    return null
  }

  state = {
    code: '',
  }

  updateContent = (code) => {
    this.setState({ code }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.code)
      }
    })
  }

  highlightCode = (code) => (
    <Highlight {...defaultProps} theme={theme} code={code} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  )

  render() {
    // eslint-disable-next-line no-unused-vars
    const {
      style,
      code: _code,
      onChange,
      language,
      theme,
      ...rest
    } = this.props
    const { code } = this.state

    const baseTheme =
      theme && typeof theme.plain === 'object' ? theme.plain : {}

    return (
      <Editor
        value={code}
        padding={10}
        highlight={this.highlightCode}
        onValueChange={this.updateContent}
        style={{
          whiteSpace: 'pre',
          fontFamily: 'monospace',
          ...baseTheme,
          ...style,
        }}
        {...rest}
      />
    )
  }
}

export default function LiveEditor(props) {
  return (
    <LiveContext.Consumer>
      {({ code, language, theme, disabled, onChange }) => (
        <CodeEditor
          theme={theme}
          code={code}
          language={language}
          disabled={disabled}
          onChange={onChange}
          {...props}
        />
      )}
    </LiveContext.Consumer>
  )
}
