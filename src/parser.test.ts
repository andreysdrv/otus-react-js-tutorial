import { parser } from "./parser";

describe("Parser correct cases", () => {
  test.each([
    ["1 + 32", [1, "+", 32]],
    ["11 + 3 * 22", [11, "+", 3, "*", 22]],
    ["1 + 32 - 2 + 2", [1, "+", 32, "-", 2, "+", 2]],
  ])("parser for (%s, %s)", (a, expected) => {
    expect(parser(a)).toEqual(expected);
  });
});

describe("Parser invalid cases", () => {
  test.each([["1 + + 33 - 2"], ["1 ! 33 - 2"]])("parser for %s", (a) => {
    expect(() => parser(a)).toThrow(TypeError("Unexpected string"));
  });
});
