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
      <Forecast time="14:00" description="Clear skies" temperature="20" />
      <Forecast time="16:00" description="Clear skies" temperature="21" />
      <Forecast time="18:00" description="Clear skies" temperature="19" />
      <Forecast time="20:00" description="Cloudy" temperature="15" />
      <Forecast time="22:00" description="Cloudy" temperature="14" />
    </div>
  );
}
