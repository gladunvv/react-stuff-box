import React from 'react';
import { CountTimerClockInput } from '../../components/CountTimerComoponents/CountTimerClockInput';
import { CountTimerDisplay } from '../../components/CountTimerComoponents/CountTimerDisplay';

import './CountTimerPage.scss';

export const CountTimerPage = () => {
  return (
    <>
      <div className='count-timer'>
        <h1>Countdown timer page</h1>
        <CountTimerClockInput />
        <CountTimerDisplay />
      </div>
    </>
  );
};
