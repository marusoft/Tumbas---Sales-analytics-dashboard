import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home"
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
