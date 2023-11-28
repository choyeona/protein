import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  display: flex;
  width: 95%;
  min-width: 340px;
  height: 100px;
  border: 0;
  background-color: ${(props) =>
    props.isSelected
      ? "#5F89F5"
      : "#ffffff"}; /* Change background color when selected */
  flex-direction: column;
  border-radius: 15px;
  text-align: left;
  justify-content: center;
  margin: 10px;
  -webkit-box-shadow: 11px 6px 22px 0px rgba(0.1, 0.1, 0.1, 0.1);
  box-shadow: 11px 6px 22px 0px rgba(0.1, 0.1, 0.1, 0.1);
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const Description = styled.div`
  font-size: 12px;
  color: #7b6f72;
`;

const GoalButton = ({ title, description, onSelect, isSelected }) => {
  return (
    <ButtonContainer onClick={onSelect} isSelected={isSelected}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ButtonContainer>
  );
};

export default GoalButton;
