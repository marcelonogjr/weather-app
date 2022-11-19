import { useContext } from 'react';

import WeatherContext from '../../../store/weather-context';
import { CurrentAPIDataType } from '../../../models/WeatherAPIDataType';
import styles from './CurrentWeatherInfo.module.css';
import TimeConversor, {
  TimeConversorObjectType,
} from '../../../others/time-conversor';
import unitsConversor from '../../../others/units-conversor';
import SvgHumidityIcon from '../../UI/WeatherInfo-Icons/HumidityIcon';
import SvgWindDirectionIcon from '../../UI/WeatherInfo-Icons/WindDirectionIcon';
import SvgUVIIndexIcons from '../../UI/WeatherInfo-Icons/UVIIcons';
import WeatherIconSelector from '../../UI/Weather-Icons/WeatherIconSelector';
import WeatherMap from './CurrentWeatherInfo/WeatherMap';

interface CurrentWeatherInfoProps {
  currentData: CurrentAPIDataType;
  mapImage: undefined | string;
}

const CurrentWeatherInfo = (props: CurrentWeatherInfoProps) => {
  const { units } = useContext(WeatherContext);

  const timeInfo = (timeConversorObject: TimeConversorObjectType) => {
    return (
      <>
        {timeConversorObject.hour.hour > 9
          ? timeConversorObject.hour.hour
          : '0' + timeConversorObject.hour.hour}
        :
        {timeConversorObject.minute > 9
          ? timeConversorObject.minute
          : '0' + timeConversorObject.minute}{' '}
        {timeConversorObject.hour.period}
      </>
    );
  };

  const locationSunrise = timeInfo(
    TimeConversor(props.currentData.sunrise).time
  );
  const locationSunset = timeInfo(TimeConversor(props.currentData.sunset).time);

  return (
    <div className={styles['current-bundle']}>
      <div className={styles['current-info']}>
        <div className={styles['temp-weather-bundle']}>
          <div className={styles['temp-feels-bundle']}>
            <p className={styles['temperature']}>
              {unitsConversor(units, 'temp', props.currentData.temp)}
            </p>
            <p className={styles['feels-like']}>
              Feels like{' '}
              {unitsConversor(units, 'temp', props.currentData.feels_like)}
            </p>
          </div>
          <div className={styles['weather-status']}>
            <WeatherIconSelector
              iconId={props.currentData.weather[0].icon}
              iconDescription={props.currentData.weather[0].description}
              parentComponent='current'
            />
            <p>{props.currentData.weather[0].main}</p>
          </div>
        </div>
        <div className={styles['sunrise-sunset-bundle']}>
          <div className={styles['sunrise-sunset']}>
            <p className={styles['sunrise-sunset__description']}>Sunrise</p>
            <p className={styles['sunrise-sunset__time']}>{locationSunrise}</p>
          </div>
          <div className={styles['sunrise-sunset']}>
            <p className={styles['sunrise-sunset__description']}>Sunset</p>
            <p className={styles['sunrise-sunset__time']}>{locationSunset}</p>
          </div>
        </div>
        <div className={styles['uvi-humidity-bundles']}>
          <SvgUVIIndexIcons
            uvIndex={Math.round(props.currentData.uvi)}
            component='current'
          />
          <div className={styles['uvi-humidity-bundles_others']}>
            <div className={styles['other-parameters']}>
              <p className={styles['other-parameters__description']}>
                Cloudiness
              </p>
              <p className={styles['other-parameters__value']}>
                {Math.round(props.currentData.clouds)}%
              </p>
            </div>
            <div className={styles['other-parameters']}>
              <p className={styles['other-parameters__description']}>
                Avg. Visibility
              </p>
              <p className={styles['other-parameters__value']}>
                {unitsConversor(units, 'lenght', props.currentData.visibility)}
              </p>
            </div>
            <div className={styles['wind']}>
              <p className={styles['wind_description']}>Wind</p>
              <div className={styles['wind_value']}>
                <SvgWindDirectionIcon
                  windDirection={props.currentData.wind_deg}
                  component='current'
                />
                <p>
                  {unitsConversor(units, 'speed', props.currentData.wind_speed)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['uvi-humidity-bundles']}>
          <div className={styles['uvi-humidity-bundles_others']}>
            <div className={styles['other-parameters']}>
              <p className={styles['other-parameters__description']}>
                Dew Point
              </p>
              <p className={styles['other-parameters__value']}>
                {unitsConversor(units, 'temp', props.currentData.dew_point)}
              </p>
            </div>
            <div className={styles['other-parameters']}>
              <p className={styles['other-parameters__description']}>
                Pressure
              </p>
              <p className={styles['other-parameters__value']}>
                {Math.round(props.currentData.pressure)} mb
              </p>
            </div>
          </div>
          <SvgHumidityIcon
            humidityValue={props.currentData.humidity}
            component='current'
          />
        </div>
      </div>
      <WeatherMap mapImage={props.mapImage} />
    </div>
  );
};

export default CurrentWeatherInfo;
