import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Edinburgh",
    temperature: 14,
    date: "Wednesday 12:07",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="Weather">
      <p className="headerQuote">
        {/* <img src="/images/raining.svg" alt="raining" width="60" /> */}
        "There's no such thing as bad weather, only unsuitable clothing!"
        {/* <img src="images/nature.svg" alt="nature" width="65" /> */}
      </p>
      <header>
        <ul className="header">
          <li>Edinburgh</li>
          <li>Wellington</li>
          <li>Vancouver</li>
          <li>Mayrhofen</li>
          <li>Nairobi</li>
        </ul>
      </header>
      <form id="search-form">
        <input
          type="text"
          placeholder="Enter a city here..."
          autofocus="off"
          autocomplete="off"
          id="search-text-input"
          className="searchInput btn"
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

      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li className="description">{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
      <br />
      <h5>Today</h5>
      <div className="today-breakdown">
        <div className="row">
          <div className="col-3">
            Humidity
            <div className="row">
              <div className="col-12" id="humidity">
                %
              </div>
            </div>
          </div>
          <div className="col-3">
            Wind Speed
            <div className="row">
              <div className="col-12" id="wind-speed">
                <span>km/h</span>
              </div>
            </div>
          </div>
          <div className="col-3">
            Min. Temp.
            <div className="row">
              <div className="col-12" id="min-temp"></div>
            </div>
          </div>
          <div className="col-3">
            Max. Temp.
            <div className="row">
              <div className="col-12" id="max-temp"></div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h5>The Future</h5>
      <div className="the-future" id="future-forecast"></div>
    </div>
  );
}
