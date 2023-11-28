import React, { useEffect, useState } from "react";
import AppHeader from "../components/common/AppHeader";
import { TimePicker } from "react-ios-time-picker";
import SearchInput from "../components/dietDetail/SearchInput";
import FavoFoodList from "../components/dietDetail/FavoFoodList";
import styled from "styled-components";
import TimePickerCustom from "../components/dietDetail/ScrollableTimePicker";
import ScrollableTimePicker from "../components/dietDetail/ScrollableTimePicker";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import moment from "moment";

const Container = styled.div`
  margin-top: 20px;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 20px;
`;

const Dropdown = styled.select`
  appearance: none;
  background-color: #fff;
  border: none;
  cursor: pointer;
  padding-right: 24px;
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"%3E%3Cpath fill="%23CBDDFF" d="M2 3L0 0h4z"/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 2% top 80%;
  background-size: 0.65em auto;
  font-size: 1em;
  outline: none;
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
const SaveButton = styled.button`
  height: 70px;
  width: 368px;
  padding: 12px;
  background-color: #007bff;
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  position: fixed; // 이 부분 추가
  top: calc(50% + 270px); // 버튼을 현재 위치에서 고정
  left: 50%;
  transform: translateX(-50%); // 화면 중앙으로 정렬

  &:hover {
    background-color: #0056b3;
  }
`;

const DietDetailPage = () => {
  const [selectedTime, setSelectedTime] = useState();
  const [selectedType, setSelectedType] = useState("BREAKFAST");
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]); // 검색 결과를 저장하기 위한 state
  const [selectedFoods, setSelectedFoods] = useState([]); // 선택된 음식들을 저장하기 위한 state
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  const { selectedDate } = location.state || {};

  useEffect(() => {
    console.log(selectedDate);
    if (selectedDate === undefined) {
      alert("날짜가 지정되지 않아 이전페이지로 돌아갑니다.");
      navigate("/diet");
    }
  }, []);

  const [searchedFoods, setSearchedFoods] = useState([]);

  const handleSearchedFoods = (food) => {
    console.log(searchedFoods);
    setSearchedFoods([food]);
  };

  const handleSaveFoods = () => {
    const dataToSave = {
      selectedMeal: selectedTime,
      foods: searchedFoods,
    };
    console.log("심장이 아퍼:", selectedTime);
    const sendDateAdded = moment(selectedTime).add(9, "hour");
    searchedFoods.map((data) => {
      const sendData = {
        userId: localStorage.getItem("userId"),
        productId: data.productId,
        mealType: selectedType,
        mealDateTime: sendDateAdded,
      };
      const requestObj = {
        url: "/api/v1/meal/log",
        method: "POST",
        data: sendData,
      };
      axios(requestObj).then((response) => {
        console.log(response);
        if (response.data.success === true || response.status == 200) {
          setIsOpen(true);
        }
      });
    });
    console.log(searchedFoods);
  };

  const popupNavi = () => {
    navigate("/diet");
  };

  const handleDateChange = (changeTime) => {
    console.log(selectedDate);
    console.log(changeTime);
    let hour = changeTime.hour;
    let min = changeTime.min;
    let decator = changeTime.AM;
    if (decator === "PM") {
      hour = hour + 12;
    }
    const dateWithTime = `${selectedDate} ${hour}:${min}:00`;
    console.log(dateWithTime);
    const setDate = new Date(dateWithTime);
    console.log("셑데이트 :", setDate);
    setSelectedTime(setDate);
    // selectedDate(new Date(dateWithTime));
  };

  return (
    <div>
      <AppHeader
        backButton={true}
        title={
          <Dropdown
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="BREAKFAST">아침</option>
            <option value="LUNCH">점심</option>
            <option value="DINNER">저녁</option>
          </Dropdown>
        }
      ></AppHeader>
      <Container>
        <ScrollableTimePicker
          handleDateChange={handleDateChange}
        ></ScrollableTimePicker>
      </Container>
      <SearchInput onProductFound={handleSearchedFoods}></SearchInput>
      <FavoFoodList foods={searchedFoods}></FavoFoodList>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
          popupNavi();
        }}
        style={customStyles}
        contentLabel="저장"
      >
        <b>저장완료</b>
        <SaveButton onClick={popupNavi}>저장</SaveButton>
      </Modal>

      <SaveButton onClick={handleSaveFoods}>저장</SaveButton>
    </div>
  );
};

export default DietDetailPage;
