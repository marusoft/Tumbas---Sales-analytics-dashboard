import React from "react";
import "./product.css";

const Product = () => {
  return (
    <div className="product">
      <h3 className="product-title"> Popular Product</h3>
      <table className="product-table">
        <tr className="product-tr product-head">
          <th className="product-th">Photos</th>
          <th className="product-th">Name</th>
          <th className="product-th">Date</th>
          <th className="product-th">Category</th>
          <th className="product-th">Brand</th>
          <th className="product-th">Price</th>
          <th className="product-th">Status</th>
        </tr>
        <tr className="product-tr product-stuff">
          <td className="product-item">
            <img
              src="https://res.cloudinary.com/marusofteamwork/image/upload/v1627628749/frontendassessment/headset.png"
              alt=""
              className="product-img"
            />
          </td>
          <td className="product-name">
            {" "}
            <span>Cowboy Hat</span>
            <span className="product-number">#33334426</span>
          </td>
          <td className="product-date">Aug 12, 2020</td>
          <td className="product-category">Fashion</td>
          <td className="product-brand">Swallow</td>
          <td className="product-price">$99.89</td>
          <td className="product-status">
            <span>Available</span>
            <span className="product-number">18k viewers</span>
          </td>
        </tr>
        <tr className="product-tr product-stuff">
          <td className="product-item">
            <img
              src="https://res.cloudinary.com/marusofteamwork/image/upload/v1627628749/frontendassessment/smartphone.png"
              alt=""
              className="product-img"
            />
          </td>
          <td className="product-name">
            {" "}
            <span>SmartPhone</span>
            <span className="product-number">#26793434</span>
          </td>
          <td className="product-date">Aug 12, 2020</td>
          <td className="product-category">Gadget</td>
          <td className="product-brand">Mito</td>
          <td className="product-price">$99.89</td>
          <td className="product-status">
            <span>Available</span>
            <span className="product-number">18k viewers</span>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Product;
