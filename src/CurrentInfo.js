import React from "react";

import "./CurrentInfo.css";

export default function CurrentInfo() {
  return (
    <div className="row currentInfo">
      <div className="col-12 currentLocation">
        <h1>Toronto, ON</h1>
      </div>
      <div className="col-12 currentDate">
        <h2>October 20, 2020</h2>
      </div>
    </div>
  );
}
