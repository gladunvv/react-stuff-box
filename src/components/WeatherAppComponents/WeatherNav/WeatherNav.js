import React from 'react';

import './WeatherNav.scss';

export const WeatherNav = ({ PLACES }) => {
  const places = PLACES.map((place, index) => (
    <li key={place.zip}>{place.name}</li>
  ));
  return <ul>{places}</ul>;
};
