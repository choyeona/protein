import React from "react";
import { Lock, Sms, User, Calendar } from "iconic-react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0px;
  border-radius: 5px;
  width: 181px; // 원하는 너비로 조정하세요.
  height: 48px;
  margin: 0px 4px 7px 4px;
  background-color: #f7f8f8;
  margin: 0px 4px 10px 4px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  display: flex;
  width: 138px;
  padding: 5px;
  background: #f7f8f8;
`;

const Text = styled.span`
  margin-left: 10px; /* 텍스트와 입력 필드 사이의 간격을 조정하세요. */
  font-size: 14px; /* 텍스트의 크기를 조정하세요. */
`;

const IconInput2 = ({ placeholder, rightSpan, handleChange, name }) => {
  return (
    <InputContainer>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
      />
      {rightSpan && <Text>{rightSpan}</Text>}
    </InputContainer>
  );
};

export default IconInput2;
