import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  padding-top: 14px;
  padding-left: 14px;
  padding-right: 14px;
  border-bottom: 1px solid #ccc;
  width: 100%;
`;

const UserImage = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  background-color: #ccc; /* 사용자 이미지의 배경색 */
  margin-right: 12px;
`;

const Username = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

const PostDate = styled.div`
  color: #999;
  font-size: 14px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

const CreateHeader = ({ username, userImage, postDate }) => {
  return (
    <HeaderContainer>
      <ProfileContainer>
        <UserImage />
        <div>
          <Username>{username}</Username>
        </div>
      </ProfileContainer>
      <PostDate>{postDate}</PostDate>
    </HeaderContainer>
  );
};

export default CreateHeader;
