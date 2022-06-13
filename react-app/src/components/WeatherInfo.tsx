import { useState, useEffect, useContext } from 'react';

import WeatherContext from '../store/weather-context';
import MapContext from '../store/map-context';
import CurrentLocationDate from './WeatherInfo/CurrentLocationDate';
import CurrentWeatherInfo from './WeatherInfo/CurrentWeatherInfo';
import LoadingSpinner from './UI/LoadingSpinner';
import WeatherInfoButtons from './WeatherInfo/WeatherInfoButtons';
import styles from './WeatherInfo.module.css';

import WeatherAPIDataType from '../models/WeatherAPIDataType';
import HourlyWeatherInfo from './WeatherInfo/HourlyWeatherInfo';
import DailyWeatherInfo from './WeatherInfo/DailyWeatherInfo';
 

type currentInfoType = 'current' | 'hourly' | 'daily';

const WeatherInfo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherAPIDataType>();
  const [currentInfo, setCurrentInfo] = useState<currentInfoType>('current');

  const { address, lat, lon, statusIsReady, isReady } = useContext(WeatherContext);
  const { zoom, mapLayer } = useContext(MapContext);

  // const serverUrl = 'http://localhost:5000';
  const serverUrl = 'https://weather-nogueira-app.herokuapp.com';

  useEffect(() => {
    const fetchWeatherInfo = () => {
      fetch(`${serverUrl}/api/weather?lat=${lat}&lon=${lon}`)
        .then((response) => response.json())
        .then((response) => {
          statusIsReady({
            infoIsReady: true,
          });
          setWeatherData(response);
        });
    };

    if (lat && lon && zoom && mapLayer) {
      setIsLoading(true);
      fetchWeatherInfo();
    }
  }, [lat, lon, statusIsReady, zoom, mapLayer]);

  if (isLoading && isReady) {
    setIsLoading(false);
  }

  const onClickCurrentButtonHandler = () => {
    setCurrentInfo('current');
  };

  const onClickHourlyButtonHandler = () => {
    setCurrentInfo('hourly');
  };

  const onClickDailyButtonHandler = () => {
    setCurrentInfo('daily');
  };

  return (
    <>
      {isLoading && !isReady && <LoadingSpinner />}
      {!isLoading && weatherData && address && isReady && (
        <div className={styles['info-bundle']}>
          <CurrentLocationDate locationData={address} weatherData={weatherData} />
          <div className={styles['weather-bundle']}>
            {currentInfo === 'current' && <CurrentWeatherInfo currentData={weatherData.current} />}
            {currentInfo === 'hourly' && <HourlyWeatherInfo hourlyData={weatherData.hourly} />}
            {currentInfo === 'daily' && <DailyWeatherInfo dailyData={weatherData.daily}/>}
            <WeatherInfoButtons
              onCurrentClick={onClickCurrentButtonHandler}
              onHourlyClick={onClickHourlyButtonHandler}
              onDailyClick={onClickDailyButtonHandler}
              currentlyActive={currentInfo}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherInfo;
