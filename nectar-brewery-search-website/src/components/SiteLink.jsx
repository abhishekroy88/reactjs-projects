import React from "react";

export default ({ url, text }) => {
  return (
    <a
      href={url}
      className="site-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};
