import React from "react";
import styled from "styled-components";

const PostContainer = styled.div`
  border: 1px solid #e0e0e0;
  margin: 16px;
  padding: 16px;
  background-color: #fff;
`;

const Username = styled.span`
  font-weight: bold;
`;

const Caption = styled.p`
  margin-top: 8px;
`;

const Post = ({ username, caption }) => {
  return (
    <PostContainer>
      <Username>{username}</Username>
      <Caption>{caption}</Caption>
    </PostContainer>
  );
};

export default Post;
