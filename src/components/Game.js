import React, { useState } from "react";
import styled from "styled-components";
import engine from "src/game/engine";

const StyledFlex = styled.ul`
  display: flex;
  flex-flow: row;
  width: 100%;
  //background-color: red;
  padding: 0;
`;

const Zone = ({ name, className, onClick }) => (
  <li className={className} onClick={onClick}>
    {name}
  </li>
);

const StyledZone = styled(Zone)`
  background-color: rebeccapurple;
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
  cursor: pointer;

  &:hover {
    background-color: mediumpurple;
  }

  &:active {
    background-color: darkmagenta;
  }
`;

const Status = styled.div`
  color: white;
  font-size: 4vw;
`;
const play = (move) => {
  const otherMove = engine.move();
  const result = engine.play(move, otherMove);
  console.log(`computer played ${otherMove}... you ${result}`);
  return { otherMove, result };
};

const DEFAULT_STATUS = "Click to play";
const Game = () => {
  const [status, setStatus] = useState(DEFAULT_STATUS);

  const throwDown = (move) => {
    setStatus("...");
    setTimeout(() => {
      const { otherMove, result } = play(move.toUpperCase());
      setStatus(
        `You played ${move.toUpperCase()}. Computer played ${otherMove}... YOU ${result}`
      );
    }, 2000);
  };

  return (
    <>
      <StyledFlex>
        {["rock", "scissors", "paper"].map((move) => (
          <StyledZone name={move} onClick={() => throwDown(move)} />
        ))}
      </StyledFlex>
      <Status>{status}</Status>
    </>
  );
};

export default Game;
