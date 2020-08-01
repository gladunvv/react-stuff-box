import React from 'react';

import './CountTimerDisplay.scss';

export const CountTimerDisplay = ({ timeDown }) => {
  return (
    <>
      <div className='count-timer-display'>
        <div className='clock-column'>
          <p className='clock-timer'>{timeDown.days}</p>
          <p className='clock-label'>Days</p>
        </div>

        <div className='clock-column'>
          <p className='clock-timer'>{timeDown.hours}</p>
          <p className='clock-label'>Hours</p>
        </div>

        <div className='clock-column'>
          <p className='clock-timer'>{timeDown.minutes}</p>
          <p className='clock-label'>Minutes</p>
        </div>

        <div className='clock-column'>
          <p className='clock-timer'>{timeDown.seconds}</p>
          <p className='clock-label'>Seconds</p>
        </div>
      </div>
    </>
  );
};
