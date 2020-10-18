import React from "react";

import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-8"> {props.time}</div>
        <div className="col-3"> {props.description}</div>
        <div className="col-1"> {props.temperature}°C</div>
      </div>
    </div>
  );
}
