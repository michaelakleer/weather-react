import React from "react";
import "./WeatherIcon";

import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  return (
    <div className="weatherIcon">
      <ul>
        <li>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="white"
            size={65}
            animate={true}
          />
        </li>
        <li>
          <span className="weatherDescription">{props.weatherDescription}</span>
        </li>
      </ul>
    </div>
  );
}
