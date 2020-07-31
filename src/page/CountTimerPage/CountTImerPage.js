import React, { Component } from 'react';
import { CountTimerClockInput } from '../../components/CountTimerComoponents/CountTimerClockInput';
import { CountTimerDisplay } from '../../components/CountTimerComoponents/CountTimerDisplay';

import './CountTimerPage.scss';

export class CountTimerPage extends Component {
  countDown = (date) => {
    let toDate = new Date(date).getTime();
    let now = new Date().getTime();
    let distance = toDate - now;

    console.log('distance :>> ', now);

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log('days :>> ', days);
  };
  render() {
    return (
      <>
        <div className='count-timer'>
          <h1>Countdown timer page</h1>
          <CountTimerClockInput startTimer={this.countDown} />
          <CountTimerDisplay />
        </div>
      </>
    );
  }
}
