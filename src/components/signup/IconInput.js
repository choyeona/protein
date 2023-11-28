import React from "react";
import { Lock, Sms, User, Calendar, ArrowSwapVertical } from "iconic-react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0px;
  border-radius: 5px;
  width: 100%; // 원하는 너비로 조정하세요.
  min-width: 340px;
  height: 48px;
  background-color: #f7f8f8;
  margin-bottom: 7px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  display: flex;
  width: 100%;
  padding: 5px;
  background: #f7f8f8;
`;

// Iconic 아이콘을 스타일링하기 위한 스타일 컴포넌트

const IconUser = styled(User)`
  margin-right: 5px;
  margin-left: 10px;
`;

const IconSms = styled(Sms)`
  margin-right: 5px;
  margin-left: 10px;
`;

const IconLock = styled(Lock)`
  margin-right: 5px;
  margin-left: 10px;
`;

const IconCalendar = styled(Calendar)`
  margin-right: 5px;
  margin-left: 10px;
`;

const IconSwap = styled(ArrowSwapVertical)`
  margin-right: 5px;
  margin-left: 10px;
`;

const Text = styled.span`
  margin-right: 13px; /* 텍스트와 입력 필드 사이의 간격을 조정하세요. */
  font-size: 14px; /* 텍스트의 크기를 조정하세요. */
`;

const IconInput = ({
  icontype,
  placeholder,
  rightSpan,
  handleChange,
  name,
}) => {
  return (
    <InputContainer>
      <SelectedIcon icontype={icontype}></SelectedIcon>
      {/* handleChange 변경 감지 이벤트 바인딩 가능한 Props 추가 */}
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

export const SelectedIcon = ({ icontype }) => {
  console.log(icontype);
  if (icontype === "user") {
    return (
      <IconUser size={20} color="#000">
        아이콘
      </IconUser>
    );
  } else if (icontype === "sms") {
    return (
      <IconSms size={20} color="#000">
        아이콘
      </IconSms>
    );
  } else if (icontype === "lock") {
    return (
      <IconLock size={20} color="#000">
        아이콘
      </IconLock>
    );
  } else if (icontype === "Calendar") {
    return (
      <IconCalendar size={20} color="#000">
        아이콘
      </IconCalendar>
    );
  } else if (icontype === "ArrowSwapVertical") {
    return (
      <IconSwap size={20} color="#000">
        아이콘
      </IconSwap>
    );
  } else {
    return null;
  }
};

export default IconInput;
