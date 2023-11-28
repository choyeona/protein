import React from "react";
import styled from "styled-components";

const WeekElementRect = styled.div`
  padding: 10px 10px 10px 10px;
  width: 14.28%;
  height: 57px;
  background: #f2f5ff;
  text-align: center;
  margin: 2px;
  cursor: pointer;
`;

const WeekElement = ({ dayName, day, onClick }) => {
  return (
    <WeekElementRect onClick={onClick}>
      {dayName}
      <br />
      {day}
    </WeekElementRect>
  );
};

export default WeekElement;
