import React from "react";
import styled from "styled-components";

const TipContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 368px;
  height: 38px;
  border-radius: 20px;
  background-color: #f8f8f8;
  align-items: center;
  box-shadow: 0px 0px 10px 0px rgba(29, 22, 23, 0.05);
`;

const TipCircle = styled.div`
  width: 24px;
  height: 24px;
  background-color: #c9defa;
  border-radius: 50%;
  margin: 6px 0px 6px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tip = styled.span`
  font-size: 10px;
  font-weight: 700;
  font-size: 10px;
  line-height: 10px;
`;

const Text = styled.span`
  margin-left: 14px; /* 텍스트와 입력 필드 사이의 간격을 조정하세요. */
  font-size: 14px; /* 텍스트의 크기를 조정하세요. */
  font-weight: 500;
`;

const TipBox = ({ text }) => {
  return (
    <div>
      <TipContainer>
        <TipCircle>
          <Tip>tip</Tip>
        </TipCircle>
        <Text>{text}</Text>
      </TipContainer>
    </div>
  );
};

export default TipBox;
