import React, { useState } from "react";
import styled from "styled-components";

const CaloriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 22px;
`;

const RecomCalories = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #22215b;
  font-family: ABeeZee;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #22215b;
  font-family: ABeeZee;
  margin: 0px 3px 0px 3px;
`;

const EatenCalories = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #22215b;
`;

const RecommendedCalories = ({ eaten, recom }) => {
  return (
    <CaloriesContainer>
      <EatenCalories>{eaten}</EatenCalories>
      <Text>/</Text>
      <RecomCalories>{recom}</RecomCalories>
      <Text>kcal</Text>
    </CaloriesContainer>
  );
};

export default RecommendedCalories;
