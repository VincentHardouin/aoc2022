const path = require('path');
const fs = require('fs');
const _ = require('lodash');

function getInput() {
  return parseInputString(fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').toString());
}

function parseInputString(input) {
  const [firstPart, secondPart] = input.split('\n\n');
  const temp1 = firstPart
    .split('\n')
    .map((l) => {
      return l.replaceAll('    ', ' ').split(' ');
    })
    .reverse();
  temp1.shift();
  const lineCrates = Array.from({ length: 9 }, () => []);
  temp1.forEach((l) =>
    l.forEach((c, i) => {
      if (c === '') return;
      let d = c.replace('[', '');
      d = d.replace(']', '');
      lineCrates[i].push(d);
    })
  );
  const instructions = secondPart
    .trim()
    .split('\n')
    .map((line) => {
      const [move, from, to] = [...line.matchAll(/\d+/g)];
      return { move: Number(move[0]), from: Number(from[0]), to: Number(to[0]) };
    });

  return { lineCrates, instructions };
}

module.exports = {
  getInput,
  parseInputString,
};
