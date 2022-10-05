import { useState, useEffect, useContext } from 'react';

import WeatherContext from '../../store/weather-context';
import MapContext from '../../store/map-context';
import CurrentLocationDate from './WeatherInfo/CurrentLocationDate';
import WeatherUnits from './WeatherInfo/WeatherUnits';
import CurrentWeatherInfo from './WeatherInfo/CurrentWeatherInfo';
import HourlyWeatherInfo from './WeatherInfo/HourlyWeatherInfo';
import DailyWeatherInfo from './WeatherInfo/DailyWeatherInfo';
import LoadingSpinner from '.././UI/LoadingSpinner';
import WeatherInfoButtons from './WeatherInfo/WeatherInfoButtons';
import WeatherError from '.././UI/WeatherError';
import WeatherAPIDataType from '../../models/WeatherAPIDataType';
import isErrorType from '../../models/IsErrorType';
import styles from './WeatherInfo.module.css';

type currentInfoType = 'current' | 'hourly' | 'daily';

const WeatherInfo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherAPIDataType>();
  const [currentInfo, setCurrentInfo] = useState<currentInfoType>('current');

  const {
    address,
    lat,
    lon,
    statusIsReady,
    isReady,
    units,
    changeUnits,
    inError,
    changeInError,
  } = useContext(WeatherContext);
  const { zoom, mapLayer } = useContext(MapContext);

  // const serverUrl = 'http://localhost:5001';
  const serverUrl = 'https://weather.marcelojr.tech';

  useEffect(() => {
    const abortController = new AbortController();

    const fetchWeatherInfo = async () => {
      try {
        const response = await fetch(
          `${serverUrl}/api/weather?lat=${lat}&lon=${lon}`,
          { signal: abortController.signal }
        );
        const responseJSON = await response.json();

        if (!response.ok && isErrorType(responseJSON)) {
          throw new Error(responseJSON.error);
        } else {
          const typeNarrowing = (
            response: any
          ): response is WeatherAPIDataType => {
            return (response as WeatherAPIDataType).current.dt !== undefined;
          };
          if (typeNarrowing(responseJSON)) {
            statusIsReady({
              infoIsReady: true,
            });
            setWeatherData(responseJSON);
          }
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          if (error.message !== 'The user aborted a request.'){
            changeInError({
              errorStatus: true,
              errorMessage: error.message,
            });
          }
        }
      }
    };

    if (lat && lon && zoom && mapLayer && !isReady) {
      setIsLoading(true);
      fetchWeatherInfo();
    }

    return () => {
      abortController.abort();
    };
  }, [lat, lon, statusIsReady, zoom, mapLayer, isReady, changeInError]);

  if (isLoading && (isReady || inError.errorStatus)) {
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

  const unitsChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked === true) {
      changeUnits('metric');
    } else {
      changeUnits('imperial');
    }
  };

  return (
    <>
      {isLoading && !isReady && <LoadingSpinner />}
      {inError.errorStatus && <WeatherError errorMessage={inError.errorMessage}/>}
      {!isLoading && weatherData && address && isReady && units && (
        <div className={styles['info-bundle']}>
          <div className={styles['location_units-bundle']}>
            <CurrentLocationDate
              locationData={address}
              weatherData={weatherData}
            />
            <WeatherUnits selectedUnits={units} onChange={unitsChangeHandler} />
          </div>
          <div className={styles['weather-bundle']}>
            {currentInfo === 'current' && (
              <CurrentWeatherInfo currentData={weatherData.current} />
            )}
            {currentInfo === 'hourly' && (
              <HourlyWeatherInfo hourlyData={weatherData.hourly} />
            )}
            {currentInfo === 'daily' && (
              <DailyWeatherInfo dailyData={weatherData.daily} />
            )}
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
