import { useContext } from 'react';

import WeatherContext from '../../store/weather-context';
import { HourlyAPIDataType } from '../../models/WeatherAPIDataType';
import styles from './HourlyWeatherInfo.module.css';
import TimeConversor, {
  timeConversorObjectType,
  dateConversorObjectType
} from '../../others/time-conversor';

interface HourlyWeatherInfoProps {
  hourlyData: HourlyAPIDataType;
};

const HourlyWeatherInfo = (props: HourlyWeatherInfoProps) => {
  const { units } = useContext(WeatherContext);

  const timeInfo = (timeConversorObject: timeConversorObjectType) => {
    return (
      <b>
        {timeConversorObject.hour.hour > 9 ? timeConversorObject.hour.hour : '0'+timeConversorObject.hour.hour}:
        {timeConversorObject.minute > 9 ? timeConversorObject.minute : '0'+timeConversorObject.minute} {timeConversorObject.hour.period}
      </b>
    );
  };
  const dateInfo = (dateConversorObject: dateConversorObjectType) => {
    return (
      <>
        {dateConversorObject.month.numb > 9 ? dateConversorObject.month.numb : '0'+dateConversorObject.month.numb}/
        {dateConversorObject.day > 9 ? dateConversorObject.day : '0' + dateConversorObject.day}/
        {dateConversorObject.year > 9 ? dateConversorObject.year : '0' + dateConversorObject.year}
      </>
    );
  };

  const maxTemperatureHourly: number = Math.round([...props.hourlyData].map((element) => element.temp).reduce((previousTemp, currentTemp) => {
    return Math.max(previousTemp, currentTemp);
  }));
  const minTemperatureHourly: number = Math.round([...props.hourlyData].map((element) => element.temp).reduce((previousTemp, currentTemp) => {
    return Math.min(previousTemp, currentTemp);
  }));
  const rangeTemperatureHourly: number = maxTemperatureHourly-minTemperatureHourly;

  const styleLiWidth = 7000 / props.hourlyData.length;
  const styleLiHeight =250;
  
  const hourlyList = props.hourlyData.map((hourElement, index, hourlyArray) => {
    if (index === 0) {
      return <li key={hourElement.dt+'null'}></li>
    }
    const widthCorrection = 1 * Math.sqrt((100*styleLiWidth/styleLiHeight) ** 2 + (( 95 - (80 * (Math.round(hourlyArray[index-1].temp) - minTemperatureHourly) / rangeTemperatureHourly)) - (95 - (80* (Math.round(hourElement.temp) - minTemperatureHourly) / rangeTemperatureHourly))) ** 2) / (100*styleLiWidth/styleLiHeight);
    
    const hourlyTime = timeInfo(TimeConversor(hourElement.dt).time);
    const hourlyDate = dateInfo(TimeConversor(hourElement.dt).date);
    const graphLiStyle: React.CSSProperties = {
      width: `${styleLiWidth}px`,
      height: `${styleLiHeight}px`,
      clipPath: `polygon(
        0% calc(95% - ${(80 * (Math.round(hourlyArray[index-1].temp) - minTemperatureHourly) / rangeTemperatureHourly)}%), 
        100% calc(95% - ${80 * (Math.round(hourElement.temp) - minTemperatureHourly) / rangeTemperatureHourly}%), 
        100% calc(95% - ${80 * (Math.round(hourElement.temp) - minTemperatureHourly) / rangeTemperatureHourly}% + ${widthCorrection}%), 
        0% calc(95% - ${(80 * (Math.round(hourlyArray[index-1].temp) - minTemperatureHourly) / rangeTemperatureHourly)}% + ${widthCorrection}%))`
    };
    const pTemperatureStyle: React.CSSProperties = {
      right: `-20px`,
      top: `calc(95% - ${80 * (Math.round(hourElement.temp) - minTemperatureHourly) / rangeTemperatureHourly}% + 0.5% - 37.5px)`
    };
    const divCircleStyle: React.CSSProperties = {
      right: `-4px`,
      top: `calc(95% - ${80 * (Math.round(hourElement.temp) - minTemperatureHourly) / rangeTemperatureHourly}% + 0.5% - 4px)`
    };
    const divInfoStyle: React.CSSProperties = {
      width: `${styleLiWidth}px`,
      top: `calc(95% - ${80 * (Math.round(hourElement.temp) - minTemperatureHourly) / rangeTemperatureHourly}% + 0.5% + 20px)`,
      right: `${styleLiWidth * (- 0.5)}px`,
    };

    return (
        <li id={styles['hourly-graph']} key={`li-key_${hourElement.dt}`}>
          <div className={styles['graph-lines']} style={graphLiStyle}>
          </div>
          <div className={styles['hourly-graph__dots']} style={divCircleStyle}></div>
          <p className = {styles['hourly-temperature']} style={pTemperatureStyle}>{Math.round(hourElement.temp)}{units === 'metric' ? '°C' : '°F'}</p>
          <div className= {styles['hourly-info']} style={divInfoStyle}>
            <p>{hourlyTime}</p>
            <p>{hourlyDate}</p>
            <p>Weather: {hourElement.weather[0].main}</p>
            <p>UVI: {Math.round(hourElement.uv)}</p>
            <p>Humidity: {Math.round(hourElement.humidity)}%</p>
            <p>POP: {Math.round(hourElement.pop * 100)}%</p>
          </div>
        </li>
    )
  });

  return (
    <div className={styles['hourly-bundle']}>
      <ul >
      {hourlyList}
      </ul>
    </div>
  );
};

export default HourlyWeatherInfo;