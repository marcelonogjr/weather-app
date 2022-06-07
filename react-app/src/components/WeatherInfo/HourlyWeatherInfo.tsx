import { HourlyAPIDataType } from '../../models/WeatherAPIDataType';
import styles from './HourlyWeatherInfo.module.css';
import TimeConversor, {
  timeConversorObjectType
} from '../../others/time-conversor';

interface HourlyWeatherInfoProps {
  hourlyData: HourlyAPIDataType;
};

const HourlyWeatherInfo = (props: HourlyWeatherInfoProps) => {

  const timeInfo = (timeConversorObject: timeConversorObjectType) => {
    return (
      <b>
        {timeConversorObject.hour > 9 ? timeConversorObject.hour : '0'+timeConversorObject.hour}:
        {timeConversorObject.minute > 9 ? timeConversorObject.minute : '0'+timeConversorObject.minute}
      </b>
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
      return <></>
    }
    const widthCorrection = 1 * Math.sqrt((100*styleLiWidth/styleLiHeight) ** 2 + (( 95 - (80 * (Math.round(hourlyArray[index-1].temp) - minTemperatureHourly) / rangeTemperatureHourly)) - (95 - (80* (Math.round(hourElement.temp) - minTemperatureHourly) / rangeTemperatureHourly))) ** 2) / (100*styleLiWidth/styleLiHeight);
    
    const hourlyDT = timeInfo(TimeConversor(hourElement.dt).time);
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
      <>
        <div id={styles['hourly-graph']}>
          <li key={`li-key_${hourElement.dt}`} style={graphLiStyle}>
          </li>
          <div className={styles['hourly-graph__dots']} style={divCircleStyle}></div>
          <p className = {styles['hourly-temperature']} style={pTemperatureStyle}>{Math.round(hourElement.temp)}°C</p>
          <div className= {styles['hourly-info']} style={divInfoStyle}>
            <p><b>{hourlyDT}</b></p>
            <p>Weather: {hourElement.weather[0].main}</p>
            <p>UVI: {Math.round(hourElement.uv)}</p>
            <p>Humidity: {Math.round(hourElement.humidity)}%</p>
            <p>POP: {Math.round(hourElement.pop * 100)}%</p>
          </div>
        </div>
      </>
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