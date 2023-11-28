import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 15px;
`;

const SecondLine = styled.div`
  display: flex;
  flex-direction: row;
`;
const Name = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 800;
`;

const Text = styled.span`
  color: #000;
  font-size: 14px;
  font-style: normal;
`;

const ModeRecomText = ({ mode, name }) => {
  return (
    <Container>
      <Name>{mode}</Name>
      <SecondLine>
        <Name>{name}</Name>
        <Text>님에게 추천하는 권장 식사</Text>
      </SecondLine>
    </Container>
  );
};

export default ModeRecomText;
