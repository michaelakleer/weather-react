import React from "react";
import WeatherIcon from "./WeatherIcon";
import ConvertableData from "./ConvertableData";

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
        <ConvertableData data={props.weatherData} />
      </div>
    </div>
  );
}
