import React from 'react';

import './CountTimerDisplay.scss';

export const CountTimerDisplay = () => {
  return (
    <>
      <div className='count-timer-display'>
        <div className='clock-column'>
          <p className='clock-timer'>2</p>
          <p className='clock-label'>Days</p>
        </div>

        <div className='clock-column'>
          <p className='clock-timer'>12</p>
          <p className='clock-label'>Hours</p>
        </div>

        <div className='clock-column'>
          <p className='clock-timer'>03</p>
          <p className='clock-label'>Minutes</p>
        </div>

        <div className='clock-column'>
          <p className='clock-timer'>12</p>
          <p className='clock-label'>Seconds</p>
        </div>
      </div>
    </>
  );
};
