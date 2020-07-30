import React from 'react';

import './CountTimerClockInput.scss';

export const CountTimerClockInput = () => {
  return (
    <>
      <div className='count-timer-input'>
        <input
          type='date'
          name='time-to'
          className='time-to'
          id='time-to'
          value=''
        />
      </div>
    </>
  );
};
