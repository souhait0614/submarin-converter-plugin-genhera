import { Converter, type Plugin } from "@submarin-converter/core";
import genhera from "../src/index.ts";
import { assertEquals } from "@std/assert";
import { generate } from "genhera";
import genheraDynamic from "../src/dynamic.ts";

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

Deno.test("dynamic convert", async () => {
  const converter = new Converter({ genheraDynamic });
  const { text } = await converter.convert("メロスは激怒した。", [
    "genheraDynamic",
  ]);
  assertEquals(text, "ﾒﾛｽゎ激怒した。。。");
});

Deno.test("dynamic convert function", async () => {
  const plugin: Plugin<undefined> = {
    convertFunctions: [async (text: string) => {
      const { generate } = await import("genhera");
      return generate(text);
    }],
  };
  const converter = new Converter({ plugin });
  const { text } = await converter.convert("メロスは激怒した。", ["plugin"]);
  assertEquals(text, "ﾒﾛｽゎ激怒した。。。");
});
