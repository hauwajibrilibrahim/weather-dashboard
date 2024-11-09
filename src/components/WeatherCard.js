import React from 'react';
import IconComponent from './IconComponent';

const WeatherCard = ({ date, temp, humidity, conditions, icon }) => (
    <div className="weather-card">
        <h3>{date}</h3>
        <IconComponent icon={icon} />
        <p>Temp: {temp}°C</p>
        <p>Humidity: {humidity}%</p>
        <p>{conditions}</p>
    </div>
  
);

export default WeatherCard;
