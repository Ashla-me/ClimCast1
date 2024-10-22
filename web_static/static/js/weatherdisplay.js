import React from 'react';

function WeatherDisplay({ weather }) {
  return (
    <div className="weather-display">
      <h2>Weather in {weather.city}, {weather.country}</h2>
      <p>Current Temperature: {weather.temperature}°C</p>
      <p>Condition: {weather.condition}</p>
      <img src={weather.icon} alt="Weather icon" />

      <div className="forecast">
        <h3>2-Day Forecast</h3>
        {weather.forecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>Date: {day.date}</p>
            <p>Max Temperature: {day.day.maxtemp_c}°C</p>
            <p>Min Temperature: {day.day.mintemp_c}°C</p>
            <p>Condition: {day.day.condition.text}</p>
            <img src={day.day.condition.icon} alt="Weather icon" />
          </div>
        ))}
      </div>
    </div>
  );
}