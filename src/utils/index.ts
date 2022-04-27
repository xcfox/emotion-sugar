import { SerializedStyles } from '@emotion/react'
import { Sugar } from '..'
import { makeUtility, OrFn, sugar } from '..'

export const when = makeUtility(
  (condition: any, style?: OrFn<SerializedStyles | Sugar | string | false>) => {
    if (!condition) return
    if (typeof style === 'function') {
      style = style(sugar())
    }
    return style as SerializedStyles
  }
)
