import React, { useState } from "react";

export default ({ filterBy, captureFilterSearchVal }) => {
  const [inputVal, setInputval] = useState("");

  return (
    <div className="filter-search-box">
      <input
        type="text"
        placeholder={
          filterBy === "by_city" ? "Filter by city" : "Filter by name"
        }
        value={inputVal}
        onChange={(e) => {
          setInputval(e.target.value);
        }}
      />
      <button
        onClick={() => {
          captureFilterSearchVal(inputVal);
        }}
      >
        Search
      </button>
    </div>
  );
};
