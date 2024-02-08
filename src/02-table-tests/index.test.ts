// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 22, b: 11, action: Action.Add, expected: 33 },
  { a: 20, b: 10, action: Action.Subtract, expected: 10 },
  { a: 3, b: 3, action: Action.Multiply, expected: 9 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 2, b: 4, action: Action.Exponentiate, expected: 16 },
  { a: 10, b: 3, action: 'sum', expected: null },
  { a: 3, b: 's', action: Action.Exponentiate, expected: null },
  { a: 's', b: 3, action: Action.Exponentiate, expected: null },
  { a: 's', b: 's', action: Action.Exponentiate, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    '$action-ing $a and $b should result in $expected',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
