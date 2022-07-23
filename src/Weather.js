import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "San Francisco",
    temperature: 55,
    date: "Friday 10:00",
    description: "Overcast",
    humidity: 90,
    wind: 11,
    imgUrl: "http://openweathermap.org/img/wn/04d@2x.png",
  };

  return (
    <div className="weather-app-wrapper">
      <div className="weather-app">
        <form className="mb-3">
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Search city"
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-light w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>{weatherData.date}</li>
              <li>{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind Speed: {weatherData.wind}</li>
            </ul>
          </div>
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <div className="float-right">
                <img src={weatherData.imgUrl} alt="cloudy" id="icon" />
                <strong>{weatherData.temperature}</strong>
                <span className="units"> °F</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
