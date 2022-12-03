const { describe, it, expect } = require('@jest/globals');
const input = require('./input');

describe('day3 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result[0]).toEqual([
      'L',
      'H',
      'L',
      'R',
      'l',
      'C',
      'C',
      'v',
      'C',
      'L',
      'V',
      'g',
      'H',
      'P',
      'f',
      'C',
      'H',
      't',
      'V',
      'j',
      'B',
      'G',
      'r',
      'B',
      'D',
      'N',
      'z',
      'W',
      'F',
      'B',
      's',
      'B',
      'G',
      'B',
      'f',
      's',
      'c',
      'G',
      's',
      'D',
    ]);
  });
});
