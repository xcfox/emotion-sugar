import { Interpolation, SerializedStyles, Theme } from '@emotion/react'
import { utility } from '..'

export const add = utility((css: Interpolation<Theme>) => {
  return css as SerializedStyles
})
