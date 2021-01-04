import React from "react";

// Custom component imports
import BreweryDataCard from "./BreweryDataCard";

export default ({ breweryDataObj }) => {
  return (
    <div className="brewery-data-section">
      <BreweryDataCard
        breweryDataField={breweryDataObj.brewery_type.toUpperCase()}
        faClasses="fas fa-beer"
      />
      <BreweryDataCard
        breweryDataField={
          (breweryDataObj.street ? breweryDataObj.street + ", " : null) +
          breweryDataObj.city +
          ", " +
          breweryDataObj.state
        }
        faClasses="fas fa-map-marker-alt"
      />
      <BreweryDataCard
        breweryDataField={breweryDataObj.phone}
        faClasses="fas fa-phone-alt"
      />
    </div>
  );
};
