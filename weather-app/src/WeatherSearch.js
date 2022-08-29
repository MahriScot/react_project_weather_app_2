import React, { useState } from "react";
import "./WeatherSearch.css";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "1cea906f8f3ab268b1c4225a33a9637a";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form id="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a city..."
        autoFocus="off"
        autoComplete="off"
        id="search-text-input"
        className="searchInput btn"
        onChange={updateCity}
      />
      <input
        type="submit"
        value="Search"
        id="search-button"
        className="btn btn-primary searchButton"
      />
      <span>
        <button id="current-location-button" class="btn btn-info">
          Current Location
        </button>
      </span>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="overview">
          <h1>{city}</h1>
          <ul>
            <li>Last updated: *need to enter this*</li>
            <li className="description">{weather.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="weather-temperature">
              <img
                src={weather.icon}
                alt={weather.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{Math.round(weather.temperature)}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity} %</li>
              <li>Wind: {weather.wind} kph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
