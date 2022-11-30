const { describe, it, expect } = require('jest');
const input = require('./input');

describe('day1 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result).toBe('');
  });
});
