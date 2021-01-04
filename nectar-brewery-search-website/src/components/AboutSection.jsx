import React from "react";

// Custom component imports
import AboutContent from "./AboutContent";

export default (props) => {
  return (
    <main className="about-section">
      {props.aboutData.map((item) => {
        return (
          <AboutContent
            key={item.id}
            title={item.title}
            content={item.content}
          />
        );
      })}
    </main>
  );
};
