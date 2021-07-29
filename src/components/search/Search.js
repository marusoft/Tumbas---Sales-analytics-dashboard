import React from "react";
import { Search } from "@material-ui/icons";
import "./search.css";

const SearchBar = () => {
  return (
    <div className="search">
      <div className="search-wrapper">
        <Search className="search-icon" />
        <input type="search" placeholder="Search for product" />
      </div>
    </div>
  );
};

export default SearchBar;
