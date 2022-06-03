import { CurrentAPIDataType } from '../../models/WeatherAPIDataType';
import styles from './CurrentWeatherInfo.module.css';

interface CurrentWeatherInfoProps {
  currentData: CurrentAPIDataType;
}

const CurrentWeatherInfo = (props: CurrentWeatherInfoProps) => {
  return (
    <div className={styles['current-bundle']}>
      <p>The temperature in </p>
    </div>
  );
};

export default CurrentWeatherInfo;
