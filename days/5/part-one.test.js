const { describe, it, expect } = require('@jest/globals');
const partOne = require('./part-one');
const { parseInputString } = require('./input');

describe('day5 | part-one', () => {
  describe('#getResult', () => {
    it('should ', () => {
      const inputString = `    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
      const input = parseInputString(inputString);

      const result = partOne.getResult(input);

      expect(result).toBe('CMZ');
    });
  });
});
