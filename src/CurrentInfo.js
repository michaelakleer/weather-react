import React from "react";

import "./CurrentInfo.css";

export default function CurrentInfo(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let year = props.date.getFullYear();

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="currentInfo">
      <div className="currentLocation">
        <h1>
          {props.city}, {props.country}
        </h1>
      </div>
      <div className="currentDate">
        <h2>
          {day}, {month} {date}, {year} | {hours}:{minutes}
        </h2>
      </div>
    </div>
  );
}
