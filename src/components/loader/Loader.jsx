import React, { useEffect, useState } from "react";
import "./loader.scss";

const Loader = ({ title }) => {
  const [data, setData] = useState("Loading ");

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(title ? title : "Loading ");
    }, 7000);

    return () => clearTimeout(timer);
  }, [title]);

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
          <span>{data}</span>
          <span className="status__dot">.</span>
          <span className="status__dot">.</span>
          <span className="status__dot">.</span>
        </div>
      </div>
    </>
  );
};

export default Loader;
