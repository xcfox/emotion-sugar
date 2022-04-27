import { css } from '@emotion/react'
import { makeUtility } from '..'

export type LayoutArgument =
  | 'center'
  | 'centerX'
  | 'centerY'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'evenly'
  | 'around'
  | 'between'
  | 'stretch'
type LayoutRecord = Partial<Record<LayoutArgument, string | undefined>>

const justifyContents: LayoutRecord = {
  around: 'space-around',
  evenly: 'space-evenly',
  between: 'space-between',
}

const leftRight: LayoutRecord = {
  center: 'center',
  centerX: 'center',
  left: 'flex-start',
  right: 'flex-end',
}

const topBottom: LayoutRecord = {
  centerY: 'center',
  center: 'center',
  top: 'flex-start',
  bottom: 'flex-end',
}

const justifyContentRow: LayoutRecord = {
  ...justifyContents,
  ...leftRight,
}

const alignItemsRow: LayoutRecord = topBottom

const justifyContentColumn: LayoutRecord = {
  ...justifyContents,
  ...topBottom,
}

const alignItemsColumn: LayoutRecord = leftRight

export const row = makeUtility((...layouts: LayoutArgument[]) => {
  let justifyContent: string | undefined = undefined
  let alignItems: string | undefined = undefined
  for (const layout of layouts) {
    const jc = justifyContentRow[layout]
    jc && (justifyContent = jc)
    const ai = alignItemsRow[layout]
    ai && (alignItems = ai)
  }
  return css`
    display: flex;
    flex-direction: row;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `
})

export const column = makeUtility((...layouts: LayoutArgument[]) => {
  let justifyContent: string | undefined = undefined
  let alignItems: string | undefined = undefined
  for (const layout of layouts) {
    const jc = justifyContentColumn[layout]
    jc && (justifyContent = jc)
    const ai = alignItemsColumn[layout]
    ai && (alignItems = ai)
  }
  return css`
    display: flex;
    flex-direction: column;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `
})

export const center = makeUtility(
  () => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `
)
export const flex = makeUtility(
  () => css`
    display: flex;
  `
)

export const flexGrow = makeUtility(
  (n?: number) =>
    css`
      flex-grow: ${n};
    `
)

export const grow = makeUtility(
  (n?: number) =>
    css`
      flex-grow: ${n};
    `
)
export const flexShrink = makeUtility(
  (n?: number) =>
    css`
      flex-shrink: ${n};
    `
)

export const shrink = makeUtility(
  (n?: number) =>
    css`
      flex-shrink: ${n};
    `
)

/** CSS align-items属性将所有直接子节点上的align-self值设置为一个组。 align-self属性设置项目在其包含块中在交叉轴方向上的对齐方式。 */
export const alignItems = makeUtility(
  (
    value?:
      | 'normal'
      | 'stretch'
      | 'center'
      | 'start'
      | 'end'
      | 'flex-start'
      | 'flex-end'
      | 'self-start'
      | 'self-end'
      | 'baseline'
      | 'first baseline'
      | 'last baseline'
      | 'safe center'
      | 'unsafe center'
      | 'inherit'
      | 'initial'
      | 'unset'
  ) => css`
    align-items: ${value};
  `
)

export const alignSelf = makeUtility(
  (
    value?:
      | 'normal'
      | 'stretch'
      | 'center'
      | 'start'
      | 'end'
      | 'flex-start'
      | 'flex-end'
      | 'self-start'
      | 'self-end'
      | 'baseline'
      | 'first baseline'
      | 'last baseline'
      | 'safe center'
      | 'unsafe center'
      | 'inherit'
      | 'initial'
      | 'unset'
  ) => css`
    align-self: ${value};
  `
)
