import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 12px;
  margin: 30px 20px;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 1.3em;
  margin-bottom: 10px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center; // 요소들을 수직 중앙 정렬합니다.
  justify-content: space-between;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  text-align: right; // 입력 필드 내 텍스트를 오른쪽으로 정렬합니다.
  width: auto; // 필요에 따라 적절한 너비로 조정하세요.
  flex: 1; // 입력 필드가 유연하게 공간을 채우도록 합니다.
`;

const UnitLabel = styled.span`
  margin-left: 10px; // 라벨과 입력 필드 사이의 간격을 조정합니다.
`;

const EditButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  margin-left: 10px;
`;

const Dietinfor = ({ profileData }) => {
  const [formData, setFormData] = useState({
    category: profileData.result.mode,
    height: profileData.result.height,
    weight: profileData.result.weight,
    targetWeight: profileData.result.goalWeight,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveClick = () => {
    fetch("https://bhsworld.store/api/v1/user/2", {
      // URL과 사용자 ID는 필요에 따라 조정
      method: "PUT", // 또는 'PATCH'
      headers: {
        "Content-Type": "application/json",
        // 필요한 경우 추가 인증 헤더를 여기에 추가
      },
      body: JSON.stringify({
        // 서버가 요구하는 형식에 맞춰서 데이터를 보내야 합니다.
        mode: formData.category,
        height: formData.height,
        weight: formData.weight,
        goalWeight: formData.targetWeight,
        // 필요한 다른 필드도 여기에 추가
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
        // 성공적으로 데이터가 전송되었을 때의 로직
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        // 에러 처리 로직
      });
  };

  const changeValue = (value) => {
    if (value === "NORMAL") {
      return "일반모드";
    }
    return value;
  };
  const UnitLabel = styled.span`
    margin-left: 10px;
    // 필요한 추가 스타일링
  `;
  const InputLabel = styled.span`
    // 스타일링 규칙을 여기에 추가합니다.
    margin-right: 10px;
  `;

  return (
    <Container>
      <EditButton onClick={handleSaveClick}>저장</EditButton>
      <SectionTitle>내 식단정보</SectionTitle>
      <InputRow>
        <InputLabel>식단 :</InputLabel>
        <InputField
          type="text"
          placeholder="식단 카테고리 입력"
          name="category"
          value={changeValue(formData.category)}
          onChange={handleInputChange}
        />
      </InputRow>
      <InputRow>
        <InputLabel>키:</InputLabel>
        <InputField
          type="text"
          placeholder="키 입력"
          name="height"
          value={`${formData.height} cm`}
          onChange={handleInputChange}
        />
      </InputRow>
      <InputRow>
        <InputLabel>몸무게:</InputLabel>
        <InputField
          type="text"
          placeholder="몸무게 입력"
          name="weight"
          value={formData.weight}
          onChange={handleInputChange}
        />
        <UnitLabel>kg</UnitLabel>
      </InputRow>
      <InputRow>
        <InputLabel>목표체중:</InputLabel>
        <InputField
          type="text"
          placeholder="목표체중 입력"
          name="targetWeight"
          value={`${formData.targetWeight} kg`}
          onChange={handleInputChange}
        />
      </InputRow>
    </Container>
  );
};

export default Dietinfor;
