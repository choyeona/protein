import React, { useState } from "react";
import Picker from "react-scrollable-picker";

function generateNumberArray(begin, end) {
  let array = [];
  for (let i = begin; i <= end; i++) {
    const value = (i < 10 ? "0" : "") + i;
    array.push({
      value: (i < 10 ? "0" : "") + i,
      label: (i < 10 ? "0" : "") + i,
    });
  }
  return array;
}

//Todo:
//datetype 2023-11-07 11:36:00
const ScrollableTimePicker = ({ handleDateChange }) => {
  const [object, setObject] = useState({
    valueGroups: {
      hour: "00",
      min: "00",
      AM: "AM",
    },
    optionGroups: {
      hour: generateNumberArray(0, 12),
      min: generateNumberArray(0, 59),
      AM: [
        { value: "AM", label: "AM" },
        { value: "PM", label: "PM" },
      ],
    },
  });

  const handleChange = (name, value) => {
    console.log(name, value);

    setObject((prevObject) => {
      return {
        ...prevObject,
        valueGroups: {
          ...prevObject.valueGroups,
          [name]: value,
        },
      };
    });
    handleDateChange(object.valueGroups);
  };

  const { optionGroups, valueGroups } = object;

  return (
    <div>
      <Picker
        optionGroups={optionGroups}
        valueGroups={valueGroups}
        onChange={handleChange}
      />
    </div>
  );
};

export default ScrollableTimePicker;
