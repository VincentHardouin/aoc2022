const { describe, it, expect } = require('@jest/globals');
const partOne = require('./part-one');
const { parseInputString } = require('./input');

describe('day2 | part-one', () => {
  describe('#getResult', () => {
    it('should ', () => {
      const inputString = `A Y
B X
C Z`;

      const input = parseInputString(inputString);

      const result = partOne.getResult(input);

      expect(result).toBe(15);
    });
  });
});
