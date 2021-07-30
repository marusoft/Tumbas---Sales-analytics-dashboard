import React from "react";
import {
  Dashboard,
  Description,
  Settings,
  LocalMall,
  People,
  ImportExport,
} from "@material-ui/icons";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-head">
        <h3 className="logo">T</h3>
        <span className="logo-title">Tumbas</span>
      </div>
      {/**sidebar menu */}
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Menu</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item active">
              <Dashboard className="sidebar-icons" />
              Overview
            </li>
            <li className="sidebar-list-item">
              <Description className="sidebar-icons" />
              Orders
            </li>
            <li className="sidebar-list-item">
              <LocalMall className="sidebar-icons" />
              Products
            </li>
            <li className="sidebar-list-item">
              <Settings className="sidebar-icons" />
              Settings
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Business</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <ImportExport className="sidebar-icons" />
              Shipment
            </li>
            <li className="sidebar-list-item">
              <People className="sidebar-icons" />
              Employee
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebar-footer">
        <span>Tumbas. 2020</span>
        <p>Platform for solution of all types of business to be more advance</p>
      </div>
    </div>
  );
};

export default Sidebar;
