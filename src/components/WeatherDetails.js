import React from 'react';

const WeatherDetails = ({ data }) => (
  <div className="weather-details">
    <h2>Weather Details</h2>
    <p>Wind Speed: {data.wind} m/s</p>
    <p>Pressure: {data.pressure} hPa</p>
    <p>Visibility: {data.visibility / 1000} km</p>
  </div>
);

export default WeatherDetails;
