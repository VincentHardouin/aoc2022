const { getInput } = require('./input');
const _ = require('lodash');

function getResult(input = getInput()) {
  const scores = [];
  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input[0].length - 1; j++) {
      scores.push(getScenicScore(input, i, j));
    }
  }
  return _.max(scores);
}

function getScenicScore(trees, i, j) {
  const tree = trees[i][j];
  // Top
  let top = 0;
  for (let l = i - 1; l >= 0; l--) {
    const current = trees[l][j];
    if (current < tree) {
      top++;
    } else {
      top++;
      break;
    }
  }

  // Bottom
  let bottom = 0;
  for (let l = i + 1; l < trees.length; l++) {
    if (trees[l][j] < tree) {
      bottom++;
    } else {
      bottom++;
      break;
    }
  }

  // Left
  let left = 0;
  for (let k = j - 1; k >= 0; k--) {
    if (trees[i][k] < tree) {
      left++;
    } else {
      left++;
      break;
    }
  }

  // Right
  let right = 0;
  for (let k = j + 1; k < trees[0].length; k++) {
    if (trees[i][k] < tree) {
      right++;
    } else {
      right++;
      break;
    }
  }
  return top * bottom * left * right;
}

module.exports = {
  getResult,
  getScenicScore,
};
