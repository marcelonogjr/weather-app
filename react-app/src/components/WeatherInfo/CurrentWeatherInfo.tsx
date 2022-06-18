import { useContext } from 'react';

import WeatherContext from '../../store/weather-context';
import { CurrentAPIDataType } from '../../models/WeatherAPIDataType';
import styles from './CurrentWeatherInfo.module.css';
import TimeConversor, {
  timeConversorObjectType
} from '../../others/time-conversor';
import SvgWeatherIcons from './svg-icons';

interface CurrentWeatherInfoProps {
  currentData: CurrentAPIDataType;
};

const CurrentWeatherInfo = (props: CurrentWeatherInfoProps) => {
  const { units } = useContext(WeatherContext);

  const timeInfo = (timeConversorObject: timeConversorObjectType) => {
    return (
      <b>
        {timeConversorObject.hour.hour > 9 ? timeConversorObject.hour.hour : '0'+timeConversorObject.hour.hour}:
        {timeConversorObject.minute > 9 ? timeConversorObject.minute : '0'+timeConversorObject.minute} {timeConversorObject.hour.period}
      </b>
    );
  };

  const locationSunrise = timeInfo(TimeConversor(props.currentData.sunrise).time);
  const locationSunset = timeInfo(TimeConversor(props.currentData.sunset).time);
  
  return (
    <div className={styles['current-bundle']}>
      <p>Sunrise: {locationSunrise}</p>
      <p>Sunset: {locationSunset}</p>
      <p>Weather: {props.currentData.weather[0].main}</p>
      <SvgWeatherIcons iconCode={props.currentData.weather[0].icon} descriptionCode={props.currentData.weather[0].description}/>
      <p>Temperature: {Math.round(props.currentData.temp)}{units === 'metric' ? '°C' : '°F'}</p>
      <p>Feels Like: {Math.round(props.currentData.feels_like)}{units === 'metric' ? '°C' : '°F'}</p>
      <p>Dew Point: {Math.round(props.currentData.dew_point)}{units === 'metric' ? '°C' : '°F'}</p>
      <p>Humidity: {Math.round(props.currentData.humidity)}%</p>
      <p>Cloudiness: {Math.round(props.currentData.clouds)}%</p>
      <p>Pressure: {Math.round(props.currentData.pressure)} mb</p>
      <p>UV index: {Math.round(props.currentData.uvi)}</p>
      <p>Average Visibility: {units === 'metric' ? `${Math.round(props.currentData.visibility)} m` : `${Math.round(props.currentData.visibility * 15625 / 251460) / 100} mi.`}</p>
      <p>Wind Speed: {Math.round(props.currentData.wind_speed)} {units === 'metric' ? 'm/s' : 'mi./h'}</p>
      <p>Wind Direction: {Math.round(props.currentData.wind_deg)}°</p>
    </div>
  );
};

export default CurrentWeatherInfo;
