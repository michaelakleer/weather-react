import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastInfo.css";

export default function ForecastInfo(props) {
  let unit = props.convertUnit;

  function forecastFahrenheit() {
    return (props.data.main.temp * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="ForecastInfo">
        <div className="row">
          <div className="col-4">
            {new Date(props.data.dt * 1000).getHours()}:00
          </div>
          <div className="col-4">
            <WeatherIcon info={props.data.weather[0].icon} />
          </div>
          <div className="col-4">{Math.round(props.data.main.temp)}°C</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ForecastInfo">
        {new Date(props.data.dt * 1000).getHours()}:00{" "}
        <WeatherIcon info={props.data.weather[0].icon} />
        {Math.round(forecastFahrenheit())}°F{" "}
      </div>
    );
  }
}
