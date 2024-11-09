import React from 'react';
import WeatherCard from './WeatherCard';

const WeeklyForecast = ({ forecast }) => (
  <div className="weekly-forecast">
    <h2>Weekly Forecast</h2>
    <div className="forecast-cards">
      {forecast.map((day, index) => (
        <WeatherCard
          key={index}
          date={day.date}
          temp={day.temp}
          humidity={day.humidity}
          conditions={day.conditions}
          icon={day.icon}
        />
      ))}
    </div>
  </div>
);

export default WeeklyForecast;
