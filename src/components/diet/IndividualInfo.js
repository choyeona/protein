import React from "react";
import styled from "styled-components";

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Description = styled.div`
  color: #ada4a5;
  font-size: 12px;
  font-weight: bold;
`;

const CaloriesContainer = styled.div`
  display: flex;
`;

const FoodListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 40px 0px 40px;
  margin: 10px 0 10px 0;
`;

const FoodName = styled.div`
  font-size: 14px;
`;

const FoodEatTime = styled.div`
  color: #7b6f72;
  font-size: 12px;
`;

const IndividualInfo = ({ title, meals, calories, foodList }) => {
  // 디자인 확인용 임시 데이터
  return (
    <WholeContainer>
      <Container>
        <Title>{title}</Title>
        <CaloriesContainer>
          <Description>{meals} meals</Description>
          <Description> | </Description>
          <Description>{calories} calories</Description>
        </CaloriesContainer>
      </Container>
      {foodList.map((food) => {
        return (
          <IndividualDetailInfo
            foodName={food.productName}
            foodEatTime={food.calories}
          ></IndividualDetailInfo>
        );
      })}
    </WholeContainer>
  );
};

const IndividualDetailInfo = ({ foodName, foodEatTime, ids }) => {
  return (
    <FoodListContainer>
      <FoodName>{foodName}</FoodName>
      <FoodEatTime>{foodEatTime}</FoodEatTime>
    </FoodListContainer>
  );
};

export default IndividualInfo;
