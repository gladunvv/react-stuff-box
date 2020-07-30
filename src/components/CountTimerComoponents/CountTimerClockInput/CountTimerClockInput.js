import React from 'react';

import './CountTimerClockInput.scss';

export const CountTimerClockInput = () => {
  return (
    <>
      <div className='count-timer-input'>
        <input
          type='date'
          className='time-to'
          id='time-to'
        />
      </div>
    </>
  );
};
