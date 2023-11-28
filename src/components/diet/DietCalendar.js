import axios from "axios";
import moment from "moment";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

const CalendarCustom = styled.div`
  padding: 0px 22px 0px 22px;
  .calender {
    border-bottom: 1px solid #f2f2f2;
    width: 100%;
  }
  .react-calendar__month-view__days {
    display: grid !important;
    position: relative;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
      height: 46px;
      border: none;
      position: relative;
      background: #fff;
    }
  }

  .all-meals-recorded {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* border: 2px solid #5f89f5; */
    background-color: #5f89f559;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    z-index: 10;
  }

  .react-calendar__month-view__weekdays {
    margin-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    border-bottom: 1px solid #f2f2f2;
  }

  // 현재 선택된 타일 스타일 지정
  .selected-date {
    background-color: #5f89f5;
    border-radius: 50%;
    color: white;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--active {
    background-color: #fff !important;
    color: black !important;
    border-radius: 50% !important;
    width: 45px !important;
    border: 2px solid #5f89f5 !important;
    height: 45px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin: auto !important;
    text-align: center !important;
    box-sizing: border-box !important;
  }
`;

const DietCalendar = ({ handleClick, selectedDate }) => {
  // 로컬 상태를 삭제하므로, setSelectedDate 관련 코드도 삭제합니다.
  const [highlightedDates, setHighlightedDates] = useState([]);
  const [month, setMonth] = useState();
  useEffect(() => {
    // 서버에서 날짜 정보를 가져오는 요청을 보내고 응답을 처리합니다.
    getMonthAllMealEated();
    console.log(selectedDate.split("-")[1]);
    setMonth(selectedDate.split("-")[1]);
  }, [selectedDate]);

  const getMonthAllMealEated = () => {
    let insideMonth;
    const userId = localStorage.getItem("userId");
    if (month === undefined) {
      let monthInside = new Date();
      insideMonth = monthInside.getMonth() + 1;
    } else {
      insideMonth = month;
    }
    const request = {
      url: `/api/v1/meal/log/summary/${userId}/month/${insideMonth}`,
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    };
    axios(request).then(({ data }) => {
      console.log(data.result.fullMealDate);
      setHighlightedDates(data.result.fullMealDate);
    });
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      // 달력의 날짜를 로컬 시간대 (예: 한국 시간대)로 변환
      const localDate = moment(date).add(9, "hours").format("YYYY-MM-DD");

      // highlightedDates 배열에 해당 날짜가 포함되어 있는지 확인
      if (highlightedDates.includes(localDate)) {
        return <div className="all-meals-recorded"></div>;
      }
    }
    return null;
  };

  const handleChange = (date) => {
    console.log(date);
    handleClick(date); // date를 바로 handleClick 함수로 전달합니다.
  };

  return (
    <CalendarCustom>
      <Calendar
        onChange={handleChange}
        value={selectedDate} // selectedDate prop을 사용합니다.
        calendarType={"US"}
        minDetail={"month"}
        formatShortWeekday={(locale, date) =>
          ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
        }
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        showNavigation={false}
        tileContent={tileContent}
      />
    </CalendarCustom>
  );
};

export default DietCalendar;
