import { useState } from "react";
import "./Search.css";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["All", "People", "Jobs", "Posts", "Companies"];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for people, jobs, companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">Search</button>
        </form>

        <div className="search-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${
                activeFilter === filter.toLowerCase() ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.toLowerCase())}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="search-results">
          {searchQuery ? (
            <p>Search results for "{searchQuery}" will appear here</p>
          ) : (
            <p>Enter a search term to find people, jobs, and more</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;