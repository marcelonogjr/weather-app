import React from 'react';

import WeatherContextProvider from '../store/WeatherContextProvider';
import MapContextProvider from '../store/MapContextProvider';

import WeatherForm from '../components/Weather/WeatherForm';
import WeatherInfo from '../components/Weather/WeatherInfo';
import WeatherMap from '../components/Weather/WeatherMap';
import styles from './Weather.module.css';

const Weather: React.FC = () => {

  return (
    <div className={styles['weather-main']}>
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
