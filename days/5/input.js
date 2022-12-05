const path = require('path');
const fs = require('fs');
const _ = require('lodash');

function getInput() {
  return parseInputString(fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').toString());
}

function parseInputString(input) {
  const [firstPart, secondPart] = input.split('\n\n');
  let temp1 = firstPart.split('\n');
  temp1.pop();
  temp1 = temp1
    .map((l) => {
      return l.split('').reduce((acc, val, index) => {
        if (index % 4 == 1) {
          acc.push(val);
        }
        return acc;
      }, []);
    })
    .reverse();
  let lineCrates = _.zip(...temp1);
  lineCrates = lineCrates.map((line) => line.filter((a) => a !== ' '));
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
