const { getInput } = require('./input');

function getResult(input = getInput()) {
  return input.filter((pair) => isFullyContain(pair[0], pair[1]) || isFullyContain(pair[1], pair[0])).length;
}

function isFullyContain(a, b) {
  return b.min <= a.min && b.max >= a.max;
}

module.exports = {
  getResult,
};
