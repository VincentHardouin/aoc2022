const path = require('path');
const fs = require('fs');

function getInput() {
  return fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n\n')
    .map((elf) => {
      return elf.split('\n').map((cal) => parseInt(cal,10));
    });
}

module.exports = {
  getInput,
};
