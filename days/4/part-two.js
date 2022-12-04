const { getInput } = require('./input');
const _ = require('lodash');

function getResult(input = getInput()) {
  return input.filter((pair) => {
    const section1 = _.range(pair[0].min, pair[0].max + 1, 1);
    const section2 = _.range(pair[1].min, pair[1].max + 1, 1);
    return isOverlap(section1, section2);
  }).length;
}

function isOverlap(a, b) {
  return _.intersection(a, b).length > 0;
}

module.exports = {
  getResult,
};
