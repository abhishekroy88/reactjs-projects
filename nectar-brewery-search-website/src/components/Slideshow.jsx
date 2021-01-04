import React, { useState, useEffect, useRef, createRef } from "react";

export default ({ data, criteria }) => {
  const sliderRef = useRef();
  const slidesRef = useRef([]);

  const originalCount = useRef(data.length / 3).current;
  const index = useRef(originalCount);
  const areControlsAllowed = useRef(true);

  const [sliderTransform, setSliderTransform] = useState();
  const [sliderTransition, setSliderTransition] = useState();

  useEffect(() => {
    setSliderTransition(0);
    setSliderTransform(-originalCount * getSampleSlideWidth());

    sliderRef.current.addEventListener("transitionstart", runAtTransitionStart);
    sliderRef.current.addEventListener("transitionend", runAtTransitionEnd);

    return () => {
      sliderRef.current.removeEventListener(
        "transitionstart",
        runAtTransitionStart
      );

      sliderRef.current.removeEventListener(
        "transitionend",
        runAtTransitionEnd
      );
    };
  }, []);

  if (slidesRef.current.length !== data.length) {
    slidesRef.current = Array(data.length)
      .fill()
      .map((_) => createRef());
  }

  function getSampleSlideWidth() {
    return slidesRef.current[0].current.clientWidth;
  }

  function moveSlides(dir = 1) {
    const slideWidth = getSampleSlideWidth();
    let shiftCount;

    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    if (vw > 1000) {
      shiftCount = 4;
    } else if (vw > 750) {
      shiftCount = 3;
    } else if (vw > 500) {
      shiftCount = 2;
    } else {
      shiftCount = 1;
    }

    index.current += shiftCount * dir;

    setSliderTransition(1);
    setSliderTransform((prevVal) => {
      return prevVal - slideWidth * shiftCount * dir;
    });
  }

  function runAtTransitionStart(e) {
    if (e.target === sliderRef.current) {
      areControlsAllowed.current = false;
    }
  }

  function runAtTransitionEnd(e) {
    if (e.target === sliderRef.current) {
      if (index.current >= originalCount * 2) {
        setSliderTransition(0);
        setSliderTransform(
          -(index.current - originalCount) * getSampleSlideWidth()
        );

        index.current -= originalCount;
      } else if (index.current < originalCount) {
        setSliderTransition(0);
        setSliderTransform(
          -(index.current + originalCount) * getSampleSlideWidth()
        );

        index.current += originalCount;
      }

      areControlsAllowed.current = true;
    }
  }

  return (
    <div className="slideshow">
      <ul
        className="slider"
        ref={sliderRef}
        style={{
          transition: `transform ${sliderTransition}s`,
          transform: `translateX(${sliderTransform}px)`
        }}
      >
        {data.map((dataItem, index) => {
          return (
            <li className="slid" key={index} ref={slidesRef.current[0]}>
              <div className="img-box">
                <a
                  href={
                    criteria === "by_city"
                      ? `/search/${criteria}=${dataItem.capital}`
                      : `/search/${criteria}=${dataItem.name}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="name">
                    <h4>
                      {criteria === "by_city"
                        ? dataItem.capital
                        : dataItem.name}
                    </h4>
                  </div>

                  <img
                    src={
                      criteria === "by_city" ? dataItem.skyline : dataItem.image
                    }
                    alt={dataItem.name}
                  />
                </a>
              </div>
            </li>
          );
        })}
      </ul>

      <button
        className="control prev"
        onClick={() => {
          if (areControlsAllowed.current) moveSlides(-1);
        }}
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      <button
        className="control next"
        onClick={() => {
          if (areControlsAllowed.current) moveSlides();
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};
