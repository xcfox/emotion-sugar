import { css } from '@emotion/react'
import { utility } from '..'

/**The opacity CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/opacity)
 */
export const opacity = utility(
  (n?: number) => `
    opacity: ${n};
  `
)
