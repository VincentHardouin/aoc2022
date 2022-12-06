const { getInput } = require('./input');

function getResult(input = getInput()) {
  for (let i = 14; i < input.length; i++) {
    if (new Set(input.slice(i - 14, i)).size === 14) {
      return i;
    }
  }
}

module.exports = {
  getResult,
};
