import React from 'react';

import WeatherContextProvider from '../store/WeatherContextProvider';
import MapContextProvider from '../store/MapContextProvider';

import WeatherForm from '../components/WeatherForm';
import WeatherInfo from '../components/WeatherInfo';
import WeatherMap from '../components/WeatherMap';

const Weather: React.FC = () => {

  return (
    <div className='main-content'>
      <p>Search for a city and get the weather below.</p>

      <WeatherContextProvider>
        <MapContextProvider>
          <WeatherForm />
          <WeatherInfo />
          <WeatherMap />
        </MapContextProvider>
      </WeatherContextProvider>
    </div>
  );
};

export default Weather;
