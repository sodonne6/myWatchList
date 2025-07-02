// src/WatchList.js
import React from "react";

const WatchList = ({ watchList }) => {
  return (
    <div>
      <h2>Your Watch List</h2>
      <div className="watchlist-container">
        {watchList.length > 0 ? (
          watchList.map((movie, index) => (
            <div key={index} className="watchlist-item">
              <img
                src={movie.Poster}
                alt={`${movie.Title} Poster`}
                className="watchlist-poster"
              />
            </div>
          ))
        ) : (
          <p>Your watch list is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WatchList;
