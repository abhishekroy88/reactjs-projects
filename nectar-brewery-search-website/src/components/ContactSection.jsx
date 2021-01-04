import React from "react";

// Custom component imports
import ContactDataSection from "./ContactDataSection";
import ContactForm from "./ContactForm";

export default () => {
  return (
    <main className="contact-section">
      <ContactDataSection />
      <ContactForm />
    </main>
  );
};
