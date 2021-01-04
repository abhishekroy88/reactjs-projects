import React, { useState, useEffect } from "react";

// Custom component imports
import HeroSection from "../components/HeroSection";
import BreweryDataSection from "../components/BreweryDataSection";
import BreweryLinkSection from "../components/BreweryLinkSection";

export default ({ match }) => {
  const [breweryData, setBreweryData] = useState([]);

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries?${match.params.criteria}`)
      .then((res) => res.json())
      .then((data) => {
        setBreweryData(data);
        console.log(breweryData);
      });
  }, []);

  return (
    <div className="brewery-page">
      {breweryData.length > 0 && (
        <>
          <HeroSection
            sectionTitle={breweryData[0].name}
            imgSrc="https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            altText="Beer mug"
          />
          <BreweryDataSection breweryDataObj={breweryData[0]} />
          {breweryData[0].website_url !== "" ? (
            <BreweryLinkSection url={breweryData[0].website_url} />
          ) : (
            <p className="website-unavailable-text">Website is unavailable.</p>
          )}
        </>
      )}
    </div>
  );
};
