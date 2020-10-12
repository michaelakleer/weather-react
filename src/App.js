import React from "react";
import SearchEngine from "./SearchEngine";
import CurrentInfo from "./CurrentInfo";
import WeatherDetail from "./WeatherDetail";
import Link from "./Link";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine />
        <CurrentInfo />
        <WeatherDetail />
      </div>
      <Link />
    </div>
  );
}
