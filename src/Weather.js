import React from "react";
import SearchEngine from "./SearchEngine";
import CurrentInfo from "./CurrentInfo";
import WeatherDetail from "./WeatherDetail";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <SearchEngine />
      <CurrentInfo />
      <WeatherDetail
        weatherDescription="Clear skies"
        temperature={18}
        feelTemperature={20}
        humidity={65}
        wind={30}
      />
      <ul className="forcastRows">
        <li>
          <Forecast time="14:00" description="Clear skies" temperature="20" />
        </li>
        <li>
          <Forecast time="16:00" description="Clear skies" temperature="21" />
        </li>
        <li>
          <Forecast time="18:00" description="Clear skies" temperature="19" />
        </li>
        <li>
          <Forecast time="20:00" description="Cloudy" temperature="15" />
        </li>
        <li>
          <Forecast time="22:00" description="Cloudy" temperature="14" />
        </li>
      </ul>
    </div>
  );
}
