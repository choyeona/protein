import React, { useState } from "react";
import styled from "styled-components";
import { Profile2User } from "iconic-react";

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0px;
  border-radius: 5px;
  width: 368px; // 원하는 너비로 조정하세요.
  height: 48px;
  background: #f7f8f8;
  margin-top: 46px;
  margin-bottom: 10px;

`;

const IconGender = styled(Profile2User)`
  margin-right: 5px;
  margin-left: 10px;
`;

const Select = styled.select`
  border: none;
  outline: none;
  flex: 1;
  padding: 5px;
  background: #f7f8f8;
`;

const Option = styled.option`
  font-size: 14px;
`;

const Text = styled.span`
  margin-left: 10px;
  font-size: 14px;
`;

const IconSelectBox = ({ onChange }) => {
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedGender(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <div>
      <SelectContainer>
        <IconGender></IconGender>
        <Select value={selectedGender} onChange={handleGenderChange}>
          <Option value="" disabled>
            성별 선택
          </Option>
          <Option value="female">여성</Option>
          <Option value="male">남성</Option>
        </Select>
      </SelectContainer>
    </div>
  );
};

export default IconSelectBox;
