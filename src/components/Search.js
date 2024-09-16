import { useState } from "react";

const Search = (props) => {
  const { searchFilter } = props;
  const [searchText, setSearchText] = useState("");
  return (
    <div className="search">
      <input
        type="search"
        className="search-element"
        placeholder="Food..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="btn search-btn"
        onClick={() => searchFilter(searchText)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
