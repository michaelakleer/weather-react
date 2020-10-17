import React from "react";
import "./WeatherCurrentTemperature.css";

export default function WeatherCurrentTemperature(props) {
  return (
    <div className="weatherCurrentTemperature">
      <ul>
        <li>
          <div>
            <span className="currentTemp">{props.temperature}°C</span>
          </div>
        </li>
        <li>
          <span className="feelTemp">Feels like {props.feelTemperature}</span>
        </li>
        <li>
          <span className="weatherDescription">{props.weatherDescription}</span>
        </li>
      </ul>
    </div>
  );
}
