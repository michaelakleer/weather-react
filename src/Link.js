import React from "react";
import "./Link.css";

export default function Link() {
  return (
    <div className="Link">
      <div className="openSource">
        <a
          href="https://github.com/michaelakleer/weather-app"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
        {""} by Michaela Kleer
      </div>
    </div>
  );
}
