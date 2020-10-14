const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const MOVES = [ROCK, SCISSORS, PAPER];

const WIN = "WIN";
const TIE = "TIE";
const LOSE = "LOSE";

const isValidMove = (move) => MOVES.indexOf(move) >= 0;
const validateMoves = (...moves) => {
  moves.forEach((move) => {
    if (!isValidMove(move)) {
      throw new Error(`invalid move ${move}`);
    }
  });
};

const engine = {
  // get random move
  move: () => MOVES[Math.ceil(Math.random(1) * 3) - 1],

  // return result from move1 perspective
  play: (move1, move2) => {
    validateMoves(move1, move2);
    let result;
    if (move1 === move2) {
      result = TIE;
    } else {
      const index1 = MOVES.indexOf(move1);
      const index2 = MOVES.indexOf(move2);
      if (
        // in MOVES array, a move beats the one immediately after it...
        index1 === index2 - 1 ||
        // ... the last move beats the first move
        (index1 === MOVES.length - 1 && index2 === 0)
      ) {
        result = WIN;
      } else {
        result = LOSE;
      }
    }
    return result;
  },
};

export default engine;
