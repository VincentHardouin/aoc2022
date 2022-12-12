const { describe, it, expect } = require('@jest/globals');
const partTwo = require('./part-two');
const { parseInputString } = require('./input');
const partOne = require('./part-one');

describe('day8 | part-two', () => {
  describe('#getResult', () => {
    it('should ', () => {
      const inputString = `30373
25512
65332
33549
35390`;
      const input = parseInputString(inputString);

      const result = partTwo.getResult(input);

      expect(result).toBe(8);
    });
  });

  describe('#getScenicScore', () => {
    [
      { i: 1, j: 2, expectedResult: 4 },
      { i: 3, j: 2, expectedResult: 8 },
    ].forEach(({ i, j, expectedResult }) => {
      it(`should be ${expectedResult} when i : ${i}  and j : ${j}`, () => {
        const inputString = `30373
25512
65332
33549
35390`;
        const input = parseInputString(inputString);

        const result = partTwo.getScenicScore(input, i, j);

        expect(result).toBe(expectedResult);
      });
    });
  });
});
