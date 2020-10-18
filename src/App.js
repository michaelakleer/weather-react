import React from "react";
import SearchEngine from "./SearchEngine";
import CurrentInfo from "./CurrentInfo";
import WeatherDetail from "./WeatherDetail";
import Forecast from "./Forecast";
import Link from "./Link";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine />
        <CurrentInfo />
        <WeatherDetail />
        <ul className="forcastRows">
          <li>
            <Forecast time="14:00" description="Clear skies" temperature="19" />
          </li>
          <li>
            <Forecast time="14:00" description="Clear skies" temperature="19" />
          </li>
          <li>
            <Forecast time="14:00" description="Clear skies" temperature="19" />
          </li>
          <li>
            <Forecast time="14:00" description="Clear skies" temperature="19" />
          </li>
          <li>
            <Forecast time="14:00" description="Clear skies" temperature="19" />
          </li>
        </ul>
        <Link />
      </div>
    </div>
  );
}
