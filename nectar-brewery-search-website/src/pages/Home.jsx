import React from "react";

// Custom components imports
import HomeHero from "../components/HomeHero";
import HomeSection from "../components/HomeSection";
import YtVideo from "../components/YtVideo";
import ContactForm from "../components/ContactForm";

export default () => {
  return (
    <div className="home-page">
      <HomeHero />
      <hr />
      <HomeSection />
      <hr />
      <YtVideo source="https://www.youtube.com/embed/VqNxYtM_Cf8" />
      <hr />
      <ContactForm />
    </div>
  );
};
