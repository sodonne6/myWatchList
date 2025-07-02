// src/dataFetcher.js
import React, { useEffect, useState } from "react";
import axios from "axios";
//import StockChart from "./StockChart";

const DataFetcher = ({ searchTerm, searchType, onAddToWatchList }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //const [symbol, setSymbol] = useState("");
  //const [token, setToken] = useState("t"); //defaults to title
  //const [searchType, setSearchType] = useState("title"); //state for seach type
  const apiKey = "b79961fb"; // Replace with your Tiingo API key

  //const symbol = ""; // Set the symbol you want to fetch data for
  //const token = "";

  //what needs to be changed
  //have drop down to choose search option (title or code)
  //have a way to pass these to datafetcher

  useEffect(() => {
    const fetchMovie = async () => {
      const token = searchType === "title" ? "t" : "i";

      try {
        console.log("Fetching Movies...");

        //only difference between the poster API and data request api is "www" or "img"

        // Define the request options
        const requestOptions = {
          url: `http://www.omdbapi.com/?apikey=${apiKey}&${token}=${searchTerm}`,
        };

        console.log(requestOptions);

        const response = await axios.get(requestOptions.url);
        console.log(response.data); // Handle the response data

        // Set the data state with the response data
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error); // Handle errors
        setError(error);
        setLoading(false);
      }
    };

    //if (symbol) {
    fetchMovie();
    //}
  }, [searchTerm, searchType]); // Run once on component mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // The response data is an object
  const chosenMovie = data; // The data is already in the correct format
  console.log("Fetched data:", chosenMovie);

  const posterUrl = chosenMovie?.Poster;

  return (
    <div className="movie-container">
      {chosenMovie && (
        <>
          <img
            className="movie-poster"
            src={posterUrl}
            alt={`${chosenMovie.Title} Poster`}
          />
          <div className="movie-details">
            <h1>{chosenMovie.Title}</h1>
            <p>Year: {chosenMovie.Year}</p>
            <p>Genre: {chosenMovie.Genre}</p>
            <p>Director: {chosenMovie.Director}</p>
            <p>Plot: {chosenMovie.Plot}</p>
            <button onClick={() => onAddToWatchList(chosenMovie)}>
              Add to Watch List
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DataFetcher;
