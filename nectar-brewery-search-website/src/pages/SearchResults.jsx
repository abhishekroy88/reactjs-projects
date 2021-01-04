import "../../public/styles.css";
import React, { useEffect, useState, useRef } from "react";

// Custom component imports
import HeroSection from "../components/HeroSection";
import FilterSearchBox from "../components/FilterSearchBox";
import SearchResultsSection from "../components/SearchResultsSection";
import Loader from "../components/Loader";

// Data imports
import { usaStates, breweryTypes } from "../data";

export default ({ match }) => {
  const [breweryData, setBreweryData] = useState([]);
  const [isStateInfoVisible, setStateInfoVisible] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filterBy, setFilterBy] = useState("");
  const [filterVal, setFilterVal] = useState("");
  const [isFilterJustApplied, setIsFilterJustApplied] = useState(false);

  const criteria = useRef(match.params.criteria).current;
  const criteria_by = useRef(criteria.split("=")[0]).current;
  const criteria_val = useRef(criteria.split("=")[1]).current;
  const dataObjRef = useRef();
  const stopAPICallsRef = useRef(false);

  useEffect(() => {
    if (criteria_by === "by_state") {
      setStateInfoVisible(true);
      setFilterBy("by_city");
    } else {
      setFilterBy("by_name");
    }

    window.addEventListener("scroll", runAtScrollEnd);

    return () => {
      window.removeEventListener("scroll", runAtScrollEnd);
    };
  }, []);

  useEffect(() => {
    if (!stopAPICallsRef.current) {
      stopAPICallsRef.current = true;
      setIsLoading(true);

      let query = `https://api.openbrewerydb.org/breweries?${match.params.criteria}`;

      if (filterVal !== "") {
        query += `&${filterBy}=${filterVal}`;
      }

      if (isFilterJustApplied) {
        query += "&page=1";
        setBreweryData([]);
        setIsFilterJustApplied(false);
      } else {
        query += `&page=${pageNumber}`;
      }

      setTimeout(() => {
        fetch(query)
          .then((res) => res.json())
          .then((data) => {
            if (data.length > 0) {
              setBreweryData((prevVal) => [...prevVal, ...data]);
              stopAPICallsRef.current = false;
            } else {
              // WARNING - The statement below is dangerous.
              // Take extra precaution, else risk an infinite loop..
              setPageNumber((prevValue) => prevValue - 1);
            }
            setIsLoading(false);
          });
      }, 1000);
    }
  }, [pageNumber, filterVal]);

  if (!dataObjRef.current) {
    if (criteria_by === "by_state") {
      dataObjRef.current = usaStates.filter(
        (item) => item.name === criteria_val
      )[0];
    } else if (criteria_by === "by_city") {
      dataObjRef.current = usaStates.filter(
        (item) => item.capital === criteria_val
      )[0];
    } else {
      dataObjRef.current = breweryTypes.filter(
        (item) => item.name === criteria_val
      )[0];
    }
  }

  function runAtScrollEnd() {
    if (!stopAPICallsRef.current) {
      const {
        scrollTop,
        scrollHeight,
        clientHeight
      } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight) {
        setPageNumber((prevVal) => prevVal + 1);
      }
    }
  }

  function captureFilterSearchVal(v) {
    stopAPICallsRef.current = false;
    setFilterVal(v);
    setIsFilterJustApplied(true);
  }

  return (
    <div className="search-results-page">
      <HeroSection
        sectionTitle={
          criteria_by === "by_state"
            ? dataObjRef.current.nickname
            : criteria_by === "by_city"
            ? dataObjRef.current.capital
            : criteria_val
        }
        imgSrc={
          criteria_by === "by_state"
            ? dataObjRef.current.landscape
            : criteria_by === "by_city"
            ? dataObjRef.current.skyline
            : dataObjRef.current.image
        }
        altText={criteria_val}
      />

      {isStateInfoVisible && (
        <div className="state-seal-img-box">
          <img src={dataObjRef.current.seal} alt={`Seal of ${criteria_val}`} />
        </div>
      )}

      <hr />

      <FilterSearchBox
        filterBy={filterBy}
        captureFilterSearchVal={captureFilterSearchVal}
      />

      <SearchResultsSection breweryData={breweryData} />

      {isLoading && <Loader />}
    </div>
  );
};
