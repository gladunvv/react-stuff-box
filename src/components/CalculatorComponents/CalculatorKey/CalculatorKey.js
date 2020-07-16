import React, { Component } from 'react';
import cn from 'classnames';

import './CalculatorKey.scss';

export class CalculatorKey extends Component {
  handleClick = () => {
    this.props.clickHandler(this.props.symb);
  };
  render() {
    const { symb, typeKey } = this.props;
    const classKey = cn('key-calculate', typeKey);
    return (
      <>
        <div onClick={this.handleClick} className={classKey}>
          {symb}
        </div>
      </>
    );
  }
}
