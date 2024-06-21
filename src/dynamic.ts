/**
 * @module
 *
 * submarin-converterのPluginとして設定することで文章をﾒﾝﾍﾗっぽぃ日本語に変換できます
 *
 * @example
 * ```typescript
 * import { Converter } from "@submarin-converter/core";
 * import genhera from "@submarin-converter/plugin-genhera/dynamic";
 *
 * const converter = new Converter({ genhera });
 *
 * const { text } = await converter.convert("メロスは激怒した。", ["genhera"]);
 *
 * console.log(text) // "ﾒﾛｽゎ激怒した。。。"
 * ```
 */

import type { Plugin } from "@submarin-converter/core";

const dynamicGenerate = async (text: string) => {
  const { generate } = await import("genhera");
  return generate(text);
};
const dynamicFallbackFunction = async (text: string) => {
  const { fallbackFunction } = await import("./fallbackFunction.ts");
  return fallbackFunction(text);
};

/** submarin-converterのPluginとして設定できるPlugin */
const plugin: Plugin<undefined> = {
  convertFunctions: [dynamicGenerate, dynamicFallbackFunction],
  metaData: {
    displayName: "メンヘラ",
    description: "日本語をﾒﾝﾍﾗっぽぃ日本語に変換します",
    homepage: "https://github.com/Submarinonline/genhera.js",
    repository:
      "https://github.com/souhait0614/submarin-converter-plugin-genhera",
    author: "すえ",
  },
};

export default plugin;
