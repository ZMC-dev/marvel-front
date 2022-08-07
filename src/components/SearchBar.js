

import React from "react";

const SearchBar = ({ searchResult }) => {
  return (
    <div className="search-bar">
      <input
        id="search-bar"
        onChange={event => searchResult(event)}
        placeholder="Cherche ici...."
      />
    </div>
  );
};

export default SearchBar;



