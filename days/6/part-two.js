const { getInput } = require('./input');

function getResult(input = getInput()) {
  let marker = [];
  for (let i = 0; i < input.length; i++) {
    marker.push(input[i]);
    if (isValid(marker)) {
      return i + 1;
    }
    if (marker.length === 14) {
      marker.shift();
    }
  }
}

function isValid(marker) {
  let temp1 = [];
  if (marker.length !== 14) {
    return false;
  }
  for (const c of marker) {
    if (temp1.includes(c)) {
      return false;
    }
    temp1.push(c);
  }
  return true;
}

module.exports = {
  getResult,
};
