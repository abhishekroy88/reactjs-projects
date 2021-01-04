import React from "react";

// Custom component imports
import SearchBox from "./SearchBox";

export default (props) => {
  return (
    <div className="section-heading">
      <h1>{props.sectionTitle}</h1>
      <SearchBox isVisible={props.isVisible} />
    </div>
  );
};
