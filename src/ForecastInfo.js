import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastInfo.css";

export default function ForecastInfo(props) {
  return (
    <div className="ForecastInfo">
      {" "}
      <ul>
        <li>
          <div className="row">
            <div className="col-8">
              {" "}
              {new Date(props.data.dt * 1000).getHours()}:00
            </div>
            <div className="col-3">
              {" "}
              <WeatherIcon info={props.data.weather[0].icon} />
            </div>
            <div className="col-1"> {Math.round(props.data.main.temp)}°C</div>
          </div>
        </li>
      </ul>{" "}
    </div>
  );
}
