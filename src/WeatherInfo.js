import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <ul>
        <li>
          <span id="humidity">Humidity: {props.humidity}%</span>
        </li>
        <li>
          <span id="wind-speed">Wind: {props.wind}km/h</span>
        </li>
      </ul>
    </div>
  );
}
