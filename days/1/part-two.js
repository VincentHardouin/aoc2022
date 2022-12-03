const { getInput } = require('./input');

function getSum(elf) {
  return elf.reduce((acc, val) => acc + val, 0);
}
function getResult(input = getInput()) {
  const [max1, max2, max3] = input.map(getSum).sort((a, b) => b - a);
  return max1 + max2 + max3;
}

module.exports = {
  getResult,
};
