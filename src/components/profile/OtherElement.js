import React from "react";
import styled from "styled-components";
import { Settings, CheckCircle } from "react-feather"; // 필요한 아이콘을 import합니다.

const Container = styled.div`
  margin: 20px 20px; /* 상하 20px의 여백을 추가 */
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 1.3em;
  margin-bottom: 10px;
`;

const IconRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
`;

const IconLabel = styled.span`
  margin-left: 10px;
`;

const OtherElement = () => {
  return (
    <Container>
      <SectionTitle>Other</SectionTitle>
      <IconRow>
        <Settings size={20} />
        <IconLabel>환결설정</IconLabel>
      </IconRow>
      <IconRow>
        <CheckCircle size={20} />
        <IconLabel>
          <button>앱평가하기</button>
        </IconLabel>
      </IconRow>
    </Container>
  );
};

export default OtherElement;
