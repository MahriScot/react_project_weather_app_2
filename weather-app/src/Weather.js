import React from "react";
import "./Weather.css";
import WeatherSearch from "./WeatherSearch";

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
          <li>
            <a href="#">Edinburgh</a>
          </li>
          <li>
            <a href="#">Wellington</a>
          </li>
          <li>
            <a href="#">Vancouver</a>
          </li>
          <li>
            <a href="#">Mayrhofen</a>
          </li>
          <li>
            <a href="#">Nairobi</a>
          </li>
        </ul>
      </header>

      <div>
        <WeatherSearch />
        {/* <br />
        <DateAndTimeToday /> */}
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
