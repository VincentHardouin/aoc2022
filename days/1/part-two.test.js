const partTwo = require('./part-two');

describe('day1 | part-two', () => {
  describe('#getResult', () => {
    it('should ', () => {
      const input = [[1000, 2000, 3000], [4000], [5000, 6000], [7000, 8000, 9000], [10000]];

      const result = partTwo.getResult(input);

      expect(result).toBe(45000);
    });
  });
});
