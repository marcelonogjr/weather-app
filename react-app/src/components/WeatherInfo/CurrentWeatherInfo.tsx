import { useContext } from 'react';

import WeatherContext from '../../store/weather-context';
import { CurrentAPIDataType } from '../../models/WeatherAPIDataType';
import styles from './CurrentWeatherInfo.module.css';
import TimeConversor, {
  TimeConversorObjectType
} from '../../others/time-conversor';
import unitsConversor from '../../others/units-conversor';
import SvgWeatherIcons from './icons/WeatherIcons';
import SvgHumidityIcon from './icons/HumidityIcon';

interface CurrentWeatherInfoProps {
  currentData: CurrentAPIDataType;
};

const CurrentWeatherInfo = (props: CurrentWeatherInfoProps) => {
  const { units } = useContext(WeatherContext);

  const timeInfo = (timeConversorObject: TimeConversorObjectType) => {
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
      <p>Temperature: {unitsConversor(units, 'temp', props.currentData.temp)}</p>
      <p>Feels Like: {unitsConversor(units, 'temp', props.currentData.feels_like)}</p>
      <p>Dew Point: {unitsConversor(units, 'temp', props.currentData.dew_point)}</p>
      <p>Humidity: {props.currentData.humidity}%</p>
      <SvgHumidityIcon humidityValue={props.currentData.humidity} component='current'/>
      <p>Cloudiness: {Math.round(props.currentData.clouds)}%</p>
      <p>Pressure: {Math.round(props.currentData.pressure)} mb</p>
      <p>UV index: {Math.round(props.currentData.uvi)}</p>
      <p>Average Visibility: {unitsConversor(units, 'lenght', props.currentData.visibility)}</p>
      <p>Wind Speed: {unitsConversor(units, 'speed', props.currentData.wind_speed)}</p>
      <p>Wind Direction: {Math.round(props.currentData.wind_deg)}°</p>
    </div>
  );
};

export default CurrentWeatherInfo;
