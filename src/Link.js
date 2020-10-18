import React from "react";
import "./Link.css";

export default function Link() {
  return (
    <div className="Link">
      <div className="openSource">
        <a
          href="https://github.com/michaelakleer/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
        {""} by Michaela Kleer
      </div>
      <div className="logoCredit">
        Created my free logo at{" "}
        <a
          href="https://logomakr.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LogoMakr.com
        </a>
      </div>
    </div>
  );
}
