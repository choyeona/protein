import React, { useState } from "react";
import styled from "styled-components";
import FeedHeader from "./FeedHeader";
import { Camera } from "iconic-react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
  position: relative;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputStyle = styled.textarea`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  padding: 5px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  resize: none;
`;

const ImageBox = styled.div`
  width: 70px;
  height: 70px;
  display: inline-block;
  margin: 5px;
  background-color: #f2f2f2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBoxes = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const UploadButton = styled.button`
  background-color: #1da1f2;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
`;

const ModeSelectButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  margin-right: 10px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const Dropdown = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const PostCreate = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [uploadedImages, setUploadedImages] = useState([
    null,
    null,
    null,
    null,
  ]);
  const [postContent, setPostContent] = useState("");
  const [selectedMode, setSelectedMode] = useState("일반모드");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleImageChange = (index) => (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...uploadedImages];
        newImages[index] = reader.result;
        setUploadedImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleUploadClick = () => {
    const newPost = {
      category: selectedMode,
      caption: postContent,
      imageUrl: uploadedImages[0],
      userImageUrl: "/pro.jpg",
      comments: [],
      postDate: new Date().toLocaleString(),
    };
    onSubmit(newPost);
  };

  const handleModeSelect = () => {
    setShowDropdown(!showDropdown);
  };

  const selectMode = (mode) => {
    setSelectedMode(mode);
    setShowDropdown(false);
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <ModeSelectButton onClick={handleModeSelect}>
          {selectedMode}
        </ModeSelectButton>
        {showDropdown && (
          <Dropdown show={showDropdown}>
            <DropdownItem onClick={() => selectMode("일반모드")}>
              일반모드
            </DropdownItem>
            <DropdownItem onClick={() => selectMode("다이어트모드")}>
              다이어트모드
            </DropdownItem>
            <DropdownItem onClick={() => selectMode("근력모드")}>
              근력모드
            </DropdownItem>
          </Dropdown>
        )}
        <UploadButton onClick={handleUploadClick}>올리기</UploadButton>
      </div>
      <FeedHeader userImageUrl="/pro.jpg" />
      <InputContainer>
        <InputStyle
          placeholder="어떤 글을 남기시고 싶은가요?"
          value={postContent}
          onChange={handleContentChange}
        />
        <ImageBoxes>
          {uploadedImages.map((image, index) => (
            <ImageBox as="label" key={index} htmlFor={`imageUpload${index}`}>
              {image ? (
                <img
                  src={image}
                  alt="uploaded"
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                <Camera style={index === 0 ? {} : { display: "none" }} />
              )}
              <HiddenFileInput
                type="file"
                id={`imageUpload${index}`}
                onChange={handleImageChange(index)}
                accept="image/*"
              />
            </ImageBox>
          ))}
        </ImageBoxes>
      </InputContainer>
    </Container>
  );
};

export default PostCreate;
