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
  const [newData, setNewData] = useState<WeatherAPIDataType>();
  const [currentInfo, setCurrentInfo] = useState<currentInfoType>('current');

  const { address, statusIsReady, isReady } = useContext(WeatherContext);
  const { zoom, mapLayer } = useContext(MapContext);

  // const serverUrl = 'http://localhost:5000';
  const serverUrl = 'https://weather-nogueira-app.herokuapp.com';

  useEffect(() => {
    const fetchInfo = () => {
      fetch(`${serverUrl}/api/weather?address=${address}`)
        .then((response) => response.json())
        .then((response) => {
          statusIsReady({
            infoIsReady: true,
          });
          setNewData(response);
        });
    };

    if (address && zoom && mapLayer) {
      setIsLoading(true);
      fetchInfo();
    }
  }, [address, statusIsReady, zoom, mapLayer]);

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
      {!isLoading && newData && isReady && (
        <div className={styles['info-bundle']}>
          <CurrentLocationDate data={newData} />
          <div className={styles['weather-bundle']}>
            {currentInfo === 'current' && <CurrentWeatherInfo currentData={newData.weather.current} />}
            {currentInfo === 'hourly' && <HourlyWeatherInfo hourlyData={newData.weather.hourly} />}
            {currentInfo === 'daily' && <DailyWeatherInfo dailyData={newData.weather.daily}/>}
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
