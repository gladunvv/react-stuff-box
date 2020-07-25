import React, { Component } from 'react';
import { WeatherDisplay } from '../../components/WeatherAppComponents/WeatherDisplay';
import { WeatherNav } from '../../components/WeatherAppComponents/WeatherNav';

import './WeatherAppPage.scss';

const places = [
  { name: 'Moscow', zip: '524894' },
  { name: 'Blagoveshchensk', zip: '576116' },
  { name: 'Svobodnyy', zip: '485449' },
  { name: 'Khabarovsk', zip: '2022890' },
];

export class WeatherAppPage extends Component {
  state = {
    selectedPlace: null,
  };

  onPlaceSelected = (zip) => {
    this.setState({
      selectedPlace: zip,
    });
  };

  render() {
    return (
      <>
        <div className='weather'>
          <div className='weather-wrapper'>
            <h1 className='weather__title'>Weather App</h1>
            <WeatherNav
              weatherPlaces={places}
              onSelect={this.onPlaceSelected}
            />
            <WeatherDisplay zip={this.state.selectedPlace} />
          </div>
        </div>
      </>
    );
  }
}
