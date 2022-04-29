import { SerializedStyles } from '@emotion/react'
import { OrFn } from '../helper'
import { Sugar, utility } from '..'

export const when = utility(
  (condition: any, style?: OrFn<SerializedStyles | Sugar | string | false>) => {
    if (!condition) return
    if (typeof style === 'function') {
      style = style()
    }
    return style as SerializedStyles
  }
)
