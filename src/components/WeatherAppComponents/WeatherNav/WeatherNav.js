import React from 'react';

import './WeatherNav.scss';

export const WeatherNav = ({ weatherPlaces, onSelect }) => {
  const places = weatherPlaces.map((place, index) => (
    <li
      className='weather-nav__item'
      key={place.zip}
      onClick={() => onSelect(place.zip)}
    >
      {place.name}
    </li>
  ));
  return <ul className='weather-nav '>{places}</ul>;
};
