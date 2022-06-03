import { useState, useEffect, useContext } from 'react';

import WeatherContext from '../store/weather-context';
import MapContext from '../store/map-context';
import CurrentLocationDate from './WeatherInfo/CurrentLocationDate';
import CurrentWeatherInfo from './WeatherInfo/CurrentWeatherInfo';
import styles from './WeatherInfo.module.css';

import WeatherAPIDataType from '../models/WeatherAPIDataType';

const WeatherInfo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [newData, setNewData] = useState<WeatherAPIDataType>();

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

  return (
    <>
      {isLoading && !isReady && <p>Loading...</p>}
      {!isLoading && newData && isReady && (
        <div className={styles['info-bundle']}>
          <CurrentLocationDate data={newData}/>
          <CurrentWeatherInfo currentData={newData.weather.current} />
        </div>
      )}
    </>
  );
};

export default WeatherInfo;
