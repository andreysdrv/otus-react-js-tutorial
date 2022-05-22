import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  unaryPrioritiesCalc,
} from "./engine";

describe("firstPrioritiesCalc simple cases", () => {
  test.each([
    [[1, "*", 32], [32]],
    [[32, "/", 32], [1]],
    [
      [32, "+", 32],
      [32, "+", 32],
    ],
  ])("firstPrioritiesCalc for %s", (a, expected) => {
    expect(firstPrioritiesCalc(a)).toEqual(expected);
  });
});

describe("firstPrioritiesCalc mixed with second priorities cases", () => {
  it("[32, /, 32, +, 10, *, 10]", () => {
    expect(firstPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
      1,
      "+",
      100,
    ]);
  });
});

describe("secondPrioritiesCalc invalid cases", () => {
  it("[32, / 32]", () => {
    expect(() => secondPrioritiesCalc([32, "/", 32])).toThrow(
      TypeError("Unexpected stack!")
    );
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  test.each([
    [[32, "+", 32], 64],
    [[32, "-", 32], 0],
    [[32, "-", 32, "+", 10], 10],
  ])("secondPrioritiesCalc for %s", (a, expected) => {
    expect(secondPrioritiesCalc(a)).toEqual(expected);
  });
});

describe("unaryPrioritiesCalc simple cases", () => {
  test.each([
    [[3, "**"], [9]],
    [[3, "!"], [6]],
    [[0.5, "sin"], [0.479425538604203]],
    [[0.5, "cos"], [0.8775825618903728]],
    [[0.5, "tan"], [0.5463024898437905]],
  ])("secondPrioritiesCalc for %s", (a, expected) => {
    expect(unaryPrioritiesCalc(a)).toEqual(expected);
  });
});
