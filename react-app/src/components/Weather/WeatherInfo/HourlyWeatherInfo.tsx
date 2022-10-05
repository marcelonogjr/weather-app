import { useContext } from 'react';
import useHorizontalScroll from '../../custom-hooks/useSideScroll';

import WeatherContext from '../../../store/weather-context';
import { HourlyAPIDataType } from '../../../models/WeatherAPIDataType';
import styles from './HourlyWeatherInfo.module.css';
import TimeConversor, {
  TimeConversorObjectType,
  DateConversorObjectType,
} from '../../../others/time-conversor';
import unitsConversor from '../../../others/units-conversor';
import SvgHumidityIcon from './icons/HumidityIcon';
import RainProbIcon from './icons/RainProbIcon';
import SvgUVIIndexIcons from './icons/UVIIcons';
import WeatherIconSelector from '../../UI/Weather-Icons/WeatherIconSelector';

interface HourlyWeatherInfoProps {
  hourlyData: HourlyAPIDataType;
}

const HourlyWeatherInfo = (props: HourlyWeatherInfoProps) => {
  const { units } = useContext(WeatherContext);
  const scrollRef = useHorizontalScroll();

  const timeInfo = (timeConversorObject: TimeConversorObjectType) => {
    return (
      <b>
        {timeConversorObject.hour.hour > 9
          ? timeConversorObject.hour.hour
          : '0' + timeConversorObject.hour.hour}
        :
        {timeConversorObject.minute > 9
          ? timeConversorObject.minute
          : '0' + timeConversorObject.minute}{' '}
        {timeConversorObject.hour.period}
      </b>
    );
  };
  const dateInfo = (dateConversorObject: DateConversorObjectType) => {
    return (
      <>
        {dateConversorObject.month.numb > 9
          ? dateConversorObject.month.numb
          : '0' + dateConversorObject.month.numb}
        /
        {dateConversorObject.day > 9
          ? dateConversorObject.day
          : '0' + dateConversorObject.day}
        /
        {dateConversorObject.year > 9
          ? dateConversorObject.year
          : '0' + dateConversorObject.year}
      </>
    );
  };

  const modifiedHourlyData = props.hourlyData.map((element) => {
    return {
      ...element,
      temp: +unitsConversor(units, 'temp', element.temp).slice(0, -3),
    };
  });

  const maxTemperatureHourly: number = Math.round(
    [...modifiedHourlyData]
      .map((element) => element.temp)
      .reduce((previousTemp, currentTemp) => {
        return Math.max(previousTemp, currentTemp);
      })
  );
  const minTemperatureHourly: number = Math.round(
    [...modifiedHourlyData]
      .map((element) => element.temp)
      .reduce((previousTemp, currentTemp) => {
        return Math.min(previousTemp, currentTemp);
      })
  );
  const rangeTemperatureHourly: number =
    maxTemperatureHourly - minTemperatureHourly;

  const styleLiWidth = 7000 / modifiedHourlyData.length;
  const styleLiHeight = 250;

  const hourlyList = modifiedHourlyData.map(
    (hourElement, index, hourlyArray) => {
      if (index === 0) {
        return <li key={hourElement.dt + 'null'}></li>;
      }
      const widthCorrection =
        (1 *
          Math.sqrt(
            ((100 * styleLiWidth) / styleLiHeight) ** 2 +
              (95 -
                (80 *
                  (Math.round(hourlyArray[index - 1].temp) -
                    minTemperatureHourly)) /
                  rangeTemperatureHourly -
                (95 -
                  (80 * (Math.round(hourElement.temp) - minTemperatureHourly)) /
                    rangeTemperatureHourly)) **
                2
          )) /
        ((100 * styleLiWidth) / styleLiHeight);

      const hourlyTime = timeInfo(TimeConversor(hourElement.dt).time);
      const hourlyDate = dateInfo(TimeConversor(hourElement.dt).date);

      const graphLiStyle: React.CSSProperties = {
        width: `${styleLiWidth}px`,
        height: `${styleLiHeight}px`,
        clipPath: `polygon(
        0% calc(95% - ${
          (80 *
            (Math.round(hourlyArray[index - 1].temp) - minTemperatureHourly)) /
          rangeTemperatureHourly
        }%), 
        100% calc(95% - ${
          (80 * (Math.round(hourElement.temp) - minTemperatureHourly)) /
          rangeTemperatureHourly
        }%), 
        100% calc(95% - ${
          (80 * (Math.round(hourElement.temp) - minTemperatureHourly)) /
          rangeTemperatureHourly
        }% + ${widthCorrection}%), 
        0% calc(95% - ${
          (80 *
            (Math.round(hourlyArray[index - 1].temp) - minTemperatureHourly)) /
          rangeTemperatureHourly
        }% + ${widthCorrection}%))`,
      };
      const pTemperatureStyle: React.CSSProperties = {
        right: `-20px`,
        top: `calc(95% - ${
          (80 * (Math.round(hourElement.temp) - minTemperatureHourly)) /
          rangeTemperatureHourly
        }% + 0.5% - 37.5px)`,
      };
      const divCircleStyle: React.CSSProperties = {
        right: `-4px`,
        top: `calc(95% - ${
          (80 * (Math.round(hourElement.temp) - minTemperatureHourly)) /
          rangeTemperatureHourly
        }% + 0.5% - 4px)`,
      };
      const divInfoStyle: React.CSSProperties = {
        width: `${styleLiWidth}px`,
        top: `calc(95% - ${
          (80 * (Math.round(hourElement.temp) - minTemperatureHourly)) /
          rangeTemperatureHourly
        }% + 0.5% + 10px)`,
        right: `${styleLiWidth * -0.5}px`,
      };

      return (
        <li id={styles['hourly-graph']} key={`li-key_${hourElement.dt}`}>
          <div className={styles['graph-lines']} style={graphLiStyle}></div>
          <div
            className={styles['hourly-graph__dots']}
            style={divCircleStyle}
          ></div>
          <p className={styles['hourly-temperature']} style={pTemperatureStyle}>
            {unitsConversor(units, 'temp', props.hourlyData[index].temp)}
          </p>
          <div className={styles['hourly-info']} style={divInfoStyle}>
            <WeatherIconSelector
              iconId={hourElement.weather[0].icon}
              iconDescription={hourElement.weather[0].description}
              parentComponent='hourly'
            />
            <p>{hourlyTime}</p>
            <p>{hourlyDate}</p>
            {/* <p>Weather: {hourElement.weather[0].main}</p> */}
            {/* <p>UVI: {Math.round(hourElement.uv)}</p> */}
            {/* <p>Humidity: {Math.round(hourElement.humidity)}%</p> */}
            <div className={styles['uvi_humidity-bundle']}>
              <SvgUVIIndexIcons
                uvIndex={Math.round(hourElement.uv)}
                component='hourly'
              />
              <SvgHumidityIcon
                humidityValue={hourElement.humidity}
                component='hourly'
              />
            </div>
            <RainProbIcon rainProbValue={Math.round(hourElement.pop * 100)} />
            {/* <p>POP: {Math.round(hourElement.pop * 100)}%</p> */}
          </div>
        </li>
      );
    }
  );

  return (
    <div className={styles['hourly-bundle']}>
      <ul ref={scrollRef}>{hourlyList}</ul>
    </div>
  );
};

export default HourlyWeatherInfo;
