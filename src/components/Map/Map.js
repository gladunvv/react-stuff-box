import React from 'react';
import { Link } from 'react-router-dom';

import './Map.scss';

export const Map = () => {
  return (
    <>
      <div className='map'>
        <Link to='calculator'>Calculator</Link>
        <Link to='weather'>Weather</Link>
        <Link to='countdowntimer'>Countdown Timer</Link>
      </div>
    </>
  );
};
