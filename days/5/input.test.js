const { describe, it, expect } = require('@jest/globals');
const input = require('./input');

describe('day5 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result.lineCrates[0]).toEqual(['G', 'F', 'V', 'H', 'P', 'S']);
    expect(result.instructions[0]).toEqual({ move: 6, from: 9, to: 3 });
  });
});
