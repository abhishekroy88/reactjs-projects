import React from "react";

// Custom component imports
import SiteLink from "./SiteLink";

export default ({ breweryData }) => {
  return (
    <div className="search-results-section">
      {breweryData.map((brewery) => {
        return (
          <div key={brewery.id} className="search-result-card">
            <div className="front">
              <h4>{brewery.name}</h4>
            </div>
            <div className="back">
              <address>
                <p>
                  {brewery.street ? brewery.street + "," : null}
                  <br />
                  {brewery.city}, {brewery.state}
                </p>
              </address>

              {brewery.website_url && brewery.website_url.length > 0 ? (
                <SiteLink url={brewery.website_url} text="Visit website" />
              ) : (
                <p style={{ fontStyle: "italic" }}>Site unavailable.</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
