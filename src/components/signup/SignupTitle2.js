import React from "react";
import styled from "styled-components";

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MainTitle = styled.div`
  font-size: 20px;
  color: #000000;
  font-weight: bold;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  margin-bottom: 7px;
`;

const Description = styled.div`
  display: flex;
  font-size: 12px;
  color: #000000;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  margin-top:8px;
`;

const SignupTitle2 = ({ title, description }) => {
  return (
    <Block>
      <MainTitle>{title}</MainTitle>
      <Description>{description}</Description>
    </Block>
  );
};

export default SignupTitle2;
