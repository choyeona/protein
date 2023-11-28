import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WeekElement from "./WeekElement";
import moment from "moment";

const WeekSelectTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const LeftArrow = styled.div`
  margin-right: 30px;
  cursor: pointer;
`;

const RightArrow = styled.div`
  margin-left: 30px;
  cursor: pointer;
`;

const WeekSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  padding: 0px 22px 0px 22px;
`;

const WeekSelector = ({ handleClick, selectedDate, weekRange }) => {
  const [currentWeek, setCurrentWeek] = useState(moment());
  const [weeks, setWeeks] = useState([]);
  useEffect(() => {
    // generateWeekDays(currentWeek);
  }, []);

  useEffect(() => {
    console.log("주:", weeks);
  }, [weeks]);

  useEffect(() => {
    // generateWeekDays(currentWeek);
  }, [currentWeek]);

  useEffect(() => {
    setWeeks(generateWeekDays(moment(selectedDate)));
  }, [selectedDate]);

  const generateWeekDays = (startOfWeek) => {
    setWeeks([]);
    return Array.from({ length: 7 }).map((_, index) =>
      moment(startOfWeek).startOf("isoWeek").add(index, "days")
    );
  };

  const changeWeek = (amount) => {
    setCurrentWeek(moment(currentWeek).add(amount, "weeks"));
  };
  function isValidDate(date) {
    return date instanceof moment && date.isValid();
  }

  return (
    <div>
      <WeekSelectTitle>
        <LeftArrow onClick={() => changeWeek(-1)}>{"<"}</LeftArrow>
        {currentWeek.format("MMMM YYYY")}
        <RightArrow onClick={() => changeWeek(1)}>{">"}</RightArrow>
      </WeekSelectTitle>
      <WeekSelectorContainer>
        {weeks.map((date) => {
          if (!isValidDate(date)) {
            return null; // 유효하지 않은 날짜는 렌더링하지 않음
          }

          return (
            <WeekElement
              key={date.format("DD-MM-YYYY")}
              dayName={date.format("ddd")}
              day={date.format("DD")}
              onClick={() => handleClick(date.toDate())}
            />
          );
        })}
      </WeekSelectorContainer>
    </div>
  );
};

export default WeekSelector;
