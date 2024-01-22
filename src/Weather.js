/* eslint-disable require-jsdoc */
import React, {useState, useEffect} from 'react';
import './App.css';

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=b0bc07f93f82561334de9a81576f9b3f&units=metric')
        .then((response) => response.json())
        .then((data) => setWeather(data))
        .catch((error) => console.error(error));
  }, []);

  if (!weather) {
    return <div>Loading weather...</div>;
  }

  const temperature = Math.round(weather.main.temp);
  const iconCode = weather.weather[0].icon;
  const isCloudy = iconCode.includes('d');
  const icon = isCloudy ? '🌥️' : '🌞';

  return (
    <div className="App-header">
      <div style={{marginRight: '15px'}}>{icon}</div>
      <div>{temperature} °C</div>
    </div>
  );
}
