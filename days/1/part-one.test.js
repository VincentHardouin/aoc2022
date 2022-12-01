const partOne = require('./part-one');

describe('day1 | part-one', () => {
  describe('#getResult', () => {
    it('should ', () => {
      const input = [[1000, 2000, 3000], [4000], [5000, 6000], [7000, 8000, 9000], [10000]];

      const result = partOne.getResult(input);

      expect(result).toBe(24000);
    });
  });
});
