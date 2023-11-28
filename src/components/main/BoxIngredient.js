import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 86px;
  height: 90px;
  border-radius: 4px;
  border: 1px solid #c4c4c4;
  margin-right: 8px;
`;

const IngreName = styled.span`
  color: #345a99;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

const IngreValue = styled.span`
  color: #464646;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

const BoxIngredient = ({ name, value }) => {
  return (
    <Box>
      <IngreName>{name}</IngreName>
      <IngreValue>{value}g</IngreValue>
    </Box>
  );
};

export default BoxIngredient;
