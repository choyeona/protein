import React from "react";
import styled from "styled-components";
import { CloudPlus } from "iconic-react"; // FaIconName 대신 사용하고자 하는 FontAwesome 아이콘을 선택하세요.

const IconicButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000; /* 버튼 텍스트 색상 설정 */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 배경색 변경 애니메이션 */
`;

const IconButton = ({ iconName, onClick }) => {
  return (
    <IconicButtonWrapper onClick={onClick}>
      <CloudPlus size={7} />
    </IconicButtonWrapper>
  );
};

export default IconButton;
