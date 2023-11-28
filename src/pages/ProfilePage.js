import React, { useState, useEffect } from "react";
import AppHeader from "../components/common/AppHeader";
import UserProfile from "../components/profile/UserProfile";
import SettingsIcons from "../components/profile/SettingsIcons";
import Dietinfor from "../components/profile/Dietinfor";
import OtherElement from "../components/profile/OtherElement";
import axios from "axios";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    success: true,
    result: {
      name: "",
      height: 0,
      weight: 0,
      goalWeight: 0,
      genderType: "",
      birthDate: "",
      mode: "",
      recommendCalories: 0,
      recommendTotalCarbohydrate: 0,
      recommendProtein: 0,
      recommendTotalFat: 0,
    },
    errorMsg: "string",
  });

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    axios
      .get(`/api/v1/user/${userId}`)
      .then((response) => {
        if (response.status === 200) {
          setProfileData(response.data);
          console.log(response.data);
        } else {
          console.error(
            "프로필 데이터를 가져오는데 실패했습니다:",
            response.data.errorMsg
          );
        }
      })
      .catch((error) => {
        console.error("프로필 데이터 요청 중 에러 발생:", error);
      });
  }, []);

  return (
    <div style={{ marginLeft: "22px", marginRight: "22px" }}>
      <AppHeader title={"profile"} />
      {/* UserProfile 컴포넌트에 profileData를 props로 전달합니다. */}
      <UserProfile profileData={profileData} />
      <SettingsIcons icontype={"alarm"} />

      <div style={{ marginTop: "20px" }}>
        <Dietinfor profileData={profileData} />
      </div>

      <div style={{ marginTop: "20px" }}>
        <OtherElement />
      </div>
    </div>
  );
};

export default ProfilePage;
