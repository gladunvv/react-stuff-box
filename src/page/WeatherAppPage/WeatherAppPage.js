import React from 'react';
import { WeatherDisplay } from '../../components/WeatherAppComponents/WeatherDisplay';

import './WeatherAppPage.scss';

export const WeatherAppPage = () => {
  return (
    <>
      <h1>WeatherApp</h1>
      <WeatherDisplay />
    </>
  );
};
