import React from "react";

// Custom component imports
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";

export default () => {
  return (
    <div className="contact-page">
      <HeroSection
        sectionTitle="Get in touch with the natural."
        imgSrc="https://images.unsplash.com/photo-1490470543201-3a33602c9f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=812&q=80"
        altText="A man touching a tree"
      />
      <ContactSection />
    </div>
  );
};
