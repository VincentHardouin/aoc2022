const { describe, it, expect } = require('@jest/globals');
const input = require('./input');

describe('day2 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result[0]).toEqual({ opponent: 'C', me: 'Y' });
  });
});
