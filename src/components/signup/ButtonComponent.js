import React from "react";
import styled from "styled-components";
import { ArrowRight2 } from "iconic-react";

const BasicButton = styled.button`
  display: flex;
  height: 70px;
  width: 368px;
  border-radius: 48px;
  background-color: #a0bbff;
  margin-top: 46px;
  margin-bottom: 30px;
  border: 0px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 46px;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

const IconNext = styled(ArrowRight2)`
  margin-right: 5px;
  margin-left: 10px;
  color: #ffffff; //흰색으로 지정 어떻게 하나요?
  fill: none;
`;

export const SelectedIcon = ({ icontype }) => {
  console.log(icontype);
  if (icontype === "ArrowRight2") {
    return (
      <IconNext size={20} color="#fff">
        아이콘
      </IconNext>
    );
  }
};

const ButtonComponent = ({ icontype, text, handleClick }) => {
  return (
    <BasicButton onClick={handleClick}>
      <Text>{text}</Text>
      <SelectedIcon icontype={icontype}></SelectedIcon>
    </BasicButton>
  );
};

export default ButtonComponent;
