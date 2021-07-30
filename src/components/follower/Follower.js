import React from "react";
import { LocalMall, People } from "@material-ui/icons";
import "./follower.css";

const Follower = () => {
  return (
    <div className="follower">
      <div className="follower-head">
        <h3 className="notice-logo">N</h3>
      </div>
      <span className="logo-name">Konter Pulsa</span>
      <div className="follower-product">
        <div className="product-stuff">
          <span>
            <LocalMall className="product-stuff-icon" />
            218 Products
          </span>
        </div>
        <div className="vertical-line"></div>
        <div className="follower-stuff">
          <span>
            {" "}
            <People className="follower-stuff-icon" />
            2580 Followers
          </span>
        </div>
      </div>
    </div>
  );
};

export default Follower;
