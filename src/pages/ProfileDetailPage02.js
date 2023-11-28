import React from "react";
import SignupTitle2 from "../components/signup/SignupTitle2";
import styled from "styled-components";
import IconInput from "../components/signup/IconInput";
import PrivacyCheckbox from "../components/signup/PrivacyCheckbox";
import IconSelect from "../components/signup/IconSelect";
import IconSelectBox from "../components/signup/IconSelectBox";
import IconInput2 from "../components/signup/IconInput2";
import ButtonComponent from "../components/signup/ButtonComponent";

const PageBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 46px;
`;

const genderselection = styled.div`
  margin-top: 20px;
`;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const InputForm2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const handleGenderChange = (selectedGender) => {
  console.log("선택한 성별:", selectedGender);
};

const ProfileDetailPage02 = ({ nextStep, handleChange }) => {
  const handleBirthDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      e.target.value = value;
    } else if (value.length <= 6) {
      e.target.value = value.slice(0, 4) + "-" + value.slice(4);
    } else {
      e.target.value =
        value.slice(0, 4) + "-" + value.slice(4, 6) + "-" + value.slice(6, 8);
    }
    handleChange(e);
  };

  return (
    <PageBlock>
      <SignupTitle2
        title="당신의 프로필을 만들어 봅시다!"
        description="이것은 우리가 당신에 대해 더 많이 알도록 도와줄 것입니다!"
      ></SignupTitle2>
      <InputForm>
        <genderselection>
          <IconSelectBox onChange={handleGenderChange} />
        </genderselection>
        <IconInput
          icontype={"Calendar"}
          placeholder={"생년월일"}
          handleChange={handleBirthDateChange}
          name={"birthDate"}
        ></IconInput>
        <InputForm2>
          <IconInput2
            placeholder={"현재 체중"}
            rightSpan={"Kg"}
            handleChange={handleChange}
            name={"weight"}
          ></IconInput2>
          <IconInput2
            placeholder={"목표 체중"}
            handleChange={handleChange}
            name={"goalWeight"}
            rightSpan={"Kg"}
          ></IconInput2>
        </InputForm2>
        <IconInput
          icontype={"ArrowSwapVertical"}
          placeholder={"키"}
          rightSpan={"cm"}
          handleChange={handleChange}
          name={"height"}
        ></IconInput>
      </InputForm>
      <ButtonComponent
        text={"다음"}
        icontype={"ArrowRight2"}
        handleClick={nextStep}
      ></ButtonComponent>
    </PageBlock>
  );
};

export default ProfileDetailPage02;
