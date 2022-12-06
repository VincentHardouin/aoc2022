const { getInput } = require('./input');

function getResult(input = getInput()) {
  for (let i = 4; i < input.length; i++) {
    if (new Set(input.slice(i - 4, i)).size === 4) {
      return i;
    }
  }
}

module.exports = {
  getResult,
};
