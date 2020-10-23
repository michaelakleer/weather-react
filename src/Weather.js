import React, { useState } from "react";
import SearchEngine from "./SearchEngine";
import CurrentInfo from "./CurrentInfo";
import WeatherDetail from "./WeatherDetail";
import Forecast from "./Forecast";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [data, setData] = useState({ ready: false });

  function showWeather(response) {
    console.log(response);

    setData({
      ready: true,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  if (data.ready) {
    return (
      <div className="Weather">
        <SearchEngine />
        <CurrentInfo />
        <WeatherDetail
          weatherDescription={data.description}
          temperature={Math.round(data.temperature)}
          feelTemperature={Math.round(data.feelsLike)}
          humidity={data.humidity}
          wind={Math.round(data.wind)}
        />
        <Forecast time="14:00" description="Clear skies" temperature="20" />
        <Forecast time="16:00" description="Clear skies" temperature="21" />
        <Forecast time="18:00" description="Clear skies" temperature="19" />
        <Forecast time="20:00" description="Cloudy" temperature="15" />
        <Forecast time="22:00" description="Cloudy" temperature="14" />
      </div>
    );
  } else {
    const apiKey = "fe9166a2542aaa38d4bef618206979ca";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

    return <div>Searching...</div>;
  }
}
