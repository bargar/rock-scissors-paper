import React, { useEffect, useState } from "react";
import engine from "src/game/engine";
const { MOVES } = engine;

const FRAME_LENGTH_MS = 100;

const nextMove = (move) => MOVES[(MOVES.indexOf(move) + 1) % MOVES.length];

const MovesLoop = () => {
  const [move, setMove] = useState(MOVES[0]);

  useEffect(() => {
    const handle = setTimeout(() => {
      setMove(nextMove(move));
    }, FRAME_LENGTH_MS);

    // effect cleanup
    return () => clearTimeout(handle);
  }, [move]);
  return move;
};

export default MovesLoop;
