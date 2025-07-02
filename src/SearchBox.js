import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("title"); // Default to title

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for: ", searchTerm);
    onSearch(searchTerm, searchType); // Call the onSearch function passed from parent
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div>
        <label>
          <input
            type="radio"
            value="title"
            checked={searchType === "title"}
            onChange={() => setSearchType("title")}
          />
          Movie Title
        </label>
        <label>
          <input
            type="radio"
            value="imdb"
            checked={searchType === "imdb"}
            onChange={() => setSearchType("imdb")}
          />
          IMDB Code
        </label>
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
