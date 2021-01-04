import React from "react";

// Custom components imports
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import SectionHeading from "./SectionHeading";

export default () => {
  return (
    <div className="home-hero">
      <Navbar />
      <Carousel />
      <SectionHeading
        sectionTitle="Find the Gift of the Gods."
        isVisible={true}
      />
    </div>
  );
};
