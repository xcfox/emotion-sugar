import { SerializedStyles } from '@emotion/react'
import { Sugar } from '..'
import { makeSugar, OrFn, sugar } from '../sugar'

export const when = makeSugar(
  (condition: any, style?: OrFn<SerializedStyles | Sugar | string | false>) => {
    if (!condition) return
    if (typeof style === 'function') {
      style = style(sugar())
    }
    return style as SerializedStyles
  }
)
