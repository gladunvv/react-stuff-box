import React from 'react';

import './CalculatorDisplay.scss';

export const CalculatorDisplay = ({ value }) => {
  return (
    <>
      <div className='calculator-display'>{value}</div>
    </>
  );
};
