import React from "react";

// Custom component imports
import Slideshow from "./Slideshow";

export default ({ heading, data, criteria }) => {
  return (
    <section className="home-subsection">
      <h3>{heading}</h3>
      <Slideshow data={data} criteria={criteria} />
    </section>
  );
};
