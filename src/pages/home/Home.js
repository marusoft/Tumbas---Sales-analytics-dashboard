import React from "react";
import SearchBar from "../../components/search/Search";
import Notification from "../../components/notification/Notification";
import Card from "../../components/card/Card";
import ChartBar from "../../components/chart/Chart";
import Product from "../../components/product/Product";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="search-info">
        <div className="bar">
          <SearchBar />
          <Card />
          <ChartBar />
          <Product />
        </div>
        <Notification />
      </div>
    </div>
  );
};

export default Home;
