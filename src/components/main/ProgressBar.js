import axios from "axios";
import React from "react";
import styled from "styled-components";

// 스타일을 정의합니다.
const ProgressBarWrapper = styled.div`
  width: 100%;
  max-width: 368px;
  height: 36px;
  background-color: #f0f0f0; 
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 30px;
`;

// axios
//   .get(`/api/v1/meal/log/summary/today/${localStorage.getItem("userId")}`)
//   .then((response) => {
//     const todayCalories = response.data.result.calories;
//     axios
//       .get(`/api/v1/user/${localStorage.getItem("userId")}`)
//       .then((userResponse) => {
//         const recommendCalories = userResponse.data.result.recommendCalories;
//         const calculatedPercent = (todayCalories / recommendCalories) * 100;
//         setPercent(calculatedPercent);
//       });
//   });

const ProgressBarFill = styled.div`
  width: ${(props) => props.progress}%;
  max-width: 368px;
  height: 100%;
  max-width: 368px;
  background: linear-gradient(
    90deg,
    ${(props) => (props.progress >= 100 ? "#F3DADA" : "#e7eaf2")} 0%,
    ${(props) => (props.progress >= 100 ? "#f2f5ff" : "#f2f5ff")} 0.01%,
    ${(props) => (props.progress >= 100 ? "#FF1B1B" : "#1a73e9")} 105.44%
  );
  border-radius: 10px;
  transition: width 0.3s ease-in-out;
`;

// 프로그레스 바 컴포넌트를 정의합니다.
const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarFill progress={progress} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
