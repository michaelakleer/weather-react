import React from "react";
import "./CurrentDate.css";

export default function CurrentDate(props) {
  return (
    <div className="currentDate">
      <h2>{props.date}</h2>
    </div>
  );
}
