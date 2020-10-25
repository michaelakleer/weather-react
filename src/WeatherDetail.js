import React from "react";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

import "./WeatherDetail.css";

export default function WeatherDetail(props) {
  return (
    <div className="weatherDetail">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-sm-4 icon">
          <ul>
            <li>
              <WeatherIcon info={props.weatherData.icon} />
            </li>
            <li className="text-capitalize">
              <span className="weatherDescription">
                {props.weatherData.description}
              </span>
            </li>
          </ul>
        </div>
        <div className="col-sm-3 temperature">
          <ul>
            <div>
              <Temperature
                celsius={props.weatherData.temperature}
                feelsLikeCelsius={props.weatherData.feelsLike}
              />
            </div>
          </ul>
        </div>
        <div className="col-sm-12">
          <ul>
            <li>
              <span id="humidity">Humidity: {props.weatherData.humidity}%</span>
            </li>
            <li>
              <span id="wind-speed">
                Wind: {Math.round(props.weatherData.wind)}km/h
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
