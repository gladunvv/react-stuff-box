import React from 'react';
import { Link } from 'react-router-dom';

export const Map = () => {
  return (
    <>
      <div className='map'>
        <Link to='calculator'>Calculator</Link>
        <Link to='weather'>Weather</Link>
      </div>
    </>
  );
};
