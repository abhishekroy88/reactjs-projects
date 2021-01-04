import React from "react";

export default ({ breweryDataField, faClasses }) => {
  return (
    <div className="brewery-data-card">
      <div className="field-icon-box">
        <i class={faClasses}></i>
      </div>
      <div className="field-data-box">{breweryDataField}</div>
    </div>
  );
};
