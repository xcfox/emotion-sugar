import { SerializedStyles } from '@emotion/react'
import { Sugar } from '..'
import { utility, OrFn, sugar } from '..'

export const when = utility(
  (condition: any, style?: OrFn<SerializedStyles | Sugar | string | false>) => {
    if (!condition) return
    if (typeof style === 'function') {
      style = style(sugar())
    }
    return style as SerializedStyles
  }
)
