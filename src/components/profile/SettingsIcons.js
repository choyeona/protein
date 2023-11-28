import React, { useState } from "react";
import styled from "styled-components";
import { Alarm, DirectInbox, Heart } from "iconic-react";

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
const CircleIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  cursor: pointer;
`;
const IconLabel = styled.div`
  font-size: 12px;
  text-align: center;
`;

const SettingsIcons = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icontype) => {
    setSelectedIcon(icontype);
  };

  return (
    <IconsContainer>
      <div>
        <CircleIcon
          selected={selectedIcon === "alarm"}
          onClick={() => handleIconClick("alarm")}
        >
          <Alarm size={20} color="#000" />
        </CircleIcon>
        <IconLabel>알람 설정</IconLabel>
      </div>
      <div>
        <CircleIcon
          selected={selectedIcon === "directInbox"}
          onClick={() => handleIconClick("directInbox")}
        >
          <DirectInbox size={20} color="#000" />
        </CircleIcon>
        <IconLabel>커뮤니티 관리</IconLabel>
      </div>
      <div>
        <CircleIcon
          selected={selectedIcon === "heart"}
          onClick={() => handleIconClick("heart")}
        >
          <Heart size={20} color="#000" />
        </CircleIcon>
        <IconLabel>팔로잉 관리</IconLabel>
      </div>
    </IconsContainer>
  );
};

export default SettingsIcons;
