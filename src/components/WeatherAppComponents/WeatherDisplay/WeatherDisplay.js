import React, { Component } from 'react';

import './WeatherDisplay.scss';

export class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
    };
  }
  componentDidUpdate() {
    const zip = this.props.zip;
    const URL = `http://api.openweathermap.org/data/2.5/weather?id=${zip}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric`;
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ weatherData: json });
      });
  }

  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = `http://openweathermap.org/img/w/${weather.icon}.png`;
    return (
      <div className='weather-place'>
        <div className='weather-place__title'>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </div>
        <p>Current: {weatherData.main.temp}°</p>
        <p>High: {weatherData.main.temp_max}°</p>
        <p>Low: {weatherData.main.temp_min}°</p>
        <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
      </div>
    );
  }
}
