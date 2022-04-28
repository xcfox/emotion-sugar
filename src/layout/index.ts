import { css } from '@emotion/react'
import { utility } from '..'

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

export const row = utility((...layouts: LayoutArgument[]) => {
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

export const column = utility((...layouts: LayoutArgument[]) => {
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

export const center = utility(
  () => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `
)
export const flex = utility(
  () => css`
    display: flex;
  `
)

export const flexGrow = utility(
  (n?: number) =>
    css`
      flex-grow: ${n};
    `
)

export const grow = utility(
  (n?: number) =>
    css`
      flex-grow: ${n};
    `
)

export const flexShrink = utility(
  (n?: number) =>
    css`
      flex-shrink: ${n};
    `
)

export const shrink = utility(
  (n?: number) =>
    css`
      flex-shrink: ${n};
    `
)

/** The CSS align-items property sets the align-self value on all direct children as a group. In Flex box, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
 */
export const alignItems = utility(
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

/**
 * The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
 */
export const alignSelf = utility(
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
