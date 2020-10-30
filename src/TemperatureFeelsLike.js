import React from "react";

export default function TemperatureFeelsLike(props) {
  let unit = props.unit;

  function fahrenheitFeelsLike() {
    return (props.feelsLikeCelsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="feelTemp">
        Feels like {Math.round(props.feelsLikeCelsius)}
      </span>
    );
  } else {
    return (
      <span className="feelTemp">
        Feels like {Math.round(fahrenheitFeelsLike())}
      </span>
    );
  }
}
