import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="searchEngine">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Search city..."
              autoFocus="on"
              autoComplete="off"
              className="form-control searchBar"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-light searchButton"
              value="Search"
            />
          </div>
          <div className="col-1">
            <button type="submit" className="btn btn-light">
              <i className="fas fa-location-arrow"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
