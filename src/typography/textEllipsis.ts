import { css } from '@emotion/react'
import { utility } from '..'

const _textEllipsis = (lines = 1) => css`
  word-break: break-word;
  overflow: hidden;

  ${lines > 1
    ? css`
        display: -webkit-box;
        -webkit-line-clamp: ${lines};
        -webkit-box-orient: vertical;
      `
    : css`
        text-overflow: ellipsis;
        white-space: nowrap;
      `}
`
/** 文本溢出省略 */
export const textEllipsis = utility(_textEllipsis)
