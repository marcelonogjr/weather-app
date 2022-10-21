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
import SvgHumidityIcon from '../../UI/WeatherInfo-Icons/HumidityIcon';
import RainProbIcon from '../../UI/WeatherInfo-Icons/RainProbIcon';
import SvgUVIIndexIcons from '../../UI/WeatherInfo-Icons/UVIIcons';
import WeatherIconSelector from '../../UI/Weather-Icons/WeatherIconSelector';
import { graphLiBackground } from '../../../others/graphs-gradient';
import { hourlyDotsBackground } from '../../../others/hourly-dots-color';

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

  modifiedHourlyData.push(modifiedHourlyData[modifiedHourlyData.length - 1]);

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

  const hourlyLiBackgrounds = graphLiBackground(
    units,
    maxTemperatureHourly,
    minTemperatureHourly
  );

  const hourlyList = modifiedHourlyData.map(
    (hourElement, index, hourlyArray) => {
      if (index === 0) {
        return <li key={hourElement.dt + 'null'}></li>;
      }
      const widthCorrection =
        Math.sqrt(
          (9800 / 3) ** 2 +
            (95 -
              (80 *
                (Math.round(hourlyArray[index - 1].temp) -
                  minTemperatureHourly)) /
                rangeTemperatureHourly -
              (95 -
                (80 * (Math.round(hourElement.temp) - minTemperatureHourly)) /
                  rangeTemperatureHourly)) **
              2
        ) /
        (9800 / 3);

      const hourlyTime = timeInfo(TimeConversor(hourElement.dt).time);
      const hourlyDate = dateInfo(TimeConversor(hourElement.dt).date);

      const graphLiStyle: React.CSSProperties = {
        width: `calc(var(--hourly-item-width) / ${modifiedHourlyData.length})`,
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
        background: hourlyLiBackgrounds,
      };
      const pTemperatureStyle: React.CSSProperties = {
        right: `calc(-1.2 * var(--hourly-font-size))`,
        top: `calc(95% - ${
          (80 * (Math.round(hourElement.temp) - minTemperatureHourly)) /
          rangeTemperatureHourly
        }% + 0.5% - 3 * var(--hourly-font-size))`,
      };
      const divCircleStyle: React.CSSProperties = {
        right: `calc(var(--hourly-font-size) / 16 * -3)`,
        top: `calc(95% - ${
          (80 * (Math.round(hourElement.temp) - minTemperatureHourly)) /
          rangeTemperatureHourly
        }% + 0.5% - calc(var(--hourly-font-size) / 16 * 3))`,
        backgroundColor: hourlyDotsBackground(units, hourElement.temp)
      };
      const divInfoStyle: React.CSSProperties = {
        width: `calc(var(--hourly-item-width) / ${modifiedHourlyData.length})`,
        top: `calc(95% - ${
          (80 * (Math.round(hourElement.temp) - minTemperatureHourly)) /
          rangeTemperatureHourly
        }% + 0.5% + 2 * var(--hourly-font-size))`,
        right: `calc(-0.5 * var(--hourly-item-width) / ${modifiedHourlyData.length})`,
      };

      if (index === modifiedHourlyData.length - 1) {
        return (
          <li
            className={styles['hourly-item']}
            key={`li-key_${hourElement.dt}`}
          >
            <div
              style={{
                ...graphLiStyle,
                mask: 'linear-gradient(270deg, transparent 0%, #000 100%)',
                WebkitMask:
                  'linear-gradient(270deg, transparent 0%, #000 100%)',
              }}
            ></div>
          </li>
        );
      }

      return (
        <li className={styles['hourly-item']} key={`li-key_${hourElement.dt}`}>
          <div
            className={styles['graph-lines']}
            style={
              index === 1
                ? {
                    ...graphLiStyle,
                    mask: 'linear-gradient(90deg, transparent 0%, #000 100%)',
                    WebkitMask:
                      'linear-gradient(90deg, transparent 0%, #000 100%)',
                  }
                : graphLiStyle
            }
          ></div>
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
            <RainProbIcon
              rainProbValue={Math.round(hourElement.pop * 100)}
              component='hourly'
            />
          </div>
        </li>
      );
    }
  );

  return (
    <div className={styles['hourly-bundle']}>
      <ul ref={scrollRef} className={styles['hourly-items']}>
        {hourlyList}
      </ul>
    </div>
  );
};

export default HourlyWeatherInfo;
