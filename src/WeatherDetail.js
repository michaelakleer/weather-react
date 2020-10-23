import React from "react";

import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherDetail.css";

export default function WeatherDetail(props) {
  return (
    <div className="weatherDetail">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-sm-2 icon">
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
              <span className="weatherDescription">
                {props.weatherDescription}
              </span>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 temperature">
          <ul>
            <li>
              <div>
                <span className="currentTemp">{props.temperature}</span>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </li>
            <li>
              <span className="feelTemp">
                Feels like {props.feelTemperature}
              </span>
            </li>
          </ul>
        </div>
        <div className="col-sm-12">
          <ul>
            <li>
              <span id="humidity">Humidity: {props.humidity}%</span>
            </li>
            <li>
              <span id="wind-speed">Wind: {props.wind}km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
