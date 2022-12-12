const path = require('path');
const fs = require('fs');

function getInput() {
  return parseInputString(fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').toString());
}

function parseInputString(input) {
  return input
    .trim()
    .split('\n')
    .map((value) => {
      return value.split('').map(Number);
    });
}

module.exports = {
  getInput,
  parseInputString,
};
