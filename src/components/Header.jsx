import React, { useState, useRef } from "react";

const Header = ({ callback }) => {
  const [searchMovie, setSearchMovie] = useState("");
  return (
    <header className="header">
      <div className="container-fluid header-container">
        <div className="row justify-content-md-between justify-content-center">
          <div className="col-md-4 text-center py-2">
            <a href="#" className="text-decoration-none">
              <h2>The Movies App</h2>
            </a>
          </div>
          <div className="col-6">
            <form className="form-inline">
              <div className="row py-2">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Movies"
                      value={searchMovie}
                      onChange={(e) => setSearchMovie(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3 text-md-start py-md-0 py-2 text-center">
                  <button className="btn btn-primary">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
