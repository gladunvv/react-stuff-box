import React, { Component } from 'react';

import './CountTimerClockInput.scss';

export class CountTimerClockInput extends Component {
  handleChange = (event, startTimer) => {
    const x = event.target.value;
    startTimer(x);
  };

  render() {
    const { startTimer } = this.props;

    return (
      <>
        <div className='count-timer-input'>
          <input
            type='datetime-local'
            className='time-to'
            id='time-to'
            onChange={(event) => this.handleChange(event, startTimer)}
          />
        </div>
      </>
    );
  }
}
