import React, { useState } from "react";
import axios from "axios";
const SamplePage = () => {
  const searchText = "입력전";
  const [searchInput, setSearchInput] = useState("test");
  const [newList, setNewsList] = useState([]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };

  const handleClick = () => {
    const apiKey = "78bc6ddd8cdb48ceac76f5f9b9dfc4c5";
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchInput}&from=2023-09-13&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => {
        console.log(response);
        setNewsList(response.data.articles);
      });
  };
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* <b>{searchText}</b> */}
        <b>{searchInput}</b>
        <input onChange={handleChange}></input>
        <button onClick={handleClick}>전송</button>
        {newList.map((data) => {
          return (
            <>
              <img src={data.urlToImage}></img>
              <p>{data.title}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SamplePage;
