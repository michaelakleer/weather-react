import React from "react";
import Weather from "./Weather";
import Link from "./Link";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Toronto" />
        <Link />
      </div>
    </div>
  );
}
