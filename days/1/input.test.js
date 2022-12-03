const input = require('./input');

describe('day1 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result[0]).toEqual([8462, 6981, 3714, 4409, 8186, 3614, 2218, 7558, 6702]);
  });
});
