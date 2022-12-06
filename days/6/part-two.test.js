const { describe, it, expect } = require('@jest/globals');
const partTwo = require('./part-two');
const { parseInputString } = require('./input');

describe('day6 | part-two', () => {
  describe('#getResult', () => {
    const testCase = [
      { inputString: `mjqjpqmgbljsphdztnvjfqwrcgsmlb`, expectedResult: 19 },
      { inputString: `bvwbjplbgvbhsrlpgdmjqwftvncz`, expectedResult: 23 },
      { inputString: `nppdvjthqldpwncqszvftbrmjlhg`, expectedResult: 23 },
      { inputString: `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`, expectedResult: 29 },
      { inputString: `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`, expectedResult: 26 },
    ];

    testCase.forEach(({ inputString, expectedResult }) => {
      it(`should return ${expectedResult}`, () => {
        const input = parseInputString(inputString);

        const result = partTwo.getResult(input);

        expect(result).toBe(expectedResult);
      });
    });
  });
});
