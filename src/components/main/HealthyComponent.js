import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin-top: 24px;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.span`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  margin-right: 5px;
`;

const Text = styled.span`
  color: #000;
  font-family: Palanquin;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const Box = styled.img`
  width: 118px;
  margin-right: 7px;
  margin-top: 10px;
`;

const HealthyComponent = ({ mealLog }) => {
  let nowTime = new Date();
  const [selectedDate, setSelectedDate] = useState("");
  const [logData, setLogData] = useState([]);

  const [weekRange, setWeekRange] = useState({ start: "", end: "" });
  const mealTimeRanges = [
    { type: "BREAKFAST", start: 6, end: 10 },
    { type: "LUNCH", start: 12, end: 15 },
    { type: "DINNER", start: 18, end: 21 },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    console.log("date : ", moment(new Date()).format("YYYY-MM-DD"));
    setSelectedDate(moment(new Date()).format("YYYY-MM-DD"));
    getTodayMeal(new Date());
  }, []);

  const isInMealTime = (mealType) => {
    const currentTime = new Date();
    console.log(mealType);
    switch (mealType) {
      case "BREAKFAST":
        break;
      case "LUNCH":
        break;
      case "DINNER":
        break;
    }
  };

  const getTodayMeal = (date) => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("User ID not found!");
      return;
    }

    const mealDateString = moment(date).format("YYYY-MM-DD");
    setSelectedDate(mealDateString);

    const startOfWeek = moment(date).startOf("week").format("YYYY-MM-DD");
    const endOfWeek = moment(date).endOf("week").format("YYYY-MM-DD");
    console.log(weekRange);
    setWeekRange({ start: startOfWeek, end: endOfWeek });

    const requestOption = {
      url: `/api/v1/meal/log/${userId}/${mealDateString}`,
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    };

    axios(requestOption).then(({ data }) => {
      console.log("test: ", data);
      setLogData(data.result);
    });
  };

  return (
    <Container>
      <Line>
        <Title>건강한 식습관</Title>
        <Text>check!</Text>
      </Line>
      <Line>
        <ImageBox type={"BREAKFAST"} state={"C"}></ImageBox>
        <ImageBox type={"LUNCH"} state={"C"}></ImageBox>
        <ImageBox type={"DINNER"} state={"C"}></ImageBox>
      </Line>
      <Line></Line>
    </Container>
  );
};

const ImageBox = ({ type, state }) => {
  switch (type) {
    case "BREAKFAST":
      if (state === "C") {
        return <Box src="/BC.png" />;
      } else if (state === "N") {
        return <Box src="/BX.png" />;
      } else if (state === "Y") {
        return <Box src="/BB.png" />;
      }
    case "LUNCH":
      if (state === "C") {
        return <Box src="/lC.png" />;
      } else if (state === "N") {
        return <Box src="/lX.png" />;
      } else if (state === "Y") {
        return <Box src="/lB.png" />;
      }

    case "DINNER":
      if (state === "C") {
        return <Box src="/DC.png" />;
      } else if (state === "N") {
        return <Box src="/DX.png" />;
      } else if (state === "Y") {
        return <Box src="/DB.png" />;
      }
    default:
      return null;
  }
};

export default HealthyComponent;
