import React, { Component } from 'react';
import { CountTimerClockInput } from '../../components/CountTimerComoponents/CountTimerClockInput';
import { CountTimerDisplay } from '../../components/CountTimerComoponents/CountTimerDisplay';

import './CountTimerPage.scss';

export class CountTimerPage extends Component {
  state = {
    intervalId: '',
    days: 'T',
    hours: 'I',
    minutes: 'M',
    seconds: 'E',
  };

  useInterval = (date) => {
    const intervalStart = setInterval(() => {
      let toDate = new Date(date).getTime();
      let now = new Date().getTime();
      let distance = toDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(this.useInterval);
      } else {
        this.setState({ days, hours, minutes, seconds });
      }
    }, 1000);
    this.setState({ intervalId: intervalStart });
  };

  countDown = (date) => {
    clearInterval(this.state.intervalId);
    this.useInterval(date);
  };

  render() {
    const time = this.state;
    return (
      <>
        <div className='count-timer'>
          <h1>Countdown timer page</h1>
          <CountTimerClockInput startTimer={this.countDown} />
          <CountTimerDisplay timeDown={time} />
        </div>
      </>
    );
  }
}
