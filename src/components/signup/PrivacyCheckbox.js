import React, { useState } from "react";
import styled from "styled-components";

// 스타일드 컴포넌트를 사용하여 스타일을 정의합니다.
const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
  margin-left: 20px;
  max-width: 304px;
`;

const CheckboxInput = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #333;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;
  outline: none;

  &:checked {
    background-color: #333;
    border-color: #333;
  }
`;

const CheckboxLabel = styled.span`
  color: #ada4a5;
  font-size: 12px;
`;

const PrivacyCheckbox = ({ label, isChecked, onChange }) => {
  const handleCheckboxChange = () => {
    onChange(!isChecked);
  };

  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default PrivacyCheckbox;
