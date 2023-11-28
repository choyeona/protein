import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Messages3, Calendar2, Home, Profile } from "iconic-react";
import styled from "styled-components";

const Navigation = styled.div`
  nav {
    position: fixed;
    background-color: #fff;
    bottom: 0;
    width: 100%;
    height: 60px;
    display: flex;
    border: solid 0.5px #fdfdfd;
  }

  nav > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const IconHome = styled(Home)`
  margin-right: 5px;
  margin-left: 10px;
  color: ${(props) => (props.active ? "#1A73E9" : "black")};
`;

const IconDiscover = styled(Messages3)`
  margin-right: 5px;
  margin-left: 10px;
  color: ${(props) => (props.active ? "#1A73E9" : "black")};
`;

const IconCalendar = styled(Calendar2)`
  margin-right: 5px;
  margin-left: 10px;
  color: ${(props) => (props.active ? "#1A73E9" : "black")};
`;

const IconProfile = styled(Profile)`
  margin-right: 5px;
  margin-left: 10px;
  color: ${(props) => (props.active ? "#1A73E9" : "black")};
`;

const Nav = () => {
  const [activeButton, setActiveButton] = useState("main");

  return (
    <Navigation>
      <nav>
        <div>
          <NavLink
            to="/main"
            onClick={() => setActiveButton("main")}
            className={activeButton === "main" ? "active" : ""}
          >
            <IconHome active={activeButton === "main"}></IconHome>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/diet"
            onClick={() => setActiveButton("diet")}
            className={activeButton === "diet" ? "active" : ""}
          >
            <IconCalendar active={activeButton === "diet"}></IconCalendar>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/community"
            onClick={() => setActiveButton("community")}
            className={activeButton === "community" ? "active" : ""}
          >
            <IconDiscover active={activeButton === "community"}></IconDiscover>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/profile"
            onClick={() => setActiveButton("profile")}
            className={activeButton === "profile" ? "active" : ""}
          >
            <IconProfile active={activeButton === "profile"}></IconProfile>
          </NavLink>
        </div>
      </nav>
    </Navigation>
  );
};

export default Nav;
