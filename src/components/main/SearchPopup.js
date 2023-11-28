import React from "react";
import SearchComponent from "./SearchComponent";

const SearchPopup = ({ setResult, onClose }) => {
  return (
    <div>
      <SearchComponent
        setResult={setResult}
        onClose={onClose}
      ></SearchComponent>
    </div>
  );
};
export default SearchPopup;
