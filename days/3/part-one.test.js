const { describe, it, expect } = require('@jest/globals');
const partOne = require('./part-one');
const { parseInputString } = require('./input');

describe('day3 | part-one', () => {
  describe('#getResult', () => {
    it('should ', () => {
      const inputString = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;
      const input = parseInputString(inputString);

      const result = partOne.getResult(input);

      expect(result).toBe(157);
    });
  });

  describe('#getTwoCompartment', () => {
    it('should return two compartment', () => {
      const rucksack = 'vJrwpWtwJgWrhcsFMMfFFhFp'.split('');

      const result = partOne.getTwoCompartment(rucksack);

      expect(result.firstCompartment).toEqual(['v', 'J', 'r', 'w', 'p', 'W', 't', 'w', 'J', 'g', 'W', 'r']);
      expect(result.secondCompartment).toEqual(['h', 'c', 's', 'F', 'M', 'M', 'f', 'F', 'F', 'h', 'F', 'p']);
    });
  });

  describe('#getShareItem', () => {
    it('should return share item', () => {
      const firstCompartment = ['v', 'J', 'r', 'w', 'p', 'W', 't', 'w', 'J', 'g', 'W', 'r'];
      const secondCompartment = ['h', 'c', 's', 'F', 'M', 'M', 'f', 'F', 'F', 'h', 'F', 'p'];

      const result = partOne.getShareItem(firstCompartment, secondCompartment);

      expect(result).toBe('p');
    });
  });
});
