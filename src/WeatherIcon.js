import React from "react";
import "./WeatherIcon";

export default function WeatherIcon() {
  return (
    <div className="icon">
      <img
        src="http://openweathermap.org/img/wn/01d@2x.png"
        alt="Clear"
        id="weather-icon"
        className="weatherIcon"
      />
    </div>
  );
}
