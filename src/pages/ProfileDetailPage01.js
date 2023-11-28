import React, { useState } from "react";
import SignupTitle1 from "../components/signup/SignupTitle1";
import styled from "styled-components";
import IconInput from "../components/signup/IconInput";
import PrivacyCheckbox from "../components/signup/PrivacyCheckbox";
import ButtonComponent from "../components/signup/ButtonComponent";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";

const PageBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 46px;
`;

const PrivacyCheckboxBlock = styled.div`
  margin-top: 20px;
`;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 10px 0px 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  text-size: 14px;
`;

const ProfileDetailPage01 = ({ nextStep, handleChange }) => {
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const handlePrivacyCheckboxChange = (e) => {
    console.log(e);
    setPrivacyAgreed(e);
  };

  const handleSignupButtonClick = () => {
    if (!privacyAgreed) {
      alert("개인 정보 보호 정책 및 이용 약관에 동의해야 합니다.");
      return;
    }
  };

  return (
    <PageBlock>
      <SignupTitle1 title={"환영합니다 !"} logo={"PROTEIN BODY"}></SignupTitle1>
      <InputForm>
        <IconInput
          icontype={"user"}
          placeholder={"이름"}
          handleChange={handleChange}
          name={"name"}
        ></IconInput>
        <IconInput
          icontype={"sms"}
          placeholder={"이메일"}
          handleChange={handleChange}
          name={"mail"}
        ></IconInput>
        <IconInput
          icontype={"lock"}
          placeholder={"비밀번호"}
          handleChange={handleChange}
          name={"password"}
        ></IconInput>
      </InputForm>
      <PrivacyCheckboxBlock>
        <PrivacyCheckbox
          label={"개인 정보 보호 정책 및 이용 약관에 동의합니다"}
          onChange={handlePrivacyCheckboxChange}
        ></PrivacyCheckbox>
      </PrivacyCheckboxBlock>
      <ButtonContainer>
        <ButtonComponent
          text="완성하기"
          handleClick={nextStep}
        ></ButtonComponent>
      </ButtonContainer>
      <Text>
        계정이 이미 있으신가요?
        <Link to="/login">로그인</Link>
      </Text>
    </PageBlock>
  );
};

export default ProfileDetailPage01;
