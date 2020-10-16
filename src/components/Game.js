import React, { useState } from "react";
import styled from "styled-components";
import engine from "src/game/engine";
import MovesLoop from "src/components/Game/MovesLoop";
import Zone from "src/components/Game/Zone";

const CPU_THINKING_MS = 1000;

const advancePlay = (move) => {
  const otherMove = engine.move();
  const result = engine.play(move, otherMove);
  return { otherMove, result };
};

const Game = () => {
  const [status, setStatus] = useState("Click to play");
  const [currentMove, setCurrentMove] = useState();
  const [cpuMove, setCpuMove] = useState();
  const isPlaying = currentMove && !cpuMove;
  const hasPlayed = currentMove && cpuMove;

  const reset = () => {
    setCurrentMove();
    setCpuMove();
    setStatus();
  };

  const play = (move) => {
    setCurrentMove(move);
    setStatus("");
    setTimeout(() => {
      const { otherMove, result } = advancePlay(move.toUpperCase());
      setCpuMove(otherMove);
      setStatus(`YOU ${result}`);
    }, CPU_THINKING_MS);
  };

  return (
    <StyledFlex>
      {/* player */}
      {engine.MOVES.map((move) => (
        <PlayerZone
          onClick={isPlaying ? undefined : hasPlayed ? reset : () => play(move)}
          hidden={currentMove && currentMove !== move}
        >
          {move}
        </PlayerZone>
      ))}

      {/* status / result */}
      <CenterAligned>
        <Status>{status}</Status>
        {hasPlayed && <Button onClick={reset}>Again</Button>}
      </CenterAligned>

      {/* cpu */}
      {currentMove && (
        <CpuZone isCpu={true}>{cpuMove || <MovesLoop />}</CpuZone>
      )}
    </StyledFlex>
  );
};

export default Game;

const StyledFlex = styled.ul`
  display: flex;
  flex-flow: row;
  width: 100%;
  padding: 0;
  justify-items: center;
  align-items: center;
`;

const StyledZone = styled(Zone)`
  color: white;
  border: 3px solid rgba(0, 0, 0, 0.2);
  list-style: none;
  height: 80vh;
  width: 33%;
  margin: 1%;
  flex-grow: 1;
  font-weight: bold;
  font-size: 4vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayerZone = styled(StyledZone)`
  background-color: rebeccapurple;
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  cursor: pointer;

  &:hover {
    background-color: mediumpurple;
  }

  &:active {
    background-color: darkmagenta;
  }
`;

const CpuZone = styled(StyledZone)`
  background-color: red;
  font-family: Monaco, sans-serif;
`;

const Status = styled.div`
  color: white;
  font-size: 10vw;
  text-align: center;
`;

const CenterAligned = styled.li`
  font-size: 4vw;
  text-align: center;
  list-style: none;
`;

const Button = styled.button`
  font-size: 2vw;
`;
