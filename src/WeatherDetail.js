import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import Wind from "./Wind";
import TemperatureFeelsLike from "./TemperatureFeelsLike";
import Forecast from "./Forecast";

import "./WeatherDetail.css";

export default function WeatherDetail(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="weatherDetail">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-sm-2 icon">
            <ul>
              <li>
                <WeatherIcon info={props.data.icon} />
              </li>
              <li className="text-capitalize">
                <span className="weatherDescription">
                  {props.data.description}
                </span>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 temperature">
            <ul>
              <li>
                <Temperature celsius={props.data.temperature} unit={unit} />
                <span className="units">
                  °C |{" "}
                  <a href="/" onClick={displayFahrenheit}>
                    °F
                  </a>
                </span>
              </li>
              <li>
                <TemperatureFeelsLike
                  feelsLikeCelsius={props.data.feelsLike}
                  unit={unit}
                />
              </li>
            </ul>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row humidityAndWind">
          <div className="col-5"></div>
          <div className="col-sm-2">
            <ul>
              <li>
                <span id="humidity">Humidity: {props.data.humidity}%</span>
              </li>
              <li>
                <Wind windCelsius={props.data.wind} unit={unit} />
              </li>
            </ul>
          </div>
        </div>

        <Forecast city={props.data.city} unit={unit} />
      </div>
    );
  } else {
    return (
      <div className="weatherDetail">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-sm-2 icon">
            <ul>
              <li>
                <WeatherIcon info={props.data.icon} />
              </li>
              <li className="text-capitalize">
                <span className="weatherDescription">
                  {props.data.description}
                </span>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 temperature">
            <ul>
              <li>
                <Temperature celsius={props.data.temperature} unit={unit} />
                <span className="units">
                  <a href="/" onClick={displayCelsius}>
                    °C
                  </a>{" "}
                  | °F
                </span>
              </li>
              <li>
                <TemperatureFeelsLike
                  feelsLikeCelsius={props.data.feelsLike}
                  unit={unit}
                />
              </li>
            </ul>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row humidityAndWind">
          <div className="col-5"></div>
          <div className="col-sm-2">
            <ul>
              <li>
                <span id="humidity">Humidity: {props.data.humidity}%</span>
              </li>
              <li>
                <Wind windCelsius={props.data.wind} unit={unit} />
              </li>
            </ul>
          </div>
        </div>
        <Forecast city={props.data.city} unit={unit} />
      </div>
    );
  }
}
