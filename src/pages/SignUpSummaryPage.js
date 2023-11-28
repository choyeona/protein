import React, { useState } from "react";
import ProfileDetailPage01 from "./ProfileDetailPage01";
import ProfileDetailPage02 from "./ProfileDetailPage02";
import ModeSelection from "./ModeSelection";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpSummaryPage = () => {
  const [step, setStep] = useState(1);
  const [signupData, setSignUpData] = useState({
    name: "입력전",
    mail: "입력전",
    password: "입력전",
    genderType: "MALE",
    birthDate: "2023-10-15",
    height: 0,
    weight: 0,
    goalWeight: 0,
    modeType: "NORMAL",
  });

  const navigate = useNavigate();

  const nextStep = () => {
    let nextStep = step;
    nextStep = nextStep + 1;
    setStep(nextStep);
  };

  const backStep = () => {
    let nextStep = step;
    nextStep = nextStep - 1;
    if (nextStep < 1) {
      nextStep = 1;
    }
    setStep(nextStep);
  };

  const signup = () => {
    axios
      .post("api/v1/user/signup", signupData)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("username", signupData.name);

          alert("회원가입 성공");
          navigate("/login");
        } else {
          alert(response.data.errorMsg);
        }
      })
      .catch((error) => {
        console.error("회원가입 실패:", error);
      });
  };

  const changeSignupData = (e) => {
    setSignUpData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {step === 1 && (
        <ProfileDetailPage01
          nextStep={nextStep}
          handleChange={changeSignupData}
        />
      )}
      {step === 2 && (
        <ProfileDetailPage02
          nextStep={nextStep}
          handleChange={changeSignupData}
        />
      )}
      {step === 3 && (
        <ModeSelection signup={signup} handleChange={changeSignupData} />
      )}
    </div>
  );
};

export default SignUpSummaryPage;
