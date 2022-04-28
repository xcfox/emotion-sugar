---
sidebar_position: 2
---

# Install and use

## 🔧 Install

use yarn:

```sh
yarn add @emotion/react emotion-sugar
```

or use npm:

```sh
npm i @emotion/react emotion-sugar
```

## 🧩 Usage

### Use with The css Prop

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

### Use with css fragment

```tsx
import { css, jsx } from '@emotion/react'
import { p } from 'emotion-sugar'

const color = 'white'

render(
  <div
    css={css`
      ${p(32).bg('hotpink').text(24).rounded(4)}
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
)
```

or:

```tsx
render(
  <div
    css={p(32).bg('hotpink').text(24).rounded(4).sugar(css`
      &:hover {
        color: ${color};
      }`}
  >
    Hover to change color.
  </div>
)
```

### Use with Styled Components

```tsx
import styled from '@emotion/styled'
import { p } from 'emotion-sugar'

const Button = styled.button`
  ${p(32).bg('hotpink').text(24).rounded(4)}
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

render(<Button>This my button component.</Button>)
```
