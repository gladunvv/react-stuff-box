import React from 'react';
import { CalculatorKey } from '../../components/CalculatorComponents/CalculatorKey';

import './CalculatorPage.scss';

export const CalculatorPage = () => {
  return (
    <>
      <div className='calculator'>
        <div className='calculate-wrapper'>
          <div className='calculate-keys'>
            <div className='calculate-left-block'>
              <div className='calculate-functions'>
                <CalculatorKey typeKey='key-numbers' symb='AC' />
                <CalculatorKey typeKey='key-numbers' symb='±' />
                <CalculatorKey typeKey='key-numbers' symb='%' />
              </div>
              <div className='calculate-numbers'>
                <CalculatorKey typeKey='key-numbers' symb='1' />
                <CalculatorKey typeKey='key-numbers' symb='2' />
                <CalculatorKey typeKey='key-numbers' symb='3' />
                <CalculatorKey typeKey='key-numbers' symb='4' />
                <CalculatorKey typeKey='key-numbers' symb='5' />
                <CalculatorKey typeKey='key-numbers' symb='6' />
                <CalculatorKey typeKey='key-numbers' symb='7' />
                <CalculatorKey typeKey='key-numbers' symb='8' />
                <CalculatorKey typeKey='key-numbers' symb='9' />
                <CalculatorKey typeKey='key-numbers' symb='0' />
              </div>
            </div>
            <div className='calculate-operations'>
              <CalculatorKey typeKey='key-operations' symb='÷' />
              <CalculatorKey typeKey='key-operations' symb='×' />
              <CalculatorKey typeKey='key-operations' symb='−' />
              <CalculatorKey typeKey='key-operations' symb='+' />
              <CalculatorKey typeKey='key-operations' symb='=' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
