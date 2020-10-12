import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherCurrentTemperature from "./WeatherCurrentTemperature";
import WeatherInfo from "./WeatherInfo";

import "./WeatherDetail.css";

export default function WeatherDetail() {
  return (
    <div className="weatherDetail">
      <div className="row">
        <div className="col-sm-4">
          <WeatherIcon />
        </div>
        <div className="col-sm-4">
          <WeatherCurrentTemperature
            temperature={18}
            feelTemperature={20}
            weatherDescription="Clear skies"
          />
        </div>
        <div className="col-sm-4">
          <WeatherInfo humidity={65} wind={30} />
        </div>
      </div>
    </div>
  );
}
