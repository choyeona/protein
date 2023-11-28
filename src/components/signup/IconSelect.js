import React, { useState } from "react";
import styled from "styled-components";
import { ArrowCircleDown } from "iconic-react"; // iconic-react에서 제공하는 화살표 아이콘을 사용합니다.

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
  width: 200px; /* 원하는 너비로 조정하세요. */
  position: relative;
`;

const Select = styled.select`
  border: none;
  outline: none;
  flex: 1;
  padding: 5px;
  appearance: none; /* 기본 스타일링 제거 (크로스 브라우징) */
  background: transparent;
`;

const Icon = styled(ArrowCircleDown)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const renderOptions = (options) => {
  return options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));
};

const IconSelect = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <SelectContainer>
      <Select value={selectedOption} onChange={handleSelectChange}>
        {renderOptions(options)}
      </Select>
      <Icon size={20} color="#333" />
    </SelectContainer>
  );
};

export default IconSelect;
