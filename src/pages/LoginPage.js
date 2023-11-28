import React, { useState } from "react";
import SignupTitle1 from "../components/signup/SignupTitle1";
import styled from "styled-components";
import IconInput from "../components/signup/IconInput";
import ButtonComponent from "../components/signup/ButtonComponent";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { observer } from "mobx-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PageBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 46px;
`;

const InputForm = styled.div`
  display: flex;
  width: 340px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 14px;
`;

const LoginPage = observer(() => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    console.log(email, password);
    //사용자의 입력값으로 로그인 요청을 발생시키는 코드
    let requestOption = {
      url: "api/v1/user/signin",
      method: "POST",
      headers: {},
      data: {
        mail: email,
        password: password,
      },
    };
    axios(requestOption).then((response) => {
      console.log(response.data);
      if (response.status === 200) {
        alert("로그인 성공");
        localStorage.setItem("userId", response.data.result);

        //메인으로 이동하는 코드
        navigate("/main");
      } else {
        alert(response.data.errorMsg);
      }
    });
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    // input 에서 받아온 데이터를 useState 에 저장하는 코드
    setEmail(value);
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    // input 에서 받아온 데이터를 useState 에 저장하는 코드
    setPassword(value);
  };

  return (
    <PageBlock>
      <SignupTitle1 title={"LOGIN"} logo={"PROTEIN BODY"}></SignupTitle1>
      <InputForm>
        <IconInput
          icontype={"sms"}
          placeholder={"이메일"}
          //handleChanges 의 이벤트와 바인딩됨
          handleChange={handleEmailChange}
        ></IconInput>
        <IconInput
          icontype={"lock"}
          placeholder={"비밀번호"}
          handleChange={handlePasswordChange}
        ></IconInput>
      </InputForm>
      <br></br>
      <Text>
        <Link>비밀번호를 잊으셨나요?</Link>
      </Text>
      <ButtonContainer>
        {/* handleLoginButtonClick 이벤트 바인딩 */}
        <ButtonComponent
          text="로그인"
          handleClick={handleLoginButtonClick}
        ></ButtonComponent>
      </ButtonContainer>
      <Text>
        아직 계정이 없으십니까? <Link  to="/signup">회원가입</Link>
      </Text>
    </PageBlock>
  );
});

export default LoginPage;
