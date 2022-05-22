export type ScalarOperationType = (first: number, second: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const squaring = (n: number): number => Math.pow(n, 2);

export const pow: ScalarOperationType = (
  first: number,
  second: number
): number => Math.pow(first, second);

export const factorial = (n: number): number =>
  n != 1 ? n * factorial(n - 1) : 1;

export const sin = (n: number): number => Math.sin(n);

export const cos = (n: number): number => Math.cos(n);

export const tan = (n: number): number => Math.tan(n);

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "**": squaring,
  "^": pow,
  "!": factorial,
  sin,
  cos,
  tan,
};

export const mathPriorities: number[] = [0, 1, 2];

const [UNARY, FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "**": UNARY,
  "^": FIRST,
  "!": UNARY,
  "+": SECOND,
  "-": SECOND,
  sin: UNARY,
  cos: UNARY,
  tan: UNARY,
};
