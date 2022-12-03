const { describe, it, expect } = require('@jest/globals');
const partTwo = require('./part-two');
const { parseInputString } = require('./input');
const partOne = require("./part-one");

describe('day3 | part-two', () => {
  describe('#getResult', () => {
    it('should ', () => {
      const inputString = `
      vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;
      const input = parseInputString(inputString);

      const result = partTwo.getResult(input);

      expect(result).toBe(70);
    });
  });

  describe('#getShareItem', () => {
    it('should return share item', () => {
      const first = 'vJrwpWtwJgWrhcsFMMfFFhFp'.split('');
      const second = 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL'.split('');
      const third = 'PmmdzqPrVvPwwTWBwg'.split('');

      const result = partOne.getShareItem(first, second, third);

      expect(result).toBe('r');
    });
  });
});
