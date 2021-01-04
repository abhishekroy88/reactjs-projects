import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

export default ({ isVisible }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [query, setQuery] = useState("");
  const [breweries, setBreweries] = useState([]);
  const searchBoxRef = useRef();
  const inputRef = useRef();
  const ulistRef = useRef();
  const currentFocusedLiIndexRef = useRef(-1);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (query !== "") {
      fetch(
        `https://api.openbrewerydb.org/breweries/autocomplete?query=${query}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            setBreweries(data);
          }
        });
    } else {
      setBreweries([]);
    }
  }, [query]);

  function handleClickOutside(e) {
    if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
      setIsInputFocused(false);
    } else {
      setIsInputFocused(true);
    }
  }

  function handleKeyDown(e) {
    if (ulistRef.current) {
      if (e.key === "ArrowDown") {
        currentFocusedLiIndexRef.current += 1;

        if (
          currentFocusedLiIndexRef.current >= ulistRef.current.children.length
        ) {
          currentFocusedLiIndexRef.current = 0;
        }

        ulistRef.current.children[
          currentFocusedLiIndexRef.current
        ].children[0].focus();
      } else if (e.key === "ArrowUp") {
        currentFocusedLiIndexRef.current -= 1;

        if (currentFocusedLiIndexRef.current < 0) {
          inputRef.current.focus();
        } else {
          ulistRef.current.children[
            currentFocusedLiIndexRef.current
          ].children[0].focus();
        }
      }
    }
  }

  function captureInputVal(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      {isVisible && (
        <div className="search-box" ref={searchBoxRef}>
          <div className="search-input-wrapper">
            <span>
              <FaSearch size="1.5rem" color="#6e6d6d" />
            </span>
            <input
              ref={inputRef}
              type="text"
              name="searchInput"
              id="search-input"
              className="search-input"
              placeholder="Search breweries"
              autoComplete="off"
              spellCheck="false"
              value={query}
              onChange={captureInputVal}
            />
          </div>
          {isInputFocused && breweries.length > 0 && (
            <ul ref={ulistRef} className="search-list">
              {breweries.map((item, index) => {
                return (
                  <li tabIndex={index} key={item.id}>
                    <a
                      href={`/autosearch/by_name=${item.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </>
  );
};
