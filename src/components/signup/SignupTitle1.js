import React from "react";
import styled from "styled-components";

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 46px;
`;

const MainTitle = styled.div`
  display: flex;
  font-size: 20px;
  color: #000000;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
`;

const Logo = styled.div`
  font-size: 20px;
  color: #000000;
  font-weight: bold;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
`;

const SignupTitle = ({ title, logo }) => {
  return (
    <Block>
      <MainTitle>{title}</MainTitle>
      <Logo>{logo}</Logo>
    </Block>
  );
};

export default SignupTitle;
