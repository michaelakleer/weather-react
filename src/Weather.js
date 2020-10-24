import React, { useState } from "react";
import CurrentInfo from "./CurrentInfo";
import WeatherDetail from "./WeatherDetail";
import Forecast from "./Forecast";
import axios from "axios";
import logo from "./logo.png";
import "./Weather.css";

export default function Weather(props) {
  const [data, setData] = useState({ ready: false });

  function showWeather(response) {
    setData({
      ready: true,
      date: new Date(response.data.dt * 1000),
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
        <form>
          <div className="row">
            <div className="col-12 logo">
              {" "}
              <img src={logo} alt="Logo" />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-7">
              <input
                type="search"
                placeholder="Search city..."
                autoFocus="on"
                autoComplete="off"
                className="form-control searchBar"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                className="btn btn-light searchButton"
                value="Search"
              />
            </div>
            <div className="col-1">
              <button type="submit" className="btn btn-light">
                <i className="fas fa-map-marker-alt"></i>
              </button>
            </div>
          </div>
        </form>
        <CurrentInfo date={data.date} />
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
