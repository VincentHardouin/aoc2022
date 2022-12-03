const { getInput } = require('./input');
const { ALPHABET } = require('./constants');

function getResult(input = getInput()) {
  return input
    .map(getTwoCompartment)
    .map(({ firstCompartment, secondCompartment }) => getShareItem(firstCompartment, secondCompartment))
    .reduce((acc, val) => acc + ALPHABET.indexOf(val) + 1, 0);
}

function getTwoCompartment(rucksack) {
  const middleIndex = Math.ceil(rucksack.length / 2);
  const firstCompartment = rucksack.splice(0, middleIndex);
  const secondCompartment = rucksack.splice(-middleIndex);
  return { firstCompartment, secondCompartment };
}

function getShareItem(firstCompartment, secondCompartment) {
  for (const item of firstCompartment) {
    if (secondCompartment.includes(item)) {
      return item;
    }
  }
}

module.exports = {
  getResult,
  getTwoCompartment,
  getShareItem,
};
