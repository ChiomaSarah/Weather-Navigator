import React, { useState } from "react";
import GetWeather from "./GetWeather";

const WeatherShowcase = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null); // State to store error message

  const search = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await GetWeather(query);
        setWeather(data);
        setQuery("");
        setError(null);
      } catch (error) {
        const capitalizedError =
          error.charAt(0).toUpperCase() + error.slice(1) + "!";

        setError(capitalizedError);
        console.log("Error state:", error);
      }
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyDown={search}
      />
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}{" "}
      {weather.main && (
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
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherShowcase;
