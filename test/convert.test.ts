import { Converter, type Plugin } from "@submarin-converter/core";
import genhera from "../src/index.ts";
import { assertEquals } from "@std/assert";
import { fallbackFunction } from "../src/fallbackFunction.ts";
import { generate } from "genhera";

Deno.test("convert", async () => {
  const converter = new Converter({ genhera });
  const { text } = await converter.convert("メロスは激怒した。", ["genhera"]);
  assertEquals(text, "ﾒﾛｽゎ激怒した。。。");
});

Deno.test("convert function", async () => {
  const plugin: Plugin<undefined> = {
    convertFunctions: [generate],
  };
  const converter = new Converter({ plugin });
  const { text } = await converter.convert("メロスは激怒した。", ["plugin"]);
  assertEquals(text, "ﾒﾛｽゎ激怒した。。。");
});

Deno.test("fallback function", async () => {
  const plugin: Plugin<undefined> = {
    convertFunctions: [fallbackFunction],
  };
  const converter = new Converter({ plugin });
  const { text } = await converter.convert("メロスは激怒した。", ["plugin"]);
  assertEquals(text, "ﾒﾛｽゎ激怒した。。。");
});
