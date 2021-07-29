import React from "react";
import SearchBar from "../../components/search/Search";
import Notification from "../../components/notification/Notification";
import Card from "../../components/card/Card";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="search-info">
        <div className="bar">
          <SearchBar />
          <Card />
        </div>
        <Notification />
      </div>
    </div>
  );
};

export default Home;