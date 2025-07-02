import "./App.css";
import DataFetcher from "./DataFetcher";
import SearchBar from "./SearchBox";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./Banner";
import WatchList from "./WatchList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [watchList, setWatchList] = useState([]);

  const handleSearch = (term, type) => {
    setSearchTerm(term);
    setSearchType(type);
  };

  const addToWatchList = (movie) => {
    setWatchList((prevList) => [...prevList, movie]); //Adds movie to watchlist
  };

  return (
    <Router>
      <div className="App">
        <Banner />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={handleSearch} />
                <DataFetcher
                  searchTerm={searchTerm}
                  searchType={searchType}
                  onAddToWatchList={addToWatchList}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={<WatchList watchList={watchList} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
