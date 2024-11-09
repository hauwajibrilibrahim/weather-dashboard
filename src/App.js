import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import WeeklyForecast from './components/WeeklyForecast';
import WeatherDetails from './components/WeatherDetails';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weeklyForecast, setWeeklyForecast] = useState([]);
  const [details, setDetails] = useState({});
  const [bgClass, setBgClass] = useState('default');

  const fetchWeatherData = async (location) => {
    const apiKey = '71964ffa5fcb649473cc5af84cb51e82';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;

    try {
      const weatherResponse = await axios.get(weatherUrl);
      const forecastResponse = await axios.get(forecastUrl);

      const weatherData = weatherResponse.data;
      setCurrentWeather({
        temp: weatherData.main.temp,
        humidity: weatherData.main.humidity,
        conditions: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
      });
      setDetails({
        wind: weatherData.wind.speed,
        pressure: weatherData.main.pressure,
        visibility: weatherData.visibility,
      });

      const weeklyData = forecastResponse.data.list.filter((_, index) => index % 8 === 0).map((forecast) => ({
        date: new Date(forecast.dt * 1000).toLocaleDateString(),
        temp: forecast.main.temp,
        humidity: forecast.main.humidity,
        conditions: forecast.weather[0].description,
        icon: forecast.weather[0].icon,
      }));
      setWeeklyForecast(weeklyData);

      setBgClass(weatherData.weather[0].main.toLowerCase());
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData('Nigeria'); // Default location
  }, []);

  return (
    <div className={`app ${bgClass}`}>
      <h1>Weather Outlook</h1>
      <SearchBar onSearch={fetchWeatherData} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {weeklyForecast.length > 0 && <WeeklyForecast forecast={weeklyForecast} />}
      {details && <WeatherDetails data={details} />}
    </div>
  );
}

export default App;
