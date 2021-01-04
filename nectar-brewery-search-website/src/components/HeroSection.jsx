import React from "react";

// Custom component imports
import Navbar from "../components/Navbar";
import SectionHeading from "../components/SectionHeading";
import HeroImage from "../components/HeroImage";

export default (props) => {
  return (
    <div className="hero-section">
      <Navbar />
      <SectionHeading sectionTitle={props.sectionTitle} />
      <HeroImage imgSrc={props.imgSrc} altText={props.altText} />
    </div>
  );
};
