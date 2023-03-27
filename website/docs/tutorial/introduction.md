---
sidebar_position: 1
---

# Introduction

👩‍🎤 A set of pleasant utilities for emotion

[![License](https://img.shields.io/npm/l/emotion-sugar.svg)](https://github.com/xcfox/emotion-sugar/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/emotion-sugar.svg)](https://www.npmjs.com/package/emotion-sugar)
[![NPM Downloads](https://img.shields.io/npm/dm/emotion-sugar.svg?style=flat)](https://www.npmjs.com/package/emotion-sugar)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[Emotion](https://github.com/emotion-js/emotion) is a performant and flexible CSS-in-JS library.  
This Library provides a set of utilities for emotion, or rather, it makes emotion utility-first.

## 🍭 Let's make emotion more delight

Write style with emotion:

```tsx
import { css, jsx } from '@emotion/react'

const color = 'white'

render(
  <div
    css={`
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

## 🌠 Features

**🧩 Seamless integration with emotion：** Use it in existing emotion projects as you like.  
**🛡️ Typed:** Full support for TypeScript  
**🍸 Less code:** It is far less code than native css  
**🍩 Flex tooltips:** Let's make a flex container by intuition
