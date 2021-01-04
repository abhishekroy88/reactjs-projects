import React from "react";

export default ({ source }) => {
  return (
    <div className="yt-video">
      <iframe
        title="Science of Beer"
        // width="560"
        // height="315"
        src={source}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <iframe
        title="Science of Wine"
        src="https://www.youtube.com/embed/PbHxphNDBlk"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
