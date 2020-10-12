import React from "react";
import "./CurrentLocation.css";

export default function CurrentLocation(props) {
  return (
    <div className="currentLocation">
      <h1>{props.location}</h1>
    </div>
  );
}
