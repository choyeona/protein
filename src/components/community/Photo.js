// src/components/Photo.js
import React from "react";
import styled from "styled-components";

const PhotoContainer = styled.div`
  width: 400px; // 이미지의 컨테이너 폭을 400px로 설정
  height: 400px; // 이미지의 컨테이너 높이를 400px로 설정
  margin: 0 auto;
  overflow: hidden; // 이미지가 컨테이너를 넘어가면 숨기기
  img {
    width: 100%; // 이미지 폭을 컨테이너 크기에 맞게 조절
    height: 100%; // 이미지 높이를 컨테이너 크기에 맞게 조절
    object-fit: cover; // 이미지가 컨테이너 크기에 맞게 꽉 차게 표시
  }
`;

const Photo = ({ imageUrl }) => {
  return (
    <PhotoContainer>
      <img src={imageUrl} alt="Instagram Post" />
    </PhotoContainer>
  );
};

export default Photo;
