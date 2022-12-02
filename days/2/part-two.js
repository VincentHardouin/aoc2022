const { getInput } = require('./input');

const SHAPES = {
  A: { shape: 'ROCK', value: 1 },
  B: { shape: 'PAPER', value: 2 },
  C: { shape: 'SCISSORS', value: 3 },
};

const VALUES = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
};

const RULES = {
  ROCK: { winAgainst: 'SCISSORS', loseAgainst: 'PAPER' },
  PAPER: { winAgainst: 'ROCK', loseAgainst: 'SCISSORS' },
  SCISSORS: { winAgainst: 'PAPER', loseAgainst: 'ROCK' },
};

function getResult(input = getInput()) {
  return input.map(getScore).reduce((acc, val) => acc + val, 0);
}

function getScore(round) {
  const opponent = getShapeFromCode(round.opponent);
  if (round.me === 'Y') {
    return opponent.value + 3;
  }
  if (round.me === 'X') {
    const myShape = RULES[opponent.shape].winAgainst;
    return VALUES[myShape];
  }
  const myShape = RULES[opponent.shape].loseAgainst;
  return VALUES[myShape] + 6;
}

function getShapeFromCode(playerShapeCode) {
  return SHAPES[playerShapeCode];
}

function isWin(shape1, shape2) {
  return RULES[shape1].winAgainst === shape2;
}

module.exports = {
  getResult,
};
