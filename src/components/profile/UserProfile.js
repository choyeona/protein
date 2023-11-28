import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
`;

const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url("/2104696.jpg");
  background-size: cover;
  background-position: center;
  margin-right: 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const UserName = styled.span`
  font-weight: bold;
`;

const SupportMessage = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: #555;
`;

const UserProfile = ({ profileData }) => {
  const user = {
    name: "조연아",
    supportMessage: "항상 응원합니다!",
  };

  return (
    <ProfileContainer>
      <ProfileImage />
      <ProfileInfo>
        <UserName>{`${profileData.result.name}님 항상 응원합니다!`}</UserName>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default UserProfile;
