import React from 'react';
import cn from 'classnames';

import './CalculatorKey.scss';

export const CalculatorKey = ({ symb, typeKey }) => {
  const classKey = cn('key-calculate', typeKey);
  return (
    <>
      <div className={classKey}>{symb}</div>
    </>
  );
};
