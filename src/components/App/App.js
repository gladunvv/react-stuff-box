import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CalculatorPage } from '../../page/CalculatorPage';
import { Map } from '../Map';

import './App.scss';

export const App = () => {
  return (
    <Router>
      <>
        <Route path='/' exact component={Map} />
        <Route path='/calculator' component={CalculatorPage} />
      </>
    </Router>
  );
};
