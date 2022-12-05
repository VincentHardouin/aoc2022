const { getInput } = require('./input');

function getResult(input = getInput()) {
  const lineCrates = input.lineCrates;
  input.instructions.forEach((instruction) => {
    while (instruction.move--) {
      lineCrates[instruction.to - 1].push(lineCrates[instruction.from - 1].pop());
    }
  });
  return lineCrates.map((l) => l.at(-1)).join('');
}

module.exports = {
  getResult,
};
