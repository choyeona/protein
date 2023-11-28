import React, { useState } from "react";
import PostCreate from "../components/community/PostCreate";
import AppHeader from "../components/common/AppHeader";

const PostCreatePage = () => {
  return (
    <div>
      <AppHeader title={"POST"}></AppHeader>
      <PostCreate></PostCreate>
    </div>
  );
};

export default PostCreatePage;
