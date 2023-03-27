import { css } from '@emotion/react'
import { utility } from '..'

export const cursor = utility(
  (
    value:
      | 'auto'
      | 'default'
      | 'none'
      | 'context-menu'
      | 'help'
      | 'pointer'
      | 'progress'
      | 'wait'
      | 'cell'
      | 'crosshair'
      | 'text'
      | 'vertical-text'
      | 'alias'
      | 'copy'
      | 'move'
      | 'no-drop'
      | 'not-allowed'
      | 'grab'
      | 'grabbing'
      | 'all-scroll'
      | 'col-resize'
      | 'row-resize'
      | 'n-resize'
      | 'e-resize'
      | 's-resize'
      | 'w-resize'
      | 'ne-resize'
      | 'nw-resize'
      | 'se-resize'
      | 'sw-resize'
      | 'ew-resize'
      | 'ns-resize'
      | 'nesw-resize'
      | 'nwse-resize'
      | 'zoom-in'
      | 'zoom-out'
  ) =>
    `
      cursor: ${value};
    `
)

export const pointerEvents = utility(
  (value: 'auto' | 'none' | 'all' | 'initial') =>
    `
      pointer-events: ${value};
    `
)
