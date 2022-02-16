import React from "react";
import { Link } from "react-router-dom";

const Header = ({ callback }) => {
  return (
    <header className="header">
      <div className="container-fluid header-container">
        <div className="row justify-content-md-between justify-content-center">
          <div className="col-md-4 text-center py-2">
            <Link to="/" className="text-decoration-none">
              <h2>The Movies App</h2>
            </Link>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
