import React from "react";
import styled from "styled-components";
import Flex from "src/components/Flex";
import Game from "src/components/Game";

const FlexContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  min-height: 95vh;
  align-items: center;
  //background-color: green;
`;

const Layout = () => {
  return (
    <FlexContainer>
      <Game />
    </FlexContainer>
  );
};

export default Layout;
