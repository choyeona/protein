import React, { useState } from "react";
import styled from "styled-components";
import { Add } from "iconic-react";

const FavoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 14px;
  margin-right: 14px;
`;

const Title = styled.div`
  color: #070707;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 20px;
  word-wrap: break-word;
`;

const ItemBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ItemTitle = styled.div`
  color: #1d1617;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 21px;
  word-wrap: break-word;
`;

const ItemCalories = styled.div`
  color: #7b6f72;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 18px;
  word-wrap: break-word;
  margin-right: 10px;
`;

const PlusIcon = styled(Add)`
  color: #000;
  cursor: pointer;
`;

const FavoFoodList = ({ foods }) => {
  const [selectedFoods, setSelectedFoods] = useState([]);

  const handleFoodClick = (food) => {
    console.log(food);
    const isExist = selectedFoods.find(
      (selectedFood) => selectedFood.itemName === food.itemName
    );

    if (!isExist) {
      setSelectedFoods([...selectedFoods, food]);
    }
  };

  return (
    <FavoBlock>
      <Title>검색한 음식 결과</Title>
      {foods.map(({ itemName, calories, productId }, index) => {
        return (
          <FavoFoodItem
            key={index}
            itemName={itemName}
            calories={calories}
            productId={productId}
            onFoodClick={handleFoodClick}
          />
        );
      })}

      <Title>선택된 음식</Title>
      {selectedFoods.map(({ itemName, calories, productId }, index) => {
        return (
          <ItemBlock key={index}>
            <ItemTitle>{itemName}</ItemTitle>
            <ItemCalories>{calories}kcal</ItemCalories>
          </ItemBlock>
        );
      })}
    </FavoBlock>
  );
};

const FavoFoodItem = ({ itemName, calories, productId, onFoodClick }) => {
  return (
    <ItemBlock>
      <ItemTitle>{itemName}</ItemTitle>
      <ItemCalories>{calories}kcal</ItemCalories>
      <PlusIcon
        size={20}
        onClick={() => onFoodClick({ itemName, calories, productId })}
      />
    </ItemBlock>
  );
};

export default FavoFoodList;
