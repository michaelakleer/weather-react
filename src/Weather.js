import React, { useState } from "react";
import CurrentInfo from "./CurrentInfo";
import WeatherDetail from "./WeatherDetail";
import axios from "axios";
import logo from "./logo.png";
import "./Weather.css";

export default function Weather(props) {
  const [data, setData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function showWeather(response) {
    setData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      country: response.data.sys.country,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "fe9166a2542aaa38d4bef618206979ca";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  if (data.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-sm-11 logo">
              {" "}
              <img src={logo} alt="Logo" />{" "}
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-10">
              <input
                type="search"
                placeholder="Search city..."
                autoFocus="on"
                autoComplete="off"
                className="form-control searchBar"
                onChange={updateCity}
              />
            </div>
            <div className="form-group col-sm-2">
              <input
                type="submit"
                className="btn btn-light searchButton"
                value="Search"
              />
            </div>
          </div>
        </form>
        <CurrentInfo city={data.city} country={data.country} date={data.date} />
        <WeatherDetail data={data} />
      </div>
    );
  } else {
    search();
    return <div className="loading">Loading...</div>;
  }
}
