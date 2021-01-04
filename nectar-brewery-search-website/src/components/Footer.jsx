import React from "react";

export default () => {
  return (
    <div className="footer">
      <div className="socials">
        <a href="https://twitter.com/">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="alcohol-warning">
        <em>Alcohol is injurious to health. Please consume responsibly.</em>
      </p>
      <p className="copyright">&copy; 2020 - Nectar</p>
    </div>
  );
};
