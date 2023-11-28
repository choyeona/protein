import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RecommendedMeal from "../data/RecommendedMeal.json";
import data from "../data/RecommendedMeal.json";

const BoxIngredientWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 179px;
  height: 60px;
  border-radius: 4px;
  border: 1px solid #a3b6f7;
  margin-right: 7px;
  padding: 5px;
`;

const Box2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const RecomMain = styled.span`
  color: #345a99;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

const Recomvalue = styled.span`
  color: #464646;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

const RecomImage = styled.img`
  width: 40px;
  margin-right: 5px;
`;
const BoxModeRecom = () => {
  const [selectedMode, setSelectedMode] = useState(null);
  const [drawData, setDrawData] = useState([]);

  const getStaduimInfoList = () => {
    axios.get("RecommendedMeal").then((response) => {
      console.log(response);
    });
  };

  function getTwoObjectsByMode(data, mode) {
    const modeArray = data.filter((item) => {
      console.log(item);
      return item.mode === mode;
    });
    console.log(modeArray);
    setDrawData(modeArray.slice(0, 2));
  }

  useEffect(() => {
    // 서버에서 사용자 데이터를 가져옵니다.
    axios
      .get(`/api/v1/user/${localStorage.getItem("userId")}`)
      .then((userResponse) => {
        const userMode = userResponse.data.result.mode;
        setSelectedMode(userMode);
        console.log("사용자 모드는: ", userMode);
        getTwoObjectsByMode(data.data, userMode);
      });
  }, []);

  return (
    <BoxIngredientWrap>
      {drawData.map((item) => {
        return (
          <Box>
            <RecomImage src={item.img}></RecomImage>
            <Box2>
              <RecomMain>{item.food}</RecomMain>
              <Recomvalue>{item.value}</Recomvalue>
            </Box2>
          </Box>
        );
      })}
    </BoxIngredientWrap>
  );
};

export default BoxModeRecom;
