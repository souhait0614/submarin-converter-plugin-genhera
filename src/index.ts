import { generate } from "genhera"
import { Plugin, type ConvertFunction } from "submarin-converter"

const mainConvertFunction: ConvertFunction<void> = ({ input }) => generate(input)

const genheraPlugin = new Plugin({
  convertFunction: [mainConvertFunction],
  metaData: {
    name: "メンヘラ",
    description: "日本語をﾒﾝﾍﾗっぽぃ日本語に変換します",
    author: "すえ"
  }
})

export { genheraPlugin }
