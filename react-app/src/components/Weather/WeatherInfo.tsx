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
  const [mapImage, setMapImage] = useState<undefined | string>();
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
    const infoAbortController = new AbortController();
    const mapAbortController = new AbortController();

    const fetchWeatherInfo = async () => {
      try {
        const response = await fetch(
          `${serverUrl}/api/weather?lat=${lat}&lon=${lon}`,
          { signal: infoAbortController.signal }
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
          if (error.message !== 'The user aborted a request.') {
            changeInError({
              errorStatus: true,
              errorMessage: error.message,
            });
          }
        }
      }
    };

    const fetchMap = async () => {
      try {
        const res = await fetch(`${serverUrl}/api/weather-map?lat=${lat}&lon=${lon}&zoom=${zoom}&map__type=${mapLayer}`, { signal: mapAbortController.signal });
        if (!res.ok) {
          const resJSON = await res.json();
          if (isErrorType(resJSON)) {
            throw new Error(resJSON.error);
          } else {
            throw new Error(
              'Something went wrong! Try again later or, if the problem persists, please contact the development team.'
            );
          }
        } else {
          const imageBlob = await res.blob();
          const imageObjectURL = URL.createObjectURL(imageBlob);
          setMapImage(imageObjectURL);
          statusIsReady({
            mapIsReady: true,
          });
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
      fetchMap();
    }

    return () => {
      infoAbortController.abort();
      mapAbortController.abort();
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
      {inError.errorStatus && (
        <WeatherError errorMessage={inError.errorMessage} />
      )}
      {!isLoading && weatherData && address && isReady && units && (
        <div className={styles['info-bundle']}>
          <div className={styles['location_units-bundle']}>
            <CurrentLocationDate
              locationData={address}
              weatherData={weatherData}
            />
            <WeatherUnits selectedUnits={units} onChange={unitsChangeHandler} />
          </div>
          <WeatherInfoButtons
            onCurrentClick={onClickCurrentButtonHandler}
            onHourlyClick={onClickHourlyButtonHandler}
            onDailyClick={onClickDailyButtonHandler}
            currentlyActive={currentInfo}
          />
          <div className={styles['weather-bundle']}>
            {currentInfo === 'current' && (
              <CurrentWeatherInfo currentData={weatherData.current} mapImage={mapImage}/>
            )}
            {currentInfo === 'hourly' && (
              <HourlyWeatherInfo hourlyData={weatherData.hourly} />
            )}
            {currentInfo === 'daily' && (
              <DailyWeatherInfo dailyData={weatherData.daily} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherInfo;
