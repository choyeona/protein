import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Photo from "./Photo";
import Comment from "./Comment";
import FeedHeader from "./FeedHeader";
import FeedController from "./FeedController";

const PostContainer = styled.div`
  background-color: #fff;
  position: relative;
`;

const Caption = styled.p`
  margin-top: 6px;
  font-size: 13px;
  margin-left: 10px;
  margin-bottom: 15px;
`;

const Feed = ({
  username,
  caption,
  imageUrl,
  comments,
  userImage,
  postDate,
}) => {
  return (
    <PostContainer>
      <FeedHeader
        username={username}
        userImage={userImage}
        postDate={postDate}
      />
      <Photo imageUrl={imageUrl} />
      <FeedController />
      <Caption>{caption}</Caption>
      {comments.map(
        ({ commentUsername, commentUserImageUrl, commentText }, index) => (
          <Comment
            key={index}
            commentUserImageUrl={commentUserImageUrl}
            commentUsername={commentUsername}
            commentText={commentText}
          />
        )
      )}
    </PostContainer>
  );
};

Feed.propTypes = {
  username: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  userImage: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
};

export default Feed;
