import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ProfileDetailPage01 from "./pages/ProfileDetailPage01";
import ProfileDetailPage02 from "./pages/ProfileDetailPage02";
import Nav from "./components/common/Nav";
import DietPage from "./pages/DietPage";
import CommunityPage from "./pages/CommunityPage";
import ModeSelection from "./pages/ModeSelection";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import DietDetailPage from "./pages/DietDetailPage";
import ProfilePage from "./pages/ProfilePage";
import MainPage from "./pages/MainPage";
import SearchPopup from "./components/main/SearchPopup";
import PostCreatePage from "./pages/PostCreatePage";
import SamplePage from "./pages/SamplePage";
import SignUpSummaryPage from "./pages/SignUpSummaryPage";
import LineComponent from "./components/main/LineComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  // 배포시 주석해제
  axios.defaults.baseURL = "https://bhsworld.store/";
  axios.defaults.headers = {
    "Content-Type": `application/json`,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage></IndexPage>}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/diet" element={<DietPage />}></Route>
        <Route path="/diet/detail" element={<DietDetailPage />}></Route>
        <Route path="/postCreate" element={<PostCreatePage />}></Route>
        <Route path="/community" element={<CommunityPage />}></Route>
        <Route
          path="/signup"
          element={<SignUpSummaryPage></SignUpSummaryPage>}
        ></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route path="/news" element={<SamplePage />}></Route>
      </Routes>
      <Nav></Nav>
    </BrowserRouter>
  );
}

export default App;
