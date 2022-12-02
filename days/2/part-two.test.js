const { describe, it, expect } = require('@jest/globals');
const partTwo = require('./part-two');
const { parseInputString } = require('./input');

describe('day2 | part-two', () => {
  describe('#getResult', () => {
    it('should ', () => {
      const inputString = `A Y
B X
C Z`;
      const input = parseInputString(inputString);

      const result = partTwo.getResult(input);

      expect(result).toBe(12);
    });
  });
});
