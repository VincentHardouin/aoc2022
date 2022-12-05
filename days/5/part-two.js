const { getInput } = require('./input');

function getResult(input = getInput()) {
  const lineCrates = input.lineCrates;
  input.instructions.forEach(({ move, from, to }) => {
    lineCrates[to - 1].push(...lineCrates[from - 1].splice(lineCrates[from - 1].length - move, move));
  });
  return lineCrates.map((l) => l.at(-1)).join('');
}

module.exports = {
  getResult,
};
