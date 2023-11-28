import React, { useState } from "react";
import Feed from "./Feed";
import PostCreate from "./PostCreate";
import moment from "moment";
import styled from "styled-components";

const WriteButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #5f89f5;
  color: white;
  font-size: 24px;
  border: none;
  position: fixed;
  bottom: 80px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

const CategoryLine = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 10px;
`;

const CategoryButton = styled.span`
  padding: 10px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  &.selected {
    font-weight: bold;
    border-bottom: 3px solid #5f89f5;
  }
`;

const CommunityContainer = () => {
  const [posts, setPosts] = useState([
    {
      category: "일반모드",
      username: "해피",
      caption: "오늘은 소고기가 너무 끌려서 단백질 위주의 식사!",
      imageUrl: "https://yoonhees2.github.io/protein_page/foodiimage.jpg",
      userImageUrl: "https://meet.google.com/avc-tgzr-nic?authuser=0/pro.jpg",
      comments: [
        {
          commentUsername: "일주어터",
          commentUserImageUrl:
            "https://yoonhees2.github.io/protein_page/pro.jpg",
          commentText: "오 ! 포만감 가득하겠네요~~~",
        },
      ],
      postDate: moment().format("LL"),
    },
    {
      category: "일반모드",
      username: "김연아",
      caption: "오늘은 초강도로 먹을려구요.",
      imageUrl: "https://yoonhees2.github.io/protein_page/foodddd.jpg",
      userImageUrl: "https://meet.google.com/avc-tgzr-nic?authuser=0/prett.jpg",
      comments: [
        {
          commentUsername: "테스트",
          commentUserImageUrl:
            "https://yoonhees2.github.io/protein_page/test.jpg",
          commentText: "테스트콘텐츠",
        },
      ],
      postDate: moment().format("LL"),
    },
    {
      category: "다이어트모드",
      username: "일주어터",
      caption: "오늘은 진짜 초절식 할 거에요!",
      imageUrl: "/diet.jpg",
      userImageUrl: "https://meet.google.com/avc-tgzr-nic?authuser=0/pro.jpg",
      comments: [
        {
          commentUsername: "비건유저",
          commentUserImageUrl:
            "https://yoonhees2.github.io/protein_page/pro.jpg",
          commentText: "오 ! 포만감 가득하겠네요~~~",
        },
      ],
      postDate: moment().format("LL"),
    },
    {
      category: "다이어트모드",
      username: "김연아",
      caption: "다이어트 중이라 샐러드만 먹어요.",
      imageUrl: "/salad.jpg",
      userImageUrl: "https://meet.google.com/avc-tgzr-nic?authuser=0/prett.jpg",
      comments: [
        {
          commentUsername: "다이어트팬",
          commentUserImageUrl:
            "https://yoonhees2.github.io/protein_page/diet.jpg",
          commentText: "저도 다이어트 중이에요! 함께해요!",
        },
      ],
      postDate: moment().format("LL"),
    },
    {
      category: "근력모드",
      username: "근력마왕",
      caption: "오늘은 소고기가 너무 끌려서 단백질 위주의 식사!",
      imageUrl: "/realll.jpg",
      userImageUrl: "https://meet.google.com/avc-tgzr-nic?authuser=0/pro.jpg",
      comments: [
        {
          commentUsername: "단백질최고",
          commentUserImageUrl:
            "https://yoonhees2.github.io/protein_page/pro.jpg",
          commentText: "오 ! 포만감 가득하겠네요~~~",
        },
      ],
      postDate: moment().format("LL"),
    },
  ]);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("일반모드");

  const handleWriteButtonClick = () => {
    setIsCreatingPost(true);
  };

  const handlePostSubmission = (newPost) => {
    setPosts([newPost, ...posts]);
    setIsCreatingPost(false);
  };

  const handleDeletePost = (indexToDelete) => {
    setPosts((prevPosts) =>
      prevPosts.filter((_, index) => index !== indexToDelete)
    );
  };

  const filteredPosts = posts.filter((post) => {
    return post.category === selectedCategory;
  });

  if (isCreatingPost) {
    return <PostCreate onSubmit={handlePostSubmission} />;
  }

  return (
    <div>
      <CategoryLine>
        <CategoryButton
          onClick={() => setSelectedCategory("일반모드")}
          className={selectedCategory === "일반모드" ? "selected" : ""}
        >
          일반모드
        </CategoryButton>
        <CategoryButton
          onClick={() => setSelectedCategory("다이어트모드")}
          className={selectedCategory === "다이어트모드" ? "selected" : ""}
        >
          다이어트모드
        </CategoryButton>
        <CategoryButton
          onClick={() => setSelectedCategory("근력모드")}
          className={selectedCategory === "근력모드" ? "selected" : ""}
        >
          근력모드
        </CategoryButton>
      </CategoryLine>

      {filteredPosts.map((post, index) => (
        <Feed
          key={index}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
          comments={post.comments}
          userImage={post.userImageUrl}
          postDate={post.postDate}
          onEdit={() => console.log("수정 버튼이 클릭되었습니다.")}
          onDelete={() => handleDeletePost(index)}
        />
      ))}
      <WriteButton onClick={handleWriteButtonClick}>+</WriteButton>
    </div>
  );
};

export default CommunityContainer;
