import React from "react";
import styled from "styled-components";

const Button = styled.div`
  width: 65px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 1px solid #c8ddfa;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 112px;
`;

const Search = styled.span`
  font-size: 14px;
  font-weight: 700;
  font-size: 10px;
  line-height: 10px;
  color: #859ef5;
`;

const SearchButton = ({ handleClick }) => {
  return (
    <div>
      <Button onClick={handleClick}>
        <Search>검색</Search>
      </Button>
    </div>
  );
};

export default SearchButton;
