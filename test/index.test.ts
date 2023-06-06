import { Converter } from "submarin-converter"
import { expect, test } from "vitest"
import { genheraPlugin } from "../src"

test("Basic Usage", async () => {
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

  const expectedOutput = "ぉゎよぉござぃます。。。"
  const expectedDetails: typeof details = [
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

  expect(output).toEqual(expectedOutput)
  expect(details).toEqual(expectedDetails)
})
