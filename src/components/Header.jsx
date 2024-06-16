import React from "react";
import "../App.css";

const Header = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Pizza</h2>

      <div className="navbar-links">
        <a href="#main" className="navbar-link">
          Home
        </a>

        <a href="#order" className="navbar-link">
          Order
        </a>
      </div>
    </nav>
  );
};

export default Header;
