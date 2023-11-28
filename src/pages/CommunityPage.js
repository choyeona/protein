import React from "react";
import AppHeader from "../components/common/AppHeader";
import CommunityContainer from "../components/community/CommunityContainer";
import { useNavigate } from "react-router-dom"; // useHistory를 import합니다.

const CommunityPage = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const handleGoBack = () => {
    navigate(-1); // Use navigate to go back
  };

  return (
    <div>
      <AppHeader title={"PROTEIN BODY"}>
        <button onClick={handleGoBack}>뒤로가기</button>
      </AppHeader>
      <CommunityContainer />
    </div>
  );
};

export default CommunityPage;
