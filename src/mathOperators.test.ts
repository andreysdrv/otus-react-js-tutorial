import {
  mul,
  div,
  add,
  minus,
  pow,
  squaring,
  factorial,
} from "./mathOperators";

describe("mathOperators test cases", () => {
  test.each([
    [1, 2, 2],
    [2, 2, 4],
  ])("mul for (%i, %i)", (a, b, expected) => {
    expect(mul(a, b)).toEqual(expected);
  });

  test.each([
    [2, 2, 1],
    [4, 2, 2],
  ])("div for (%i, %i)", (a, b, expected) => {
    expect(div(a, b)).toEqual(expected);
  });

  test.each([
    [4, 2, 6],
    [4, 4, 8],
  ])("add for (%i, %i)", (a, b, expected) => {
    expect(add(a, b)).toEqual(expected);
  });

  test.each([
    [4, 2, 2],
    [4, 4, 0],
  ])("minus for (%i, %i)", (a, b, expected) => {
    expect(minus(a, b)).toEqual(expected);
  });

  test.each([
    [2, 4],
    [3, 9],
  ])("squaring for %i", (a, expected) => {
    expect(squaring(a)).toEqual(expected);
  });

  test.each([
    [2, 3, 8],
    [3, 4, 81],
  ])("pow for (%i, %i)", (a, b, expected) => {
    expect(pow(a, b)).toEqual(expected);
  });

  test.each([
    [2, 2],
    [3, 6],
  ])("factorial for %i", (a, expected) => {
    expect(factorial(a)).toEqual(expected);
  });
});
