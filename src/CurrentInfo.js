import React from "react";
import CurrentLocation from "./CurrentLocation";
import CurrentDate from "./CurrentDate";

import "./CurrentInfo.css";

export default function CurrentInfo() {
  return (
    <div className="row currentInfo">
      <div className="col">
        <CurrentLocation location="Toronto, CA" />
        <CurrentDate date="September 23, 2020 | 13:26" />
      </div>
    </div>
  );
}
