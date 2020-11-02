import React, { useState } from "react";
import axios from "axios";
import ForecastInfo from "./ForecastInfo";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast">
        <ForecastInfo data={forecast.list[0]} convertUnit={props.unit} />
        <ForecastInfo data={forecast.list[1]} convertUnit={props.unit} />
        <ForecastInfo data={forecast.list[2]} convertUnit={props.unit} />
        <ForecastInfo data={forecast.list[3]} convertUnit={props.unit} />
        <ForecastInfo data={forecast.list[4]} convertUnit={props.unit} />
      </div>
    );
  } else {
    const apiKey = "fe9166a2542aaa38d4bef618206979ca";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
