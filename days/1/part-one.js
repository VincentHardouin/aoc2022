const { getInput } = require('./input');

function getSum(elf) {
  return elf.reduce((acc, val) => acc + val, 0);
}
function getResult(input = getInput()) {
  const [max] = input.map(getSum).sort((a, b) => b - a);
  return max;
}

module.exports = {
  getResult,
};
