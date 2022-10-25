import { useContext } from 'react';
import useHorizontalScroll from '../../custom-hooks/useSideScroll';

import WeatherContext from '../../../store/weather-context';
import { DailyAPIDataType } from '../../../models/WeatherAPIDataType';
import styles from './DailyWeatherInfo.module.css';
import TimeConversor, {
  DateConversorObjectType,
} from '../../../others/time-conversor';
import unitsConversor from '../../../others/units-conversor';
import { graphLiBackground } from '../../../others/graphs-gradient';

import SvgHumidityIcon from '../../UI/WeatherInfo-Icons/HumidityIcon';
import RainProbIcon from '../../UI/WeatherInfo-Icons/RainProbIcon';
import SvgUVIIndexIcons from '../../UI/WeatherInfo-Icons/UVIIcons';
import WeatherIconSelector from '../../UI/Weather-Icons/WeatherIconSelector';

interface DailyWeatherInfoProps {
  dailyData: DailyAPIDataType;
}

const DailyWeatherInfo = (props: DailyWeatherInfoProps) => {
  const { units } = useContext(WeatherContext);
  const scrollRef = useHorizontalScroll();

  const dateInfo = (dateConversorObject: DateConversorObjectType) => {
    return {
      date: (
        <p className={styles['daily-date']}>
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
        </p>
      ),
      weekDay: (
        <p className={styles['daily-week_day']}>
          {dateConversorObject.weekDay}
        </p>
      ),
    };
  };

  const modifiedDailyData = props.dailyData.map((element) => {
    return {
      ...element,
      temp: {
        max: +unitsConversor(units, 'temp', element.temp.max).slice(0, -3),
        min: +unitsConversor(units, 'temp', element.temp.min).slice(0, -3),
      },
    };
  });

  modifiedDailyData.push({...modifiedDailyData[modifiedDailyData.length - 1], dt: 2});

  const maxTemperatureDaily = Math.round(
    [...modifiedDailyData]
      .map((element) => element.temp.max)
      .reduce((previousTemp, currentTemp) => {
        return Math.max(previousTemp, currentTemp);
      })
  );
  const minTemperatureDaily = Math.round(
    [...modifiedDailyData]
      .map((element) => element.temp.min)
      .reduce((previousTemp, currentTemp) => {
        return Math.min(previousTemp, currentTemp);
      })
  );
  const rangeTemperatureDaily = maxTemperatureDaily - minTemperatureDaily;

  const dailyLiBackgrounds = graphLiBackground(
    units,
    maxTemperatureDaily,
    minTemperatureDaily
  );

  const dailyList = modifiedDailyData.map((dayElement, index, dailyArray) => {
    if (index === 0) {
      return <li key={dayElement.dt + 'null'}></li>;
    }

    const dailyDate = dateInfo(TimeConversor(dayElement.dt).date);

    const graphLiStyle: React.CSSProperties = {
      width: `calc(var(--daily-item-width) / ${modifiedDailyData.length})`,
      clipPath: `polygon(
        100% calc(95% - ${
          (80 * (Math.round(dayElement.temp.min) - minTemperatureDaily)) /
          rangeTemperatureDaily
        }%),
        0% calc(95% - ${
          (80 *
            (Math.round(dailyArray[index - 1].temp.min) -
              minTemperatureDaily)) /
          rangeTemperatureDaily
        }%),
        0% calc(95% - ${
          (80 *
            (Math.round(dailyArray[index - 1].temp.max) -
              minTemperatureDaily)) /
          rangeTemperatureDaily
        }%),
        100% calc(95% - ${
          (80 * (Math.round(dayElement.temp.max) - minTemperatureDaily)) /
          rangeTemperatureDaily
        }%)
        )`,
      transform: `translateX(calc(${-index} * var(--daily-font-size) / 16))`,
      background: dailyLiBackgrounds,
    };

    const pMaxTemperatureStyle: React.CSSProperties = {
      right: `calc(-1.2 * var(--daily-font-size))`,
      top: `calc(95% - ${
        (80 * (Math.round(dayElement.temp.max) - minTemperatureDaily)) /
        rangeTemperatureDaily
      }% + 0.5% - 3 * var(--daily-font-size))`,
      transform: `translateX(calc(${-index} * var(--daily-font-size) / 16))`,
    };

    const pMinTemperatureStyle: React.CSSProperties = {
      right: `calc(-1.2 * var(--daily-font-size))`,
      top: `calc(95% - ${
        (80 * (Math.round(dayElement.temp.min) - minTemperatureDaily)) /
        rangeTemperatureDaily
      }% + 0.5% - 0.375 * var(--daily-font-size))`,
      transform: `translateX(calc(${-index} * var(--daily-font-size) / 16))`,
    };

    const divInfoStyle: React.CSSProperties = {
      width: `calc(var(--daily-item-width) / ${modifiedDailyData.length})`,
      top: `calc(95% - ${
        (80 * (Math.round(dayElement.temp.min) - minTemperatureDaily)) /
        rangeTemperatureDaily
      }% + 0.5% + 3 * var(--daily-font-size))`,
      right: `calc(-0.5 * var(--daily-item-width) / ${modifiedDailyData.length})`,
      transform: `translateX(calc(${-index} * var(--daily-font-size) / 16))`,
    };

    if (index === modifiedDailyData.length - 1) {
      return (
        <li className={styles['daily-item']} key={`li-key_${dayElement.dt}`}>
          <div
            style={{
              ...graphLiStyle,
              mask: 'linear-gradient(270deg, transparent 0%, #000 100%)',
              WebkitMask: 'linear-gradient(270deg, transparent 0%, #000 100%)',
            }}
          ></div>
        </li>
      );
    }

    return (
      <li className={styles['daily-item']} key={`li-key_${dayElement.dt}`}>
        <div
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
        <p className={styles['daily-temperature']} style={pMaxTemperatureStyle}>
          {unitsConversor(units, 'temp', props.dailyData[index].temp.max)}
        </p>
        <p className={styles['daily-temperature']} style={pMinTemperatureStyle}>
          {unitsConversor(units, 'temp', props.dailyData[index].temp.min)}
        </p>
        <div className={styles['daily-info']} style={divInfoStyle}>
          <WeatherIconSelector
            iconId={dayElement.weather[0].icon}
            iconDescription={dayElement.weather[0].description}
            parentComponent='daily'
          />
          {dailyDate.weekDay}
          {dailyDate.date}
          <div className={styles['uvi_humidity-bundle']}>
            <SvgUVIIndexIcons
              uvIndex={Math.round(dayElement.uv)}
              component='daily'
            />
            <SvgHumidityIcon
              humidityValue={dayElement.humidity}
              component='daily'
            />
          </div>
          <RainProbIcon
            rainProbValue={Math.round(dayElement.pop * 100)}
            component='daily'
          />
        </div>
      </li>
    );
  });

  return (
    <div className={styles['daily-bundle']}>
      <ul ref={scrollRef} className={styles['daily-items']}>
        {dailyList}
      </ul>
    </div>
  );
};

export default DailyWeatherInfo;
