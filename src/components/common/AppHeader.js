import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Add } from "iconic-react";

const HeaderWrapper = styled.header`
  background-color: #fff;
  color: #000;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center; // 이를 사용하여 제목을 중앙에 배치합니다.
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #f2f2f2;
`;

const BackButton = styled.div`
  // 여기 Link를 div로 바꿈
  color: #000;
  text-decoration: none;
  font-size: 16px;
  position: absolute;
  left: 20px;
  cursor: pointer;
`;

const DietAddButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px; // 원하는 크기로 조절
  height: 40px; // 원하는 크기로 조절
  border-radius: 50%; // 원형으로 만들기 위한 스타일
  background-color: #5f89f5; // 원하는 배경색으로 조절
  position: absolute;
  right: 20px;
`;

const DietAddbutton = styled(Add)`
  color: #fff;
  transform: scale(1.4);
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const AppHeader = ({ backButton, title, type, addEvent }) => {
  const navigate = useNavigate(); // 여기의 변수 이름을 navigate로 변경하겠습니다.

  return (
    <HeaderWrapper>
      {backButton && (
        <BackButton onClick={() => navigate(-1)}>뒤로</BackButton> // navigate(-1)을 사용하여 뒤로 가기를 구현하겠습니다.
      )}
      <Title>{title}</Title>
      {type === "diet" && (
        <DietAddButtonContainer onClick={addEvent}>
          <DietAddbutton size={20} />
        </DietAddButtonContainer>
      )}
    </HeaderWrapper>
  );
};

export default AppHeader;
