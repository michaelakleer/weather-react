import React from "react";
import "./WeatherIcon";

export default function WeatherIcon(props) {
  return (
    <div className="weatherIcon">
      <ul>
        <li>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="Clear"
            id="weather-icon"
            className="weatherIcon"
          />
        </li>
        <li>
          <span className="weatherDescription">{props.weatherDescription}</span>
        </li>
      </ul>
    </div>
  );
}
