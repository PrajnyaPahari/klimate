import React, { useState } from "react";
//import axios from "axios";
import { fetchData } from "./api/fetchData";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      
      const data = await fetchData(query);
      
      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <h2 className="title-Text">
        KLIMATE<sup>the weather app</sup>
      </h2>
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main &&(
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
      {weather.main &&(
        <div className="extra-content">
          <div className="text-styling">
            Feels Like : {weather.main.feels_like}&deg;C &nbsp; Minimum :{" "}
            {weather.main.temp_min}&deg;C&nbsp; Maximum :{" "}
            {weather.main.temp_max}&deg;C&nbsp; Pressure :{" "}
            {weather.main.pressure}mb&nbsp; Humidity : {weather.main.humidity}
            %&nbsp;
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
