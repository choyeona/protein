import React from "react";
import styled from "styled-components";
import { Send2, Heart, Messages1 } from "iconic-react"; // iconic-react에서 제공하는 화살표, 하트, 댓글 아이콘을 사용합니다.

const FeedControllerBlock = styled.div`
  margin: 10px;
`;
const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 18px;
`;
const FeedController = () => {
  return (
    <FeedControllerBlock>
      <IconButton>
        <Heart size={20} />
      </IconButton>
      <IconButton>
        <Messages1 size={20} />
      </IconButton>
      <IconButton>
        <Send2 size={20} />
      </IconButton>
    </FeedControllerBlock>
  );
};

export default FeedController;
