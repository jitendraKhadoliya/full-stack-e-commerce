import React from "react";
import "./loader.scss";

const Loader = () => {
  return (
    <>
      <div className="loading-container">
        <div className="preloader">
          <div className="preloader__square"></div>
          <div className="preloader__square"></div>
          <div className="preloader__square"></div>
          <div className="preloader__square"></div>
        </div>
        <div className="status">
          Loading<span className="status__dot">.</span>
          <span className="status__dot">.</span>
          <span className="status__dot">.</span>
        </div>
      </div>
    </>
  );
};

export default Loader;
