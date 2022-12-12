const { describe, it, expect } = require('@jest/globals');
const partOne = require('./part-one');
const { parseInputString } = require('./input');

describe('day8 | part-one', () => {
  describe('#getResult', () => {
    it('should ', () => {
      const inputString = `30373
25512
65332
33549
35390`;
      const input = parseInputString(inputString);

      const result = partOne.getResult(input);

      expect(result).toBe(21);
    });
  });

  describe('#isVisible', () => {
    [
      { i: 1, j: 1, expectedResult: true },
      { i: 1, j: 2, expectedResult: true },
      { i: 1, j: 3, expectedResult: false },
      { i: 2, j: 1, expectedResult: true },
      { i: 2, j: 2, expectedResult: false },
      { i: 2, j: 3, expectedResult: true },
      { i: 3, j: 1, expectedResult: false },
      { i: 3, j: 2, expectedResult: true },
      { i: 3, j: 3, expectedResult: false },
    ].forEach(({ i, j, expectedResult }) => {
      it(`should be ${expectedResult} when i : ${i}  and j : ${j}`, () => {
        const inputString = `30373
25512
65332
33549
35390`;
        const input = parseInputString(inputString);

        const result = partOne.isVisible(input, i, j);

        expect(result).toBe(expectedResult);
      });
    });
  });
});
