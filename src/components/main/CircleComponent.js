import React, { useState } from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const CircleComponent = ({ color }) => {
  return (
    <div>
      <Circle color={color}></Circle>
    </div>
  );
};

export default CircleComponent;
