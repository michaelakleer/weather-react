import React from "react";

export default function Wind(props) {
  let unit = props.unit;

  function windInMiles() {
    return props.windCelsius / 1.609;
  }

  if (unit === "celsius") {
    return (
      <span id="wind-speed">Wind: {Math.round(props.windCelsius)}km/h</span>
    );
  } else {
    return <span id="wind-speed">Wind: {Math.round(windInMiles())}m/h</span>;
  }
}
