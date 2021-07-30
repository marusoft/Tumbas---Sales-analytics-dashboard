import React from "react";
import { LocalMall, People, LocalActivity } from "@material-ui/icons";
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
      <div className="reputation">
        <h3 className="repute">Reputation</h3>
        <div className="star">
          <div>
            {" "}
            <LocalActivity className="star-icon" />
            <span className="star-seller">Star Seller</span>
            <span className="percent">85%</span>
          </div>
          <span className="progress"></span>
        </div>
      </div>

      <div className="recent-order">
        <div className="order-list-title">
          <span className="recent">Recent Orders</span>
          <span className="see-all">See All</span>
        </div>
        <ul className="order-list">
          <li className="order-list-item">
            <img
              src="https://res.cloudinary.com/marusofteamwork/image/upload/v1627628750/frontendassessment/redmi.png"
              alt="redmi"
              className="order-list-img"
            />
            <div className="order-list-stuff">
              <span className="order-list-name">Redmi 4x</span>
              <span className="order-list-duration">2 minute ago</span>
            </div>
            <span className="order-list-price">+$80.00</span>
          </li>
          <li className="order-list-item">
            <img
              src="https://res.cloudinary.com/marusofteamwork/image/upload/v1627628750/frontendassessment/redmi.png"
              alt="redmi"
              className="order-list-img"
            />
            <div className="order-list-stuff">
              <span className="order-list-name">Acer E1-421</span>
              <span className="order-list-duration">2 minute ago</span>
            </div>
            <span className="order-list-price">+$80.00</span>
          </li>
          <li className="order-list-item">
            <img
              src="https://res.cloudinary.com/marusofteamwork/image/upload/v1627628749/frontendassessment/nikon3500.png"
              alt="nikon d3500"
              className="order-list-img"
            />
            <div className="order-list-stuff">
              <span className="order-list-name">Nikon D3500 </span>
              <span className="order-list-duration">2 minute ago</span>
            </div>
            <span className="order-list-price">+$80.00</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Follower;
