import React from "react";

export default function Temperature(props) {
  let unit = props.unit;

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return <span className="currentTemp">{Math.round(props.celsius)}</span>;
  } else {
    return <span className="currentTemp">{Math.round(fahrenheit())}</span>;
  }
}
