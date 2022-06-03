import { CurrentAPIDataType } from '../../models/WeatherAPIDataType';
import styles from './CurrentWeatherInfo.module.css';
import TimeConversor, {
  timeConversorObjectType
} from '../../others/time-conversor';

interface CurrentWeatherInfoProps {
  currentData: CurrentAPIDataType;
};

const CurrentWeatherInfo = (props: CurrentWeatherInfoProps) => {

  const timeInfo = (timeConversorObject: timeConversorObjectType) => {
    return (
      <b>
        {timeConversorObject.hour > 9 ? timeConversorObject.hour : '0'+timeConversorObject.hour}:
        {timeConversorObject.minute > 9 ? timeConversorObject.minute : '0'+timeConversorObject.minute}
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
      <p>Temperature: {Math.round(props.currentData.temp)}°C</p>
      <p>Feels Like: {Math.round(props.currentData.feels_like)}°C</p>
      <p>Dew Point: {Math.round(props.currentData.dew_point)}°C</p>
      <p>Humidity: {Math.round(props.currentData.humidity)}%</p>
      <p>Cloudiness: {Math.round(props.currentData.clouds)}%</p>
      <p>Pressure: {Math.round(props.currentData.pressure)} mb</p>
      <p>UV index: {Math.round(props.currentData.uvi)}</p>
      <p>Average Visibility: {Math.round(props.currentData.visibility)} m</p>
      <p>Wind Speed: {Math.round(props.currentData.wind_speed)} m/s</p>
      <p>Wind Direction: {Math.round(props.currentData.wind_deg)}°</p>
    </div>
  );
};

export default CurrentWeatherInfo;
