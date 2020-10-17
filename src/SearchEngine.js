import React from "react";
import logo from "./logo.png";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="searchEngine">
      <form>
        <div className="row">
          <div className="col-12 logo">
            {" "}
            <img src={logo} alt="Logo" />{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-7">
            <input
              type="search"
              placeholder="Search city..."
              autoFocus="on"
              autoComplete="off"
              className="form-control searchBar"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              className="btn btn-light searchButton"
              value="Search"
            />
          </div>
          <div className="col-1">
            <button type="submit" className="btn btn-light">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
