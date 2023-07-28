import React from "react";
import { MdSearch } from "react-icons/md";
function Search({ setSearchText }) {
  return (
    <div className="search">
      <MdSearch className="search-icon" />
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}

export default Search;
