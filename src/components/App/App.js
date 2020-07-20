import React from 'react';
import { Route } from 'react-router-dom';
import { CalculatorPage } from '../../page/CalculatorPage';
import { WeatherAppPage } from '../../page/WeatherAppPage';
import { Map } from '../Map';

import './App.scss';

export const App = () => {
  return (
    <>
      <div className='container'>
        <Route path='/' exact component={Map} />
        <Route path='/calculator' component={CalculatorPage} />
        <Route path='/weather' component={WeatherAppPage} />
      </div>
    </>
  );
};
