import React from "react";

// Custom component imports
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ContactForm from "../components/ContactForm";

// Data file import
import data from "../data";

export default () => {
  return (
    <div className="about-page">
      <HeroSection
        sectionTitle="Where it all begins."
        imgSrc="https://images.unsplash.com/photo-1499946253127-725623d773d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"
        altText="A brewing machine"
      />
      <AboutSection aboutData={data.about} />
      <ContactForm />
    </div>
  );
};
