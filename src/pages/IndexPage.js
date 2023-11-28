import React, { useEffect } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

const IndexPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = localStorage.getItem("userId");
    if (isLogin === undefined || isLogin === null) {
      navigate("/login");
    } else {
      navigate("/main");
    }
  }, []);

  return <div>.</div>;
};

export default IndexPage;
