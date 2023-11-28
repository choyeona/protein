import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 33.3%;
`;

const Recom = styled.span`
  font-size: 14px;
  color: #000;
  margin-bottom: 5px;
`;

const Name = styled.span`
  font-size: 14px;
  color: #000;
  white-space: nowrap;
`;

const Recommened = ({ value, name }) => {
  return (
    <Container>
      <Recom>{value}g</Recom>
      <Name>{name}</Name>
    </Container>
  );
};

export default Recommened;
