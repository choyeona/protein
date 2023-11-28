import React, { useEffect, useState } from "react";
import AppHeader from "../components/common/AppHeader";
import DietCalendar from "../components/diet/DietCalendar";
import styled from "styled-components";
import WeekSelector from "../components/diet/WeekSelector";
import IndividualInfo from "../components/diet/IndividualInfo";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

const DietContainer = styled.div`
  padding: 0px 10px 10px 10px;
  border-bottom: 1px solid #f2f2f2;
`;
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const DietPage = () => {
  const [todayMeal, setTodayMeal] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [month, setMonth] = useState();
  const [weekRange, setWeekRange] = useState({ start: "", end: "" });
  const [isOpen, setIsOpen] = useState(true);
  const [warningMessage, setWarningMessage] = useState("");

  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    console.log("date : ", moment(new Date()).format("YYYY-MM-DD"));
    var currentDate = new Date();
    currentDate = currentDate.getMonth() + 1;
    setMonth(currentDate);
    setSelectedDate(moment(new Date()).format("YYYY-MM-DD"));
    getTodayMeal(new Date());
  }, []);

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

    axios(requestOption)
      .then((response) => {
        if (response.data && response.data.result) {
          setTodayMeal(response.data.result);
          const { BREAKFAST, LUNCH, DINNER } = response.data.result;

          // 누락된 식사를 추적하는 배열
          let missingMeals = [];

          if (BREAKFAST === undefined) {
            missingMeals.push("아침");
          }
          if (LUNCH === undefined) {
            missingMeals.push("점심");
          }
          if (DINNER === undefined) {
            missingMeals.push("저녁");
          }

          // 누락된 식사에 대한 메시지 설정
          if (missingMeals.length > 0) {
            setWarningMessage(`${missingMeals.join(", ")}을 먹지 않았습니다.`);
            setIsOpen(true);
          } else {
            setIsOpen(false);
          }
        } else {
          console.error("Unexpected response structure");
        }
      })
      .catch((error) => {
        console.error("Error fetching meal data:", error);
      });
  };

  const goToDetail = () => {
    navigate("/diet/detail", { state: { selectedDate: selectedDate } });
  };

  return (
    <div>
      <AppHeader
        title={"PROTEIN BODY"}
        backButton={false}
        type={"diet"}
        addEvent={goToDetail}
      ></AppHeader>
      <DietCalendar
        handleClick={getTodayMeal}
        selectedDate={selectedDate}
      ></DietCalendar>
      <WeekSelector
        weekRange={weekRange}
        selectedDate={selectedDate}
        handleClick={getTodayMeal}
      ></WeekSelector>
      {todayMeal.BREAKFAST && (
        <IndividualInfo
          title={"아침"}
          calories={todayMeal.BREAKFAST.calories}
          meals={todayMeal.BREAKFAST.length}
          foodList={todayMeal.BREAKFAST}
        ></IndividualInfo>
      )}
      {todayMeal.LUNCH && (
        <IndividualInfo
          title={"점심"}
          calories={todayMeal.LUNCH.calories}
          meals={todayMeal.LUNCH.length}
          foodList={todayMeal.LUNCH}
        ></IndividualInfo>
      )}
      {todayMeal.DINNER && (
        <IndividualInfo
          title={"저녁"}
          calories={todayMeal.DINNER.calories}
          meals={todayMeal.DINNER.length}
          foodList={todayMeal.DINNER}
        ></IndividualInfo>
      )}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Meal Warning"
      >
        {warningMessage}
      </Modal>
    </div>
  );
};

export default DietPage;
