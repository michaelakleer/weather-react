import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="searchEngine">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Search city..."
              autoFocus="on"
              autoComplete="off"
              className="form-control searchBar"
            />
          </div>
          <div className="col-4">
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
          <div className="col-1 units">
            <a href="/">°C</a> | <a href="/">°F</a>
          </div>
        </div>
      </form>
    </div>
  );
}
