const { getInput } = require('./input');

function getResult(input = getInput()) {
  let nbOfVisibleTree = 0;
  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input[0].length - 1; j++) {
      if (isVisible(input, i, j)) {
        ++nbOfVisibleTree;
      }
    }
  }
  return nbOfVisibleTree + input.length * 2 + (input[0].length - 2) * 2;
}

function isVisible(trees, i, j) {
  const tree = trees[i][j];
  // Top
  const top = [];
  for (let l = i - 1; l >= 0; l--) {
    top.push(trees[l][j]);
  }

  // Bottom
  const bottom = [];
  for (let l = i + 1; l < trees.length; l++) {
    bottom.push(trees[l][j]);
  }

  // Left
  const left = [];
  for (let k = j - 1; k >= 0; k--) {
    left.push(trees[i][k]);
  }

  // Right
  const right = [];
  for (let k = j + 1; k < trees[0].length; k++) {
    right.push(trees[i][k]);
  }

  return (
    top.filter((t) => t >= tree).length === 0 ||
    bottom.filter((t) => t >= tree).length === 0 ||
    left.filter((t) => t >= tree).length === 0 ||
    right.filter((t) => t >= tree).length === 0
  );
}

module.exports = {
  getResult,
  isVisible,
};
