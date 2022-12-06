const { describe, it, expect } = require('@jest/globals');
const partOne = require('./part-one');
const { parseInputString } = require('./input');

describe('day6 | part-one', () => {
  describe('#getResult', () => {
    const testCase = [
      { inputString: `mjqjpqmgbljsphdztnvjfqwrcgsmlb`, expectedResult: 7 },
      { inputString: `bvwbjplbgvbhsrlpgdmjqwftvncz`, expectedResult: 5 },
      { inputString: `nppdvjthqldpwncqszvftbrmjlhg`, expectedResult: 6 },
      { inputString: `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`, expectedResult: 10 },
      { inputString: `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`, expectedResult: 11 },
    ];

    testCase.forEach(({ inputString, expectedResult }) => {
      it(`should return ${expectedResult}`, () => {
        const input = parseInputString(inputString);

        const result = partOne.getResult(input);

        expect(result).toBe(expectedResult);
      });
    });
  });
});
