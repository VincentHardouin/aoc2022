const { describe, it, expect } = require('@jest/globals');
const partTwo = require('./part-two');
const { parseInputString } = require('./input');

describe('day7 | part-two', () => {
  describe('#getResult', () => {
    it('should ', () => {
      const inputString = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;
      const input = parseInputString(inputString);

      const result = partTwo.getResult(input);

      expect(result).toBe(24933642);
    });
  });
});
