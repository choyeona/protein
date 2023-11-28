import React from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-left: 14px;
`;

const CommentImage = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #ccc; /* 사용자 이미지의 배경색 */
  margin-right: 8px;
`;

const CommentText = styled.div``;

const CommentUsername = styled.span`
  font-weight: bold;
  margin-right: 4px;
  font-size: 14px;
`;

const CommentContent = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Comment = ({ commentUsername, commentUserImageUrl, commentText }) => {
  return (
    <CommentContainer>
      <CommentImage />
      <CommentText>
        <CommentUsername>{commentUsername}</CommentUsername>
        <CommentContent>{commentText}</CommentContent>
      </CommentText>
    </CommentContainer>
  );
};

export default Comment;
