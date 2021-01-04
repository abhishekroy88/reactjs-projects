import React from "react";

// Custom component imports
import HomeSubSection from "./HomeSubSection";

// Data import
import { usaStates, breweryTypes } from "../data";

const usaStatesData = [...usaStates, ...usaStates, ...usaStates];
const breweryTypesData = [...breweryTypes, ...breweryTypes, ...breweryTypes];

export default () => {
  return (
    <main className="home-section">
      <HomeSubSection
        heading="Breweries by Capital City"
        data={usaStatesData}
        criteria="by_city"
      />
      <HomeSubSection
        heading="Breweries by State"
        data={usaStatesData}
        criteria="by_state"
      />
      <HomeSubSection
        heading="Breweries by Type"
        data={breweryTypesData}
        criteria="by_type"
      />
    </main>
  );
};
