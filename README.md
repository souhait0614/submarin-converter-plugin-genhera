# submarin-converter-plugin-genhera

[submarin-converter](https://github.com/souhait0614/submarin-converter)のプラグインです。
日本語をﾒﾝﾍﾗっぽぃ日本語に変換します。

## Example

```typescript
import { Converter, Plugin } from "submarin-converter"
import type { ConvertFunction } from "submarin-converter"
import { genheraPlugin } from "submarin-converter-plugin-genhera"

const converter = new Converter({
  plugins: {
    genhera: genheraPlugin,
  } as const,
})

const input = "おはようございます。"

const [output, details] = await converter.convert(input, [
  {
    id: "genhera",
  },
] as const)

console.log(output) // "ぉゎよぉござぃます。。。"
console.log(details)
/*
[
  {
    id: "genhera",
    ok: true,
    output: "ぉゎよぉござぃます。。。",
    args: {
      input: "おはようございます。",
    },
    error: [],
  },
]
*/
```

## Installation

```shell
npm install submarin-converter-plugin-genhera
# or yarn add submarin-converter-plugin-genhera
# or pnpm add submarin-converter-plugin-genhera
```
