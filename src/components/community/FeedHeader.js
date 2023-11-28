import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  padding-top: 14px;
  padding-left: 14px;
  padding-right: 14px;
`;

const UserImage = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
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

const FeedHeader = ({ username, userImage, postDate }) => {
  return (
    <HeaderContainer>
      <ProfileContainer>
        <UserImage src={userImage} />
        <div>
          <Username>{username}</Username>
        </div>
      </ProfileContainer>
      <PostDate>{postDate}</PostDate>
    </HeaderContainer>
  );
};

export default FeedHeader;
