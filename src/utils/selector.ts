import { SerializedStyles } from '@emotion/react'
import { utility, Sugar } from '..'
import { OrFn, selectorSugar, Utility } from '../helper'

export const hover = utility(selectorSugar('&:hover'))
export const active = utility(selectorSugar('&:active'))
export const focus = utility(selectorSugar('&:focus'))
export const disabled = utility(selectorSugar('&:disabled'))

export const selector: Utility<
  [key: string, sugarFn: OrFn<SerializedStyles | Sugar | string>]
> = utility((key: string, sugarFn: OrFn<SerializedStyles | Sugar | string>) =>
  selectorSugar(key)(sugarFn)
)
