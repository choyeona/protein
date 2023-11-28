import React, { useState } from "react";
import styled from "styled-components";
import GoalButton from "../components/signup/GoalButton";
import ButtonComponent from "../components/signup/ButtonComponent";
import axios from "axios";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Title = styled.div`
  display: flex;
  margin-top: 46px;
  font-weight: bold;
  font-size: 20px;
  justify-content: center;
  text-align: center;
  margin-bottom: 5px;
`;

const Text = styled.div`
  font-size: 12px;
  color: #7b6f72;
  justify-content: center;
  text-align: center;
`;

const ModeSelection = ({ signup, signupData, handleChange }) => {
  const [selectedMode, setSelectedMode] = useState(null);

  const handleModeSelect = (mode) => {
    console.log(mode);
    setSelectedMode((prevSelectedMode) =>
      prevSelectedMode === mode ? null : mode
    );
    handleComplete();
  };

  const handleComplete = () => {
    if (selectedMode) {
      handleChange({
        target: {
          name: "modeType",
          value: selectedMode,
        },
      });
      signup(); // 서버로 데이터 전송
    } else {
      alert("모드를 선택해주세요.");
    }
  };

  return (
    <div>
      <Title>당신의 목표는 무엇입니까?</Title>
      <Text>당신에게 가장 적합한 프로그램을 선택해 봅시다!</Text>
      <ButtonContainer>
        <GoalButton
          title="일반모드"
          description="특별 관리가 필요한 사람이 아닌 건강한 사람의 균형 잡힌 식단모드에요."
          onSelect={() => handleModeSelect("NORMAL")}
          isSelected={selectedMode === "NORMAL"}
          handleChange={handleChange}
          name={"NORMAL"}
        />
        <GoalButton
          title="다이어트모드"
          description="체지방 감소를 우선으로 건강한 다이어트모드에요."
          onSelect={() => handleModeSelect("DIET")}
          isSelected={selectedMode === "DIET"}
          handleChange={handleChange}
          name={"diet"}
        />
        <GoalButton
          title="근력키우기모드"
          description="근육량을 늘리고, 운동 능력을 향상시키는데 도움이 되는 식단이에요."
          onSelect={() => handleModeSelect("STRENGTHEN")}
          isSelected={selectedMode === "STRENGTHEN"}
          handleChange={handleChange}
          name={"protein"}
        />
      </ButtonContainer>
      <ButtonContainer>
        <ButtonComponent text={"완료하기"} handleClick={handleComplete} />
      </ButtonContainer>
    </div>
  );
};

export default ModeSelection;
