import React, { Component } from 'react';

import './CountTimerClockInput.scss';

export class CountTimerClockInput extends Component {
  state = {
    value: '',
  };

  hundleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { startTimer } = this.props;
    const { value } = this.state;
    if (value) {
      startTimer(value);
    }
    return (
      <>
        <div className='count-timer-input'>
          <input
            type='date'
            className='time-to'
            id='time-to'
            onChange={this.hundleChange}
          />
        </div>
      </>
    );
  }
}
