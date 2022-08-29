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
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      temp_min: response.data.main.temp_min,
      temp_max: response.data.main.temp_max,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "1cea906f8f3ab268b1c4225a33a9637a";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
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
          <h1>{weather.city}</h1>
          <div className="row">
            <div className="col-4">
              <ul>
                <li>Last updated:</li>
                <li>*need to enter date*</li>
                <li>*need to enter time*</li>
              </ul>
            </div>
            <div className="col-4">
              <div className="weather-temperature">
                <img
                  src={weather.icon}
                  alt={weather.description}
                  className="float-left"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="float-left">
                <ul>
                  <li>
                    <strong>{Math.round(weather.temperature)}</strong>
                    <span className="units">
                      <a href="/">°C</a> | <a href="/">°F</a>
                    </span>
                  </li>
                  <li className="description">{weather.description}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h5>Today</h5>
        <div className="today-breakdown">
          <div className="row">
            <div className="col-3">
              Humidity
              <div className="row">
                <div className="col-12" id="humidity">
                  {weather.humidity}%
                </div>
              </div>
            </div>
            <div className="col-3">
              Wind Speed
              <div className="row">
                <div className="col-12" id="wind-speed">
                  <span>{weather.wind}km/h</span>
                </div>
              </div>
            </div>
            <div className="col-3">
              Min. Temp.
              <div className="row">
                <div className="col-12" id="min-temp">
                  {Math.round(weather.temp_min)}°C
                </div>
              </div>
            </div>
            <div className="col-3">
              Max. Temp.
              <div className="row">
                <div className="col-12" id="max-temp">
                  {Math.round(weather.temp_max)}°C
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}

// from vanilla weather app:

// let now = new Date();
// let dateToday = document.querySelector("#date-today");
// let timeNow = document.querySelector("#current-time");

// let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let day = days[now.getDay()];
// let date = now.getDate();
// let months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// let month = months[now.getMonth()];
// let year = now.getFullYear();
// let hours = now.getHours();
// if (hours === 0) {
//   hours = `00`;
// } else {
//   if (hours < 10) {
//     hours = `0${hours}`;
//   }
// }
// let minutes = now.getMinutes();
// if (minutes < 10) {
//   minutes = `0${minutes}`;
// }

// dateToday.innerHTML = `${day} ${date} ${month} ${year}`;
// timeNow.innerHTML = `${hours}:${minutes}`;

// function formatDay(timestamp) {
//   let date = new Date(timestamp * 1000);
//   let day = date.getDay();
//   let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

//   return days[day];
// }

// function displayFutureForecast(response) {
//   let futureForcast = response.data.daily;

//   let forecastElement = document.querySelector("#future-forecast");

//   let forecastHTML = `<div class="row">`;

//   futureForcast.forEach(function (futureForcastDay, index) {
//     if (index < 6) {
//       forecastHTML =
//         forecastHTML +
//         `
//           <div class="col-2">
//             <div class="the-future-day">${formatDay(futureForcastDay.dt)}</div>
//             <img
//               src="http://openweathermap.org/img/wn/${
//                 futureForcastDay.weather[0].icon
//               }@2x.png"
//               alt="Weather Icon"
//               width="40"
//             />
//             <div class="the-future-temps">
//               <span class="future-temp-min">${Math.round(
//                 futureForcastDay.temp.min
//               )}°C</span>
//               <span class="future-temp-max">${Math.round(
//                 futureForcastDay.temp.max
//               )}°C</span>
//             </div>
//           </div>
// `;
//     }
//   });

//   forecastHTML = forecastHTML + `</div>`;
//   forecastElement.innerHTML = forecastHTML;
// }

// function getFutureForecast(coordinates) {
//   console.log(coordinates);
//   let apiKey = "1cea906f8f3ab268b1c4225a33a9637a";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
//   axios.get(apiUrl).then(displayFutureForecast);
// }

// function displayWeatherCondition(response) {
//   //remove this console.log
//   console.log(response.data);
//   let citySearchedElement = document.querySelector("#searched-location");
//   let temperatureElement = document.querySelector("#temperature-now");
//   let humidityElement = document.querySelector("#humidity");
//   let windSpeedElement = document.querySelector("#wind-speed");
//   let descriptionElement = document.querySelector("#description");
//   let minTempElement = document.querySelector("#min-temp");
//   let maxTempElement = document.querySelector("#max-temp");
//   let weatherIconElement = document.querySelector("#weather-icon");

//   celsiusTemperature = response.data.main.temp;

//   citySearchedElement.innerHTML = response.data.name;
//   temperatureElement.innerHTML = Math.round(celsiusTemperature);
//   humidityElement.innerHTML = response.data.main.humidity + "%";
//   windSpeedElement.innerHTML = Math.round(response.data.wind.speed) + "km/h";
//   descriptionElement.innerHTML = response.data.weather[0].description;
//   minTempElement.innerHTML = Math.round(response.data.main.temp_min) + "°C";
//   maxTempElement.innerHTML = Math.round(response.data.main.temp_max) + "°C";
//   weatherIconElement.setAttribute(
//     "src",
//     `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
//   );
//   weatherIconElement.setAttribute("alt", response.data.weather[0].description);

//   getFutureForecast(response.data.coord);
// }

// function searchCity(city) {
//   let apiKey = "1cea906f8f3ab268b1c4225a33a9637a";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//   axios.get(apiUrl).then(displayWeatherCondition);
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   let city = document.querySelector("#search-text-input").value;
//   searchCity(city);
// }

// function searchLocation(position) {
//   let apiKey = "1cea906f8f3ab268b1c4225a33a9637a";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

//   axios.get(apiUrl).then(displayWeatherCondition);
// }

// function getCurrentLocation(event) {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition(searchLocation);
// }

// function displayFahrenheit(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature-now");
//   celsiusOption.classList.remove("active");
//   farhenheitOption.classList.add("active");
//   let farhenheitTemp = (celsiusTemperature * 9) / 5 + 32;
//   temperatureElement.innerHTML = Math.round(farhenheitTemp);
// }

// function displayCelsius(event) {
//   event.preventDefault();
//   celsiusOption.classList.add("active");
//   farhenheitOption.classList.remove("active");
//   let temperatureElement = document.querySelector("#temperature-now");
//   temperatureElement.innerHTML = Math.round(celsiusTemperature);
// }

// let celsiusTemperature = null;

// let searchForm = document.querySelector("#search-form");
// searchForm.addEventListener("submit", handleSubmit);

// let currentLocationButton = document.querySelector("#current-location-button");
// currentLocationButton.addEventListener("click", getCurrentLocation);

// let farhenheitOption = document.querySelector("#temperature-f");
// farhenheitOption.addEventListener("click", displayFahrenheit);

// let celsiusOption = document.querySelector("#temperature-c");
// celsiusOption.addEventListener("click", displayCelsius);

// searchCity("Edinburgh");
