import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const SendBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  border: solid 1px;
  outline: none;
  width: 138px;
  padding: 5px;
  background: white;
`;

const SearchComponent = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const sendData = () => {
    let requestOption = {
      url: " https://newsapi.org/v2/everything?q=bitcoin&apiKey=a14aa513dc06425f8dda8bddfeaee300",
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    };
    axios(requestOption).then((response) => {
      setResult(response.data);
    });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    const { value } = e.target;
    setInput(value);
  };

  const handleClick = () => {
    sendData();
  };

  return (
    <div>
      <Input type="text" onChange={handleChange}></Input>
      <button onClick={handleClick}>전송</button>
    </div>
  );
};

export default SearchComponent;