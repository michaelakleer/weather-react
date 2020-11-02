import React from "react";
import "./Link.css";

export default function Link() {
  return (
    <div className="Link">
      <div className="openSource">This project was coded by Michaela Kleer</div>
      <div>
        Open-sourced on{" "}
        <a
          href="https://github.com/michaelakleer/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {""} and hosted on{" "}
        <a
          href="https://elated-minsky-926069.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
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
