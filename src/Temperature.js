import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  function feelsLikeFahrenheit() {
    return (props.feelsLikeCelsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <li>
          <span className="currentTemp">{Math.round(props.celsius)}</span>
          <span className="units">
            °C |{" "}
            <a href="/" onClick={displayFahrenheit}>
              °F
            </a>
          </span>
        </li>
        <li>
          <span className="feelTemp">
            Feels like {Math.round(props.feelsLikeCelsius)}
          </span>
        </li>
      </div>
    );
  } else {
    return (
      <div>
        <li>
          <span className="currentTemp">{Math.round(fahrenheit())}</span>
          <span className="units">
            <a href="/" onClick={displayCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </li>
        <li>
          <span className="feelTemp">
            Feels like {Math.round(feelsLikeFahrenheit())}
          </span>
        </li>
      </div>
    );
  }
}
