import React from 'react';
import WeatherCard from './WeatherCard';

const CurrentWeather = ({ data }) => (
  <div className="current-weather">
    <h2>Current Weather</h2>
    <WeatherCard
      date="Today"
      temp={data.temp}
      humidity={data.humidity}
      conditions={data.conditions}
      icon={data.icon}
    />
  </div>
);

export default CurrentWeather;
