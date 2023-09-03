import React from "react";

import "./SearchResults.css";

import TrackList from "../TrackList/TrackList";

const SearchResults = (props) => {
  return (
    <div className="SearchResults">
      <h2 style={{borderBottom: '0.5px #9e8787 solid', padding: '22px', color: '#ff8400', fontSize: '28px'}}>Arama Sonuclari</h2>
      <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  );
};

export default SearchResults;
