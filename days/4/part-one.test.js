const { describe, it, expect } = require('@jest/globals');
const partOne = require('./part-one');
const { parseInputString } = require('./input');

describe('day4 | part-one', () => {
  describe('#getResult', () => {
    it('should ', () => {
      const inputString = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;
      const input = parseInputString(inputString);

      const result = partOne.getResult(input);

      expect(result).toBe(2);
    });
  });
});
