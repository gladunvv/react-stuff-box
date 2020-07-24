import React from 'react';
import { WeatherDisplay } from '../../components/WeatherAppComponents/WeatherDisplay';
import { WeatherNav } from '../../components/WeatherAppComponents/WeatherNav';

import './WeatherAppPage.scss';

const PLACES = [
  { name: 'Moscow', zip: '524894' },
  { name: 'Blagoveshchensk', zip: '576116' },
  { name: 'Svobodnyy', zip: '485449' },
  { name: 'Khabarovsk', zip: '2022890' },
];

export const WeatherAppPage = () => {
  return (
    <>
      <h1>WeatherApp</h1>
      select the city
      <WeatherNav PLACES={PLACES} />
      <WeatherDisplay key={1} zip={PLACES[1].zip} />
    </>
  );
};
