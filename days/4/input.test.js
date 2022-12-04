const { describe, it, expect } = require('@jest/globals');
const input = require('./input');

describe('day4 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result[0]).toEqual([
      { min: 21, max: 81 },
      { min: 20, max: 96 },
    ]);
  });
});
