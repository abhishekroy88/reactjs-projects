import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import {
  getIsSendingSelector,
  getShortUrlSelector,
  getErrorSelector,
  getLongUrlSelector
} from "../redux/selectors";

import { fetchShortUrlThunk } from "../redux/thunks";

const MainContent = ({
  isSending,
  shortUrl,
  longUrl,
  error,
  fetchShortUrl
}) => {
  const [urlString, setUrlString] = useState("");
  const formInputRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    if (!!urlString) {
      fetchShortUrl(urlString);
      setUrlString("");
      formInputRef.current.focus();
    }
  };

  return (
    <main className="main-content">
      <form action="" className="main-content-form">
        <input
          type="text"
          ref={formInputRef}
          name="main-content-form-input"
          id="main-content-form-input"
          className="main-content-form-input"
          autoComplete="off"
          placeholder="Long URL here..."
          value={urlString}
          onChange={(e) => setUrlString(e.target.value)}
        />
        <button
          type="submit"
          className="main-content-form-btn"
          onClick={handleClick}
          disabled={isSending}
        >
          Minify
        </button>
      </form>

      <p className="main-content-minified-url-p">
        {isSending ? (
          "Fetching..."
        ) : shortUrl ? (
          <a href={longUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        ) : error ? (
          <>
            {error}
            <br />
            If the problem persists, you could start a local server with my
            <a
              href="https://github.com/abhishekroy88/nodejs-projects/tree/master/rest-url-shortener"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Node.js server code{" "}
            </a>
            or get in touch with me for assistance.
          </>
        ) : (
          "<Minified URL here>"
        )}
      </p>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    isSending: getIsSendingSelector(state),
    shortUrl: getShortUrlSelector(state),
    longUrl: getLongUrlSelector(state),
    error: getErrorSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShortUrl: (longUrl) => dispatch(fetchShortUrlThunk(longUrl))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
