import React, { Component } from 'react';
import { CalculatorKey } from '../../components/CalculatorComponents/CalculatorKey';
import { CalculatorDisplay } from '../../components/CalculatorComponents/CalculatorDisplay';
import { calculate } from './CalculatorLogic/calculate';

import './CalculatorPage.scss';

export class CalculatorPage extends Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = (buttonName) => {
    console.log('buttonName :>> ', buttonName);
    console.log('object :>> ', this.state.total);
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <>
        <div className='calculator'>
          <div className='calculate-wrapper'>
            <CalculatorDisplay />
            <div className='calculate-keys'>
              <div className='calculate-left-block'>
                <div className='calculate-functions'>
                  <CalculatorKey
                    clickHandler={this.handleClick}
                    typeKey='key-numbers'
                    symb='AC'
                  />
                  <CalculatorKey
                    clickHandler={this.handleClick}
                    typeKey='key-numbers'
                    symb='±'
                  />
                  <CalculatorKey
                    clickHandler={this.handleClick}
                    typeKey='key-numbers'
                    symb='%'
                  />
                </div>
                <div className='calculate-numbers'>
                  <CalculatorKey
                    clickHandler={this.handleClick}
                    typeKey='key-numbers'
                    symb='1'
                  />
                  <CalculatorKey
                    clickHandler={this.handleClick}
                    typeKey='key-numbers'
                    symb='2'
                  />
                  <CalculatorKey
                    clickHandler={this.handleClick}
                    typeKey='key-numbers'
                    symb='3'
                  />
                  <CalculatorKey
                    clickHandler={this.handleClick}
                    typeKey='key-numbers'
                    symb='4'
                  />
                  <CalculatorKey
                    clickHandler={this.handleClick}
                    typeKey='key-numbers'
                    symb='5'
                  />
                  <CalculatorKey
                    clickHandler={this.handleClick}
                    typeKey='key-numbers'
                    symb='6'
                  />
                  <CalculatorKey
                    clickHandler={this.handleClick}
                    typeKey='key-numbers'
                    symb='7'
                  />
                  <CalculatorKey
                    clickHandler={this.handleClick}
                    typeKey='key-numbers'
                    symb='8'
                  />
                  <CalculatorKey
                    clickHandler={this.handleClick}
                    typeKey='key-numbers'
                    symb='9'
                  />
                  <CalculatorKey
                    clickHandler={this.handleClick}
                    typeKey='key-numbers'
                    symb='0'
                  />
                </div>
              </div>
              <div className='calculate-operations'>
                <CalculatorKey
                  clickHandler={this.handleClick}
                  typeKey='key-operations'
                  symb='÷'
                />
                <CalculatorKey
                  clickHandler={this.handleClick}
                  typeKey='key-operations'
                  symb='×'
                />
                <CalculatorKey
                  clickHandler={this.handleClick}
                  typeKey='key-operations'
                  symb='-'
                />
                <CalculatorKey
                  clickHandler={this.handleClick}
                  typeKey='key-operations'
                  symb='+'
                />
                <CalculatorKey
                  clickHandler={this.handleClick}
                  typeKey='key-operations'
                  symb='='
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
