const { describe, it, expect } = require('@jest/globals');
const input = require('./input');

describe('day3 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result).toBe('');
  });
});
