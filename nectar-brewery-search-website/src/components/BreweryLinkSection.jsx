import React from "react";

//Custom component imports
import SiteLink from "./SiteLink";

export default ({ url }) => {
  return (
    <div className="brewery-link-section">
      <SiteLink url={url} text="Visit their website" />
    </div>
  );
};
