const { getInput } = require('./input');

const SHAPES = {
  A: { shape: 'ROCK', value: 1 },
  B: { shape: 'PAPER', value: 2 },
  C: { shape: 'SCISSORS', value: 3 },
  X: { shape: 'ROCK', value: 1 },
  Y: { shape: 'PAPER', value: 2 },
  Z: { shape: 'SCISSORS', value: 3 },
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
  const opponent = getShape(round.opponent);
  const my = getShape(round.me);

  if (opponent.shape === my.shape) {
    return 3 + my.value;
  }
  if (isWin(my.shape, opponent.shape)) {
    return 6 + my.value;
  }
  return my.value;
}

function getShape(playerShapeCode) {
  return SHAPES[playerShapeCode];
}


function isWin(shape1, shape2) {
  return RULES[shape1].winAgainst === shape2;
}



module.exports = {
  getResult,
};
