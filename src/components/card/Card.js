import {
  LocalMall,
  AccountBalanceTwoTone,
  People,
  AddShoppingCart,
} from "@material-ui/icons";
import React, { Fragment } from "react";
import "./card.css";

const Card = () => {
  return (
    <Fragment>
      <h3 className="card-name">Overview</h3>
      <div className="card">
        <div className="card-item">
          <div className="card-item-rate">
            <span className="card-icon-rate">
              <LocalMall className="card-icon-1" />
            </span>
            <span className="card-moneyrate">+24%</span>
          </div>
          <div className="money">
            <span className="card-money">$27,340.00</span>
          </div>
          <span className="card-title">Total Sales</span>
        </div>

        <div className="card-item">
          <div className="card-item-rate">
            <span className="card-icon-rate">
              <AccountBalanceTwoTone className="card-icon-2" />
            </span>
            <span className="card-moneyrate negative">-32%</span>
          </div>
          <div className="money">
            <span className="card-money">$27,340.00</span>
          </div>
          <span className="card-title">Total Expenses</span>
        </div>

        <div className="card-item">
          <div className="card-item-rate">
            <span className="card-icon-rate">
              <People className="card-icon-3" />
            </span>
            <span className="card-moneyrate">+48%</span>
          </div>
          <div className="money">
            <span className="card-money">$18,260.00</span>
          </div>
          <span className="card-title">Total Visitors</span>
        </div>

        <div className="card-item">
          <div className="card-item-rate">
            <span className="card-icon-rate">
              <AddShoppingCart className="card-icon-4" />
            </span>
            <span className="card-moneyrate negative">-12%</span>
          </div>
          <div className="money">
            <span className="card-money">$11,340.00</span>
          </div>
          <span className="card-title">Total Orders</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
