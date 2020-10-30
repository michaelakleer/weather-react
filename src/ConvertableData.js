import React, { useState } from "react";
import Temperature from "./Temperature";
import Wind from "./Wind";
import TemperatureFeelsLike from "./TemperatureFeelsLike";
import Forecast from "./Forecast";

export default function ConvertableData(props) {
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
      <div>
        <div className="col-sm-3 temperature">
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
        <div className="col-sm-12">
          <ul>
            <li>
              <span id="humidity">Humidity: {props.data.humidity}%</span>
            </li>
            <li>
              <Wind windCelsius={props.data.wind} unit={unit} />
            </li>
          </ul>
        </div>
        <Forecast city={props.data.city} unit={unit} />
      </div>
    );
  } else {
    return (
      <div>
        <div className="col-sm-3 temperature">
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
        <div className="col-sm-12">
          <ul>
            <li>
              <span id="humidity">Humidity: {props.data.humidity}%</span>
            </li>
            <li>
              <Wind windCelsius={props.data.wind} unit={unit} />
            </li>
          </ul>
        </div>
        <Forecast city={props.data.city} unit={unit} />
      </div>
    );
  }
}
