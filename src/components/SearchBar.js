

import React from "react";

const SearchBar = ({ searchResult }) => {
  return (

    // la recherche ne marche pas malgré mes essais
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



