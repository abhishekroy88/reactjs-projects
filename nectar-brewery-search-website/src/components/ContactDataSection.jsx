import React from "react";

// Data import
import data from "../data";
const {
  phone,
  email,
  address: { street, city, state, pincode, country }
} = data.contact;

export default () => {
  return (
    <div className="contact-data-section">
      <div className="contact-card">
        <p>
          <i class="fas fa-phone-alt logo"></i>
          {phone}
        </p>
        <p>
          <i class="fas fa-envelope logo"></i>
          {email}
        </p>
        <address>
          <p>
            <i class="fas fa-map-marker-alt logo"></i>
            {street},
          </p>
          <p>
            {city}, {state},
          </p>
          <p>
            {country} - {pincode}
          </p>
        </address>
      </div>
    </div>
  );
};
