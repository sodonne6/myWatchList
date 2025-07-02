// src/Banner.js
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <h1 style={{ color: "red" }}>Movie Database</h1>
      <nav>
        <Link to="/">Main Menu</Link>
        <Link to="/watchlist">Watch List</Link>
      </nav>
    </div>
  );
};

export default Banner;
