👩‍🎤 A set of pleasant utilities for emotion  
[Emotion](https://github.com/emotion-js/emotion) is a performant and flexible CSS-in-JS library.

## Let's make emotion more delight

Write style with emotion:

```tsx
import { css, jsx } from '@emotion/react'

const color = 'white'

render(
  <div
    css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
)
```

Write style with emotion and add some sugar:

```tsx
import { jsx } from '@emotion/react'
import { p, color } from 'emotion-sugar'

const textColor = 'white'

render(
  <div css={p(32).bg('hotpink').text(24).rounded(4).hover(color(textColor))}>
    Hover to change color.
  </div>
)
```
