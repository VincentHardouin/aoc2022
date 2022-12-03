const _ = require('lodash');
const { getInput } = require('./input');
const { ALPHABET } = require('./constants');

function getResult(input = getInput()) {
  const groups = _.chunk(input, 3);
  return groups
    .map((group) => getShareItem(group[0], group[1], group[2]))
    .reduce((acc, val) => acc + ALPHABET.indexOf(val) + 1, 0);
}

function getShareItem(first, second, third) {
  for (const item of first) {
    if (second.includes(item) && third.includes(item)) {
      return item;
    }
  }
}

module.exports = {
  getResult,
  getShareItem,
};
