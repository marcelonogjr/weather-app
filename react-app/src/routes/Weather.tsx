import React from 'react';

import WeatherContextProvider from '../store/WeatherContextProvider';
import MapContextProvider from '../store/MapContextProvider';

import WeatherForm from '../components/Weather/WeatherForm';
import WeatherInfo from '../components/Weather/WeatherInfo';
import styles from './Weather.module.css';

const Weather: React.FC = () => {

  return (
    <div className={styles['weather-main']}>
      <WeatherContextProvider>
        <MapContextProvider>
          <WeatherForm />
          <WeatherInfo />
        </MapContextProvider>
      </WeatherContextProvider>
    </div>
  );
};

export default Weather;
