import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastInfo.css";

export default function ForecastInfo(props) {
  let unit = props.convertUnit;

  function forecastFahrenheitMax() {
    return (props.data.main.temp_max * 9) / 5 + 32;
  }

  function forecastFahrenheitMin() {
    return (props.data.main.temp_min * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="ForecastInfo">
        <div className="row">
          <div className="col-sm-4 hour">
            {new Date(props.data.dt * 1000).getHours()}:00
          </div>
          <div className="col-sm-4 forecastIcon">
            <WeatherIcon info={props.data.weather[0].icon} />
          </div>
          <div className="col-sm-4 temp">
            <i className="fas fa-thermometer-full"></i>{" "}
            {Math.round(props.data.main.temp_max)}°C |{" "}
            <i className="fas fa-thermometer-empty"></i>{" "}
            {Math.floor(props.data.main.temp_min)}°C
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ForecastInfo">
        <div className="row">
          <div className="col-4 hour">
            {new Date(props.data.dt * 1000).getHours()}:00{" "}
          </div>
          <div className="col-4 forecastIcon">
            <WeatherIcon info={props.data.weather[0].icon} />
          </div>
          <div className="col-4 temp">
            <i className="fas fa-thermometer-full"></i>{" "}
            {Math.round(forecastFahrenheitMax())}°F |{" "}
            <i className="fas fa-thermometer-empty"></i>{" "}
            {Math.floor(forecastFahrenheitMin())}°F
          </div>
        </div>
      </div>
    );
  }
}
